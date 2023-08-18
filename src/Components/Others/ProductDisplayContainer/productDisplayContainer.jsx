import React from 'react';
import styles from './productDisplayContainer.module.css';
import RatingContainer from '../RatingContainer/ratingContainer';
import { Link } from 'react-router-dom';
import ProductOptionPanel from '../ProductOptionPanel/productOptionPanel';

function ProductDisplayContainer({ product, category }) {

    let displayProducts;

    if (product !== undefined){
        displayProducts = Object.keys(product).length ? product[category].map((item, idx) => {
            const productLink = `/shop/${category}/${item._id}`;
            return <Link to= {productLink} key={idx} className={styles.productsDisplayItem}>
                <div className={styles.productsImgContainer}>
                    <img src={item.img[0]} alt={item.title} className={styles.productsImg} />
                    <h4 className={styles.productsH4}>{item.title}</h4>
                </div>
                <div className={styles.productsDetailsContainer}>
                    <RatingContainer rating={item.rating} />
                    <h4 className={styles.productsH4}>&pound;{item.price}</h4>
                </div>
                <div className={styles.optionPanel}>
                    <ProductOptionPanel link={productLink} product={item}/>
                </div>
            </Link>
        }) :

        <div className={styles.defaultProduct}>
            <h4 className={styles.productsH4}>Nothing to display</h4>
        </div>
    }


    return (
        <div className={styles.productDisplayContainer}>
            {displayProducts}
        </div>
    )
}

export default ProductDisplayContainer
