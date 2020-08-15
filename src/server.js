const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();

app.use(bodyParser);

mongoose.connect('mongodb://localhost/react-shopping-cart-db', {
  useNewURLParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const Product = mongoose.modelNames(
  'products',
  new mongoose.Schema({
    _id: { type: shortid.generate },
    image: String,
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSize: [String]
  })
);

app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProdcut.save();
  res.send(saveProduct);
});

app.delete('/api/products/:id', async (req, res) => {
  const deletedProdcut = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProdcut);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server at http://localhost:5000'));
