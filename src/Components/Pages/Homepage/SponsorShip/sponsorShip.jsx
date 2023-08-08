import React from 'react';
import styles from './sponsorShip.module.css';
import apple from '../../../../Assets/images/apple.png';
import fiver from '../../../../Assets/images/fiver.png';
import tesla from '../../../../Assets/images/tesla.png';
import lenovo from '../../../../Assets/images/lenovo.png';

function SponsorShip() {
    return (
        <div className={styles.sponsorShipContainer}>
            <div className={styles.sponsorShipImgContainer}>
                <img src={apple} alt="apple" className={styles.sponsorImg} />
            </div>
            <div className={styles.sponsorShipImgContainer}>
                <img src={fiver} alt="fiver" className={styles.sponsorImg} />
            </div>
            <div className={styles.sponsorShipImgContainer}>
                <img src={tesla} alt="tesla" className={styles.sponsorImg} />
            </div>
            <div className={styles.sponsorShipImgContainer}>
                <img src={lenovo} alt="upwork" className={styles.sponsorImg} />
            </div>
        </div>
    )
}

export default SponsorShip
