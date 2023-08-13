import React from 'react';
import styles from './productOptionPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProductOptionPanel({link}) {
    return (
        <div className={styles.optionPanelContainer}>
            <div className={styles.optionPanelItem}>
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
            <div className={styles.optionPanelItem}>
                <Link to={link} className={styles.quickViewLink}>
                    <div className={styles.alertBoxContainer}>
                        <div className={styles.alertBox}>
                            <p className={styles.alert}>Quick view</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.optionPanelIcon} />
                </Link>
            </div>
        </div>
    )
}

export default ProductOptionPanel
