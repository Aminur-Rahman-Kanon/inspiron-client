import React from 'react';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';



function TopbarPanel () {
    return (
        <ul className={styles.topbarPanelContainer}>
            <li className={styles.topbarPanelItem}>
                <a href='#' className={styles.topbarPanelLink}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.topbarPanelIcon}/>
                </a>
            </li>
            <li className={styles.topbarPanelItem}>
                <a href='#' className={styles.topbarPanelLink}>
                    <FontAwesomeIcon icon={faUser} className={styles.topbarPanelIcon}/>
                </a>
            </li>
            <li className={styles.topbarPanelItem}>
                <a href='#' className={styles.topbarPanelLink}>
                    <FontAwesomeIcon icon={faHeart} className={styles.topbarPanelIcon}/>
                </a>
            </li>
            <li className={styles.topbarPanelItem}>
                <a href='#' className={styles.topbarPanelLink}>
                    <FontAwesomeIcon icon={faBagShopping} className={styles.topbarPanelIcon}/>
                    <span className={styles.itemCount}>0</span>
                </a>
            </li>
        </ul>
    )
}

export default TopbarPanel;
