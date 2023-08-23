import React, { useContext, useState } from 'react';
import styles from './productOptionPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../AuthContext/authContext';
import AddItemBtn from '../AddItemBtn/addItemBtn';

function ProductOptionPanel({link, product, productCount}) {

    const context = useContext(AuthContext);

    return (
        <div className={styles.optionPanelContainer}>
            <div className={styles.optionPanelItem}>
                <AddItemBtn context={context} amount={productCount + 1} product={product}>
                    <div className={styles.alertBoxContainer}>
                        <div className={styles.alertBox}>
                            <p className={styles.alert}>Add to cart</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.optionPanelIcon} />
                </AddItemBtn>
            </div>
            {/* </div> */}
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

export default React.memo(ProductOptionPanel);
