import React, { useState } from 'react';
import styles from './productsType.module.css';
import { useContext } from 'react';
import AuthContext from '../../../Others/AuthContext/authContext';
import ProductDisplayContainer from '../../../Others/ProductDisplayContainer/productDisplayContainer';
import 'react-toastify/dist/ReactToastify.css';

function ProductsType () {

    const context = useContext(AuthContext);

    const [category, setCategory] = useState('allProducts');

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
                <ProductDisplayContainer product={context.data.products} category={category} />
            </section>
        </div>
    )
}

export default ProductsType;
