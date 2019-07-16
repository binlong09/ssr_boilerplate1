import express from 'express';
import renderer from './helpers/rendere'

const app = express();

app.use(express.static('public')); // make this folder public
app.get('/', (req, res) => {
  res.send(renderer());
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})