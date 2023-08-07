import React from 'react';
import styles from './productsCategory.module.css';
import { productsCategory } from '../../../Others/Data/data';
import { Link } from 'react-router-dom';

function ProductsCategory() {
    const displayProductsCategory = productsCategory.map(item => {
        return <div key={item.title} className={styles.productsCategoryItem}>
            <div className={styles.productsImgContainer}>
                <img src={item.img} alt={item.title} className={styles.productsImg} />
            </div>
            <div className={styles.productsDetailsContainer}>
                <h4 className={styles.productsCategoryH4}>{item.title}</h4>
                <ul className={styles.productsCategoryLists}>
                    {item.items.map((product, idx) => <li key={idx} className={styles.productsCategoryList}>
                        <Link to={product.link} className={styles.productLink}>{product.name}</Link>
                    </li>)}
                </ul>
            </div>
        </div>
    })
    return (
        <div className={styles.productsCategoryContainer}>
            <h2 className={styles.productsCategoryH2}>Browse by Category</h2>
            <div className={styles.productDisplayContainer}>
                {displayProductsCategory}
            </div>
        </div>
    )
}

export default ProductsCategory
