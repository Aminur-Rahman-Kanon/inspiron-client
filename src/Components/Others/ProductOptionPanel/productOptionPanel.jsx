import React, { useContext, useState } from 'react';
import styles from './productOptionPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../UtilityFunction/utilityFunction';
import AuthContext from '../AuthContext/authContext';

function ProductOptionPanel({link, product}) {

    const context = useContext(AuthContext);
    const [productCount, setProductCount] = useState(1);

    return (
        <div className={styles.optionPanelContainer}>
            <div className={styles.optionPanelItem} onClick={(e) => {
                e.preventDefault();
                setProductCount((productCount) => productCount+1);
                addItemToCart(context, product, productCount);
            }}>
                <div className={styles.alertBoxContainer}>
                    <div className={styles.alertBox}>
                        <p className={styles.alert}>Add to cart</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faCartShopping} className={styles.optionPanelIcon} />
            </div>
            <div className={styles.optionPanelItem}>
                <div className={styles.alertBoxContainer}>
                    <div className={styles.alertBox}>
                        <p className={styles.alert}>Wishlist</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faHeart} className={styles.optionPanelIcon} />
            </div>
            <div className={styles.optionPanelItem} onClick={(e) => {
                e.preventDefault();
                window.location.assign(link);
            }}>
                <div className={styles.alertBoxContainer}>
                    <div className={styles.alertBox}>
                        <p className={styles.alert}>Quick view</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.optionPanelIcon} />
            </div>
        </div>
    )
}

export default ProductOptionPanel
