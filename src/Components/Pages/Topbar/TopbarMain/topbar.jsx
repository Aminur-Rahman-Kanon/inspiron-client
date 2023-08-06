import React from 'react';
import styles from './topbar.module.css';
import logo from '../../../../Assets/images/logo2.png';
import Navbar from '../Navbar/navbar';
import TopbarPanel from '../TopbarPanel/topbarPanel';
import Drawtoggle from '../../../Others/Drawtoggle/drawtoggle';

function Topbar ({ changeSidedrawer }) {
    return (
        <div className={styles.topBarContainer}>
            <div className={styles.toBarItemContainer}>
                <img src={logo} alt="inspiron" className={styles.logo} />
                <Drawtoggle toggleSidedrawer={changeSidedrawer}/>
            </div>
            <div className={styles.toBarItemContainer}>
                <Navbar />
            </div>
            <div className={styles.toBarItemContainer}>
                <TopbarPanel />
            </div>
        </div>
    )
}

export default Topbar;
