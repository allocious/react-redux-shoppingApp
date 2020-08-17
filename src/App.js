//Feature 1
import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
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
                <Filter />
                <Products />
              </div>
              <div className='sidebar'>
                <Cart />
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
