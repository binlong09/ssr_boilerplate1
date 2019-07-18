import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

// Any request that tries to access the route of /api will be
// automatically sent off to the domain
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  // strictly api specific
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}))

app.use(express.static('public')); // make this folder public
app.get('*', (req, res) => {
  const store = createStore(req);

  // matchRoutes returns an array of components that are about to render
  // for every route that just got matched, check to see if there is loadData in the object
  // if yes, invoke it, otherwise, return null
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    // after all promises are resolved, render the application
    res.send(renderer(req, store));
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})