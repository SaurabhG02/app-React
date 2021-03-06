import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
    return(
        <div className={classes.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
          <div className={classes.TimeSection}>
            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>
          {/* <div className={classes.HeartBeatSeaction}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div> */}
        </div>
    );
}

export default ProductPreview;