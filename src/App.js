import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData'

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
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
        </div>
        <div className={classes.Productdata}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="red Colourd" />
            <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="black Colourd" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="blue Colourd" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="purple Colourd" />
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={classes.FeatureItem}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
