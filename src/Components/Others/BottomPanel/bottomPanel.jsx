import React from 'react';
import styles from './bottomPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faAddressCard, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';

function BottomPanel () {

    return (
        <div className={styles.bottomPanelContainer}>
            <div className={styles.bottomPanelItem}>
                <FontAwesomeIcon icon={faShop} className={styles.bottomPanelIcon}/>
                <p className={styles.bottomPanelP}>Shop</p>
            </div>
            <div className={styles.bottomPanelItem}>
                <FontAwesomeIcon icon={faAddressCard} className={styles.bottomPanelIcon}/>
                <p className={styles.bottomPanelP}>Account</p>
            </div>
            <div className={styles.bottomPanelItem}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.bottomPanelIcon}/>
                <p className={styles.bottomPanelP}>Search</p>
            </div>
            <div className={styles.bottomPanelItem}>
                <FontAwesomeIcon icon={faHeart} className={styles.bottomPanelIcon}/>
                <p className={styles.bottomPanelP}>Wishlist</p>
            </div>
        </div>
    )
}

export default BottomPanel;
