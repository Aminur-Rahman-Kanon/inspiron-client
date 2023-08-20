import React, {useContext } from 'react';
import styles from './topSellingProduct.module.css';
import AuthContext from '../../../Others/AuthContext/authContext';
import ProductDisplayContainer from '../../../Others/ProductDisplayContainer/productDisplayContainer';

function TopSellingProduct() {

    const context = useContext(AuthContext);

    return (
        <div className={styles.topSellingContainer}>
            <h2 className={styles.topSellingH2}>Top Selling Products</h2>
            <div className={styles.topSellingProductDisplay}>
                <ProductDisplayContainer product={context.data.products} category={'popularProducts'}/>
            </div>
        </div>
    )
}

export default TopSellingProduct;
