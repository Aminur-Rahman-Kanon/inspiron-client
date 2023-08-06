import React from 'react';
import styles from './additionalBanner2.module.css';

function AdditionalBanner2() {
    return (
        <section className={styles.additionalBanner2Container}>
            <div className={styles.additionalBanner2Item}>
                <div className={`${styles.additionalBanner2ImgContainer} ${styles.item1}`}>

                </div>
                <div className={styles.additionalBanner2DetailsContainer}>
                    <p className={styles.additionalBanner2P}>Flat Deal Upto 70%</p>
                    <h3 className={styles.additionalBanner2H3}>Camera</h3>
                </div>
            </div>
            <div className={`${styles.additionalBanner2Item} ${styles.item2}`}>
                <div className={`${styles.additionalBanner2ImgContainer} ${styles.item2}`}>

                </div>
                <div className={styles.additionalBanner2DetailsContainer}>
                    <p className={styles.additionalBanner2P}>Hot Sale 2023</p>
                    <h3 className={styles.additionalBanner2H3}>Smart Phone</h3>
                </div>
            </div>
            <div className={`${styles.additionalBanner2Item} ${styles.item3}`}>
                <div className={`${styles.additionalBanner2ImgContainer} ${styles.item3}`}>

                </div>
                <div className={styles.additionalBanner2DetailsContainer}>
                    <p className={styles.additionalBanner2P}>Shop Brands Xbox</p>
                    <h3 className={styles.additionalBanner2H3}>Gamepad</h3>
                </div>
            </div>
        </section>
    )
}

export default AdditionalBanner2
