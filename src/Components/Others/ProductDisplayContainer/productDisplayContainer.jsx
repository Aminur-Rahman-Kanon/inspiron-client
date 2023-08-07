import React from 'react';
import styles from './productDisplayContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { optionContainerData } from '../Data/data';

function ProductDisplayContainer({ product, category }) {

    const displayProducts = Object.keys(product).length ? product[category].map((item, idx) => {
        return <section key={idx} className={styles.productsDisplayItem}>
            <div className={styles.productsImgContainer}>
                <img src={item.img[0]} alt={item.title} className={styles.productsImg} />
            </div>
            <div className={styles.productsDetailsContainer}>
                <h4 className={styles.productsH4}>{item.title}</h4>
                {/*rating container*/}
                <p className={styles.productsP}>&pound;{item.price}</p>
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
        </section>
    }) :

    <div className={styles.defaultProduct}>
        <h4 className={styles.productsH4}>Nothing to display</h4>
    </div>

    return (
        <div className={styles.productDisplayContainer}>
            {displayProducts}
        </div>
    )
}

export default ProductDisplayContainer
