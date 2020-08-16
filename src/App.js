//Feature 1
import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
      size: '',
      sort: ''
    };
  }

  createOrder = order => {
    console.log('Need to save order for ' + order.name);
  };

  removeFromCart = product => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(x => x._id !== product._id) });
    localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(x => x._id !== product._id)));
  };

  addToCart = product => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({
      cartItems
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  sortProducts = event => {
    const sort = event.target.value;
    this.setState(state => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (sort === 'lowest' ? (a.price > b.price ? 1 : -1) : sort === 'highest' ? (a.price < b.price ? 1 : -1) : a._id < b._id ? 1 : -1))
    }));
  };

  filterProducts = event => {
    if (event.target.value === '') {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      });
    }
  };
  render() {
    return (
      <Provider store={store}>
        <div className='grid-container'>
          <header className='bg-primary  text-white'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col'>
                  <a href='/' className=' text-white'>
                    React Shopping Cart
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main>
            <div className='content'>
              <div className='main'>
                <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort} filterProducts={this.filterProducts} sortProducts={this.sortProducts} />
                <Products products={this.state.products} addToCart={this.addToCart} />
              </div>
              <div className='sidebar'>
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
              </div>
            </div>
          </main>
          <footer className='bg-primary text-white'>All rights reserved by @allocious</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
