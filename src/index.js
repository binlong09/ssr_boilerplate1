import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public')); // make this folder public
app.get('*', (req, res) => {
  const store = createStore();

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