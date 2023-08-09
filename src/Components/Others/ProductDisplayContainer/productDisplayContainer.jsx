import React from 'react';
import styles from './productDisplayContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { optionContainerData } from '../Data/data';
import RatingContainer from '../RatingContainer/ratingContainer';
import { Link } from 'react-router-dom';

function ProductDisplayContainer({ product, category }) {

    let displayProducts;

    if (product !== undefined){
        displayProducts = Object.keys(product).length ? product[category].map((item, idx) => {
            return <Link to= {`/product/${category}/${item._id}`} key={idx} className={styles.productsDisplayItem}>
                <div className={styles.productsImgContainer}>
                    <img src={item.img[0]} alt={item.title} className={styles.productsImg} />
                    <h4 className={styles.productsH4}>{item.title}</h4>
                </div>
                <div className={styles.productsDetailsContainer}>
                    <RatingContainer rating={item.rating} />
                    <h4 className={styles.productsH4}>&pound;{item.price}</h4>
                </div>
                <div className={styles.optionPanelContainer}>
                    {
                        optionContainerData.map((option, idx) => <div key={idx} className={styles.optionPanelItem}>
                            <div className={styles.alertBoxContainer}>
                                <div className={styles.alertBox}>
                                    <p className={styles.alert}>{option.name}</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={option.icon} className={styles.optionPanelIcon} />
                        </div>)
                    }
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
