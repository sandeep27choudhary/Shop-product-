import React from 'react';
import classes from './App.module.css';
import ProductDetails from './ProductDetails'
import ProductPreview from './ProductPreview';
function App() {

  return (
    <div className="App">
      <header className="App-header">
       <nav className={classes.Topbar}>
         <img src="https://imgur.com/a/AZMwXZc.png"
         alt="logo"/>
       </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview/>
        </div>

      <div>
        <ProductDetails/>
      </div>
      
      </div>
    </div>
  );
}

export default App;
