import React from 'react';
import styles from './sidedrawer.module.css';
import Navbar from '../../Pages/Topbar/Navbar/navbar';
import logo from '../../../Assets/images/logo2.png';
import BottomPanel from '../BottomPanel/bottomPanel';

function Sidedrawer ({ sidedrawer }) {
    return (
        <div className={sidedrawer ? `${styles.sidedrawerContainer} ${styles.open}` : styles.sidedrawerContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="inspiron" className={styles.logo} />
            </div>
            <Navbar />
            <BottomPanel />
        </div>
    )
}

export default Sidedrawer;
