import React from 'react';

function App() {
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
      <main>Product List</main>
      <footer className='bg-primary text-white'>All rights reserved by @allocious</footer>
    </div>
  );
}

export default App;
