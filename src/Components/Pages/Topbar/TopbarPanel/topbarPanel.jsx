import React, { useContext, useEffect, useState } from 'react';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import DisplayCartItem from '../DisplayCartItem/displayCartItem';
import AuthContext from '../../../Others/AuthContext/authContext';

function TopbarPanel () {
    
    const context = useContext(AuthContext);

    const [item, setitem] = useState({});

    useEffect(() => {
        fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ deviceId: context.data.deviceId })
        }).then(res =>res.json()).then(data => setitem(data.data)).catch(err => console.log(err));
    }, [context])

    // const cartObj = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : {}

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
                    <span className={styles.itemCount}>{item && Object.keys(item).length || 0}</span>
                </a>
                <div className={styles.displayCart}>
                    <DisplayCartItem cart={item} />
                </div>
            </li>
        </ul>
    )
}

export default TopbarPanel;
