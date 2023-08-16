import React from 'react';
import styles from './facebookShare.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

function FacebookShare({link, title}) {

    return (
        <div className={styles.fbShareContainer} data-href={`https://inspiron-19oa.onrender.com/${link}`} data-layout="" data-size="">
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} className={styles.fbShareLink}>
                <FontAwesomeIcon icon={faSquareFacebook} className={styles.fbIcon}/>
                <span className={styles.fbTag}>Share</span>
            </a>
        </div>
    )
}

export default FacebookShare
