import React from 'react';
import styles from './facebookShare.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet-async';

function FacebookShare({link, title, description, image}) {
    
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>Inspiron</title>
                <meta name="og:type" content="website"/>
                <meta name="og:title" content={title}/>
                <meta name="og:description" content={description}/>
                <meta name="og:image:url" content={image}/>
                <meta name="og:image:type" content="image/png"/>
                <meta name="og:image:width" content="600"/>
                <meta name="og:image:height" content="600"/>
            </Helmet>
            <div className={styles.fbShareContainer} data-href='https://inspiron-19oa.onrender.com/' data-layout="box_count" data-size="large">
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} className={styles.fbShareLink}>
                    <FontAwesomeIcon icon={faSquareFacebook} className={styles.fbIcon}/>
                    <span className={styles.fbTag}>Share</span>
                </a>
            </div>
        </div>
    )
}

export default FacebookShare
