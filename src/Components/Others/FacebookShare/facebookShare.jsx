import React from 'react';
import styles from './facebookShare.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

function FacebookShare({link, title, description, image}) {

    return (
        <>
        <Helmet>
            <title>Inspiron</title>
            <meta name="og:type" content="website"/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={description}/>
            <meta name="og:image" content={image}/>
            <meta name="og:image:width" content="600"/>
            <meta name="og:image:height" content="600"/>
        </Helmet>
        <div className={styles.fbShareContainer} data-href='https://inspiron-19oa.onrender.com/' data-layout="box_count" data-size="large">
            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} className={styles.fbShareLink}>
                <FontAwesomeIcon icon={faSquareFacebook} className={styles.fbIcon}/>
                <span className={styles.fbTag}>Share</span>
            </a>
        </div>
        </>
    )
}

export default FacebookShare
