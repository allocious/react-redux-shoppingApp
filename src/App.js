//Feature 1
import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: ''
    };
  }
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

              <Products products={this.state.products} />
            </div>
            <div className='sidebar'>Cart Items</div>
          </div>
        </main>
        <footer className='bg-primary text-white'>All rights reserved by @allocious</footer>
      </div>
    );
  }
}

export default App;
