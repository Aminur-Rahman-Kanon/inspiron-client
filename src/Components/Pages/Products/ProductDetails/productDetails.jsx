import React, { useContext, useEffect, useState } from 'react';
import styles from './productDetails.module.css';
import AuthContext from '../../../Others/AuthContext/authContext';
import { Link, useParams } from 'react-router-dom';
import RatingContainer from '../../../Others/RatingContainer/ratingContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function ProductDetails() {

    const params = useParams();
    const products = useContext(AuthContext).products;

    const [item, setItem] = useState(null);
    const [relatedItem, setRelatedItem] = useState([]);
    const [imgIdx, setImgIdx] = useState(0);

    useEffect(() => {
        const category = products[params.category];
        if (category !== undefined){
            const product = category.filter((item) => item._id === params.productId)
            setItem(product[0]);
        }
    }, [products]);

    const productDisplay = item !== null ? <section className={styles.productDisplayContainer}>
        <div className={styles.productDisplayItem}>
            <div className={styles.mainImgContainer}>
                <img src={item.img[imgIdx]} alt={item.title} className={styles.mainImg} />
            </div>
            <div className={styles.otherImgContainer}>
                {item.img.map((imgs, idx) => <div key={idx}
                                                  className={styles.otherImgItem}
                                                  onClick={() => setImgIdx(idx)}>
                    <img src={imgs} alt={item.title} className={imgIdx === idx ? `${styles.otherImg} ${styles.activeImg}` : styles.otherImg} />
                </div>)}
            </div>
        </div>
        <div className={styles.productDisplayItem}>
            <div className={styles.detailsContainer}>
                <h3 className={styles.productDetailsH3}>{item.title}</h3>
                <h3 className={styles.productDetailsH3}>&pound;{item.price}</h3>
                <div className={styles.ratingContainer}>
                    <RatingContainer rating={item.rating}/>
                </div>
                <div className={styles.wathingContainer}>
                    <FontAwesomeIcon icon={faEye} className={styles.watchingIcon} />
                    <span className={styles.watchingPeople}>{item.watching} people are watching this product</span>
                </div>
                <div className={styles.actionContainer}>
                    <Link className={styles.actionLink}>Add to cart</Link>
                    <Link className={styles.actionLink}>Buy now</Link>
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <h4 className={styles.productDetailsH4}>Specification</h4>
                <ul className={styles.detailsContainerLists}>
                    {item.details.map(list => <li className={styles.detailsContainerList}>{list}</li>)}
                </ul>
            </div>
            <div className={styles.aboutContainer}>
                <h4 className={styles.productDetailsH4}>About</h4>
                <p className={styles.about}>{item.about}</p>
            </div>
        </div>
    </section>
    :
    <section className={styles.defaultContainer}>
        <h3>No item</h3>
    </section>

    return (
        <div className={styles.productDetailsContainer}>
            {productDisplay}
        </div>
    )
}

export default ProductDetails
