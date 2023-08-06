import React, {useContext } from 'react';
import styles from './topSellingProduct.module.css';
import AuthContext from '../../../Others/AuthContext/authContext';

function TopSellingProduct() {

    const product = useContext(AuthContext);

    const displayProducts = Object.keys(product.products).length ? product.products.popularProducts.map(item => {
        return <div className={styles.topSellingitem}>
            <div className={styles.topSellingImgContainer}>
                <img src={item.img[0]} alt={item.title} className={styles.topSellingImg} />
            </div>
            <div className={styles.topSellingDetailsContainer}>
                <h4 className={styles.topSellingH4}>{item.title}</h4>
                <h4 className={styles.topSellingH4}>&pound;{item.price}</h4>
            </div>
        </div>
    })
    :
    <div className={styles.defaultProductContainer}>
        <h4 className={styles.topSellingH4}>Nothing to Display</h4>
    </div>

    return (
        <div className={styles.topSellingContainer}>
            <h2 className={styles.topSellingH2}>Top Selling Products</h2>
            <div className={styles.topSellingProductDisplay}>
                {displayProducts}
            </div>
        </div>
    )
}

export default TopSellingProduct;
