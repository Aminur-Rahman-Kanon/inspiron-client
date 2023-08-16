import React from 'react';
import ReactDOM from 'react-dom';
import styles from './facebookShare.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FacebookIcon, FacebookShareButton } from 'react-share';

function FacebookShare({link, title}) {

    ReactDOM.render(<div className={styles.fbShareContainer} data-href='https://inspiron-19oa.onrender.com/' data-layout="" data-size="">
        <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} className={styles.fbShareLink}>
                <FontAwesomeIcon icon={faSquareFacebook} className={styles.fbIcon}/>
                <span className={styles.fbTag}>Share</span>
        </a>
        </div>, document.getElementById('fb-root'))
}

export default FacebookShare
