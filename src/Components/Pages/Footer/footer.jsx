import React from 'react';
import styles from './footer.module.css';
import visa from '../../../Assets/visa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section className={styles.footerContainer}>
            <div className={styles.footerTopItem}>
                <div className={styles.footerTopItemContainer}>
                    <h3 className={styles.footerH3}>Get in touch</h3>
                    <h4 className={styles.footerInfo}>Call Us 24/7 Free</h4>
                    <p className={styles.phoneNumber}>1800 6565 222</p>
                    <p className={styles.footerP}>60, 29th Street, San Francisco, CA 94110, United States
                    support@arostore.com</p>
                    <div className={styles.socialLinkContainer}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.socialLinkIcon} />
                        <FontAwesomeIcon icon={faInstagram} className={styles.socialLinkIcon} />
                        <FontAwesomeIcon icon={faTwitter} className={styles.socialLinkIcon} />
                        <FontAwesomeIcon icon={faYoutube} className={styles.socialLinkIcon} />
                    </div>
                </div>

                <div className={styles.footerTopItemContainer}>
                    <h3 className={styles.footerH3}>Information</h3>
                    <ul className={styles.informationList}>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>About Us</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Our Blog</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Return or Refund</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Contact Us</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Shipping FAQs</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>All Product</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerTopItemContainer}>
                    <h3 className={styles.footerH3}>Useful Links</h3>
                    <ul className={styles.informationList}>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Smartphones</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Headphones</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Laptop & Pc</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Gadgets</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>My Account</a>
                        </li>
                        <li className={styles.informationListItem}>
                            <a href='#' className={styles.informationListLink}>Order Tracking</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottomItem}>
                <div className={styles.footerBottomItem}>
                    <h4 className={styles.footerBottomH4}>2023 Inspiron. All rights reserved</h4>
                </div>
                <div className={styles.footerBottomImgContainer}>
                    <img src={visa} alt="payment-method" className={styles.footerBottomImg} />
                </div>
            </div>
        </section>
    )
}

export default Footer
