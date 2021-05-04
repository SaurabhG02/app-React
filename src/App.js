import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData'
import ProductPreview from './ProductPreview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="Amazon Logo" />
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        

      </div>
    </div>
  );
}

export default App;
