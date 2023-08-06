import React from 'react';
import styles from './featuredProduct.module.css';
import { Link } from 'react-router-dom';

function FeaturedProduct () {
    return (
        <div className={styles.featuredProductContainer}>
            <div className={styles.featuredProductDetails}>
                <h2 className={styles.featuredProductH2}>Apple Watch Series 8</h2>
                <h4 className={styles.featuredProductH4}>Limited Weekly deals<span className={styles.price}> &pound;349</span></h4>
                <Link to="#" className={styles.featuredProductLink}>Shop Now</Link>
            </div>
        </div>
    )
}

export default FeaturedProduct;
