import React, { useState } from 'react';
import styles from './productsType.module.css';
import { useContext } from 'react';
import AuthContext from '../../../Others/AuthContext/authContext';

function ProductsType () {

    const context = useContext(AuthContext);

    const [category, setCategory] = useState('allProducts');

    const displayProducts = Object.keys(context.products).length ? context.products[category].map((item, idx) => {
        return <section key={idx} className={styles.productsDisplayItem}>
            <div className={styles.productsImgContainer}>
                <img src={item.img[0]} alt={item.title} className={styles.productsImg} />
            </div>
            <div className={styles.productsDetailsContainer}>
                <h4 className={styles.productsH4}>{item.title}</h4>
                {/*rating container*/}
                <p className={styles.productsP}>&pound;{item.price}</p>
            </div>
        </section>
    }) :

    <div className={styles.defaultProduct}>
        <h4 className={styles.productsH4}>Nothing to display</h4>
    </div>

    console.log(context);

    return (
        <div className={styles.productsTypeContainer}>
            <section className={styles.productsNavContainers}>
                <button className={category === 'allProducts' ? `${styles.productsNavBtn} ${styles.active}` : styles.productsNavBtn}
                        onClick={() => setCategory('allProducts')}>
                    All Products
                </button>
                <button className={category === 'newArrivals' ? `${styles.productsNavBtn} ${styles.active}` : styles.productsNavBtn}
                        onClick={() => setCategory('newArrivals')}>
                    New Arrivals
                </button>
                <button className={category === 'popularProducts' ? `${styles.productsNavBtn} ${styles.active}` : styles.productsNavBtn}
                        onClick={() => setCategory('popularProducts')}>
                    Popular Products
                </button>
                <button className={category === 'onSale' ? `${styles.productsNavBtn} ${styles.active}` : styles.productsNavBtn}
                        onClick={() => setCategory('onSale')}>
                    On Sale
                </button>
            </section>
            <section className={styles.productsDisplayContainer}>
                {displayProducts}
            </section>
        </div>
    )
}

export default ProductsType;
