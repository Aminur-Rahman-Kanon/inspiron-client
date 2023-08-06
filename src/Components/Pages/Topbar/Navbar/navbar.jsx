import React from 'react';
import styles from './navbar.module.css';

function Navbar () {
    return (
        <ul className={styles.navbarContainer}>
            <li className={styles.navbarItem}>
                <a href='/' className={styles.navbarLink}>Home</a>
            </li>
            <li className={styles.navbarItem}>
                <a href='#' className={styles.navbarLink}>Shop</a>
            </li>
            <li className={styles.navbarItem}>
                <a href='#' className={styles.navbarLink}>Products</a>
            </li>
            <li className={styles.navbarItem}>
                <a href='#' className={styles.navbarLink}>Blog</a>
            </li>
            <li className={styles.navbarItem}>
                <a href='#' className={styles.navbarLink}>Pages</a>
            </li>
        </ul>
    )
}

export default Navbar;
