import React from 'react';
import styles from './ratingContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function RatingContainer({ rating }) {
    if (rating === undefined || null) return;
    
    const ratingCount = 5 - rating;
    const totalRating = Array.from(Array(rating)).map((star, idx) => 
        <FontAwesomeIcon key={idx} icon={faStar} className={`${styles.rating} ${styles.active}`}/>
    ).concat(
        Array.from(Array(ratingCount)).map((star, idx) => <FontAwesomeIcon key={idx+11} icon={faStar} className={styles.rating} />)
    )

    return (
        <div className={styles.ratingContainer}>
            {totalRating}
        </div>
    )
}

export default RatingContainer
