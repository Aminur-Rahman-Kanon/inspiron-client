import React from 'react';
import styles from './additionalBanner.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function AdditionalBanner () {
    return (
        <div className={styles.additionalBannerContainer}>
            <div className={styles.additionalBannerItem}>
                <div className={`${styles.additionalBannerImgContainer} ${styles.banner1}`}>

                </div>
                <div className={styles.additionalBannerDetailsContainer}>
                    <p className={styles.additionalBannerP}>Save upto 50%</p>
                    <h3 className={styles.additionalBannerH3}>Playstations</h3>
                    <Link to="#" className={styles.additionalBannerLink}>
                        <p className={styles.additionalLinkP}>Lets Go</p>
                        <FontAwesomeIcon icon={faCircleChevronRight} className={styles.additionalLinkIcon}/>
                    </Link>
                </div>
            </div>
            <div className={styles.additionalBannerItem}>
                <div className={`${styles.additionalBannerImgContainer} ${styles.banner2}`}>

                </div>
                <div className={styles.additionalBannerDetailsContainer}>
                    <p className={styles.additionalBannerP}>Best Seller 2023</p>
                    <h3 className={styles.additionalBannerH3}>iPhone</h3>
                    <Link to="#" className={styles.additionalBannerLink}>
                        <p className={styles.additionalLinkP}>Lets Go</p>
                        <FontAwesomeIcon icon={faCircleChevronRight} className={styles.additionalLinkIcon}/>
                    </Link>
                </div>
            </div>
            <div className={styles.additionalBannerItem}>
                <div className={`${styles.additionalBannerImgContainer} ${styles.banner3}`}>

                </div>
                <div className={styles.additionalBannerDetailsContainer}>
                    <p className={styles.additionalBannerP}>Free Shipping All</p>
                    <h3 className={styles.additionalBannerH3}>Macbook Pro</h3>
                    <Link to="#" className={styles.additionalBannerLink}>
                        <p className={styles.additionalLinkP}>Lets Go</p>
                        <FontAwesomeIcon icon={faCircleChevronRight} className={styles.additionalLinkIcon}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdditionalBanner;
