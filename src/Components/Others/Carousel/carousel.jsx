import React, { useRef } from 'react'
import styles from './carousel.module.css';
import RatingContainer from '../RatingContainer/ratingContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({data, category}) {
    const otherItemRef = useRef();
    if(!data) return;


    const displayItem = data.map(relatedItems => <a key={relatedItems._id} href={`/shop/${category}/${relatedItems._id}`} className={styles.carouselItem}>
            <div className={styles.carouselImgContainer}>
                <img src={relatedItems.img[0]} alt={relatedItems.title} className={styles.carouselImg} />
                <h3 className={styles.carouselH3}>{relatedItems.title}</h3>
            </div>
            <div className={styles.carouselDetailsContainer}>
                <RatingContainer rating={relatedItems.rating} />
                <h3 className={styles.carouselH3}>&pound;{relatedItems.price}</h3>
            </div>
        </a>
    )

    return (
        <section className={styles.relatedProductsMain}>
            <div className={styles.relatedItemsItemContainer} ref={otherItemRef}>
                {displayItem}
            </div>
            <div className={styles.pagintaionContainer}>
                <button disabled={!data.length} className={styles.angleIconContainer} onClick={() => otherItemRef.current.scrollBy({ top: 0 ,left: -259, behavior: "smooth" })}>
                    <FontAwesomeIcon icon={faAngleLeft} className={styles.angleIcon}/>
                </button>

                <button disabled={!data.length} className={styles.angleIconContainer} onClick={() => otherItemRef.current.scrollBy({ top: 0, left: 259, behavior: "smooth" })}>
                    <FontAwesomeIcon icon={faAngleRight} className={styles.angleIcon}/>
                </button>
            </div>
        </section>
    )

    // return <Slider {...settings} >
    //     {displayItem}
    // </Slider>
}

export default Carousel
