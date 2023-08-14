import React, { useContext, useEffect, useState } from 'react';
import styles from './productDetails.module.css';
import AuthContext from '../../../Others/AuthContext/authContext';
import { Link, useParams } from 'react-router-dom';
import RatingContainer from '../../../Others/RatingContainer/ratingContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../../Others/Carousel/carousel';
import ImageMagnifier from '../../../Others/ImageMagnifier/imageMagnifier';

function ProductDetails() {

    const context = useContext(AuthContext)

    const params = useParams();

    const [item, setItem] = useState(null);
    const [relatedItem, setRelatedItem] = useState([]);
    const [imgIdx, setImgIdx] = useState(0);
    const [imgMagnify, setImgMagnify] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);

    useEffect(() => {
        fetch(`https://inspiron-server-9gmf.onrender.com/shop/${params.category}`).then(res => res.json()).then(result => {
            const data = JSON.parse(JSON.stringify(result.data));
            if (data.length){
                let itemIdx;
                data.forEach((item, idx) => {
                    if (item._id === params.productId){
                        return itemIdx = idx;
                    }
                })
                if (itemIdx !== undefined){
                    const product = data[itemIdx];
                    data.splice(itemIdx, 1);
                    setItem(product);
                    setRelatedItem(data);
                }
            }
        }).catch(err => console.log(err));
    }, [])

    const productDisplay = item !== null ? <section className={styles.productDisplayContainer}>
        <div className={styles.productDisplayItem}>
            <div className={styles.mainImgContainer}>
                <img src={item.img[imgIdx]}
                     alt={item.title}
                     className={styles.mainImg}
                     onMouseMove={(e) => {
                        const { top, left } = e.currentTarget.getBoundingClientRect();
                        const x = e.pageX -left -window.pageXOffset;
                        const y = e.pageY -top -window.pageYOffset;
                        setXY([x, y]);
                     }}
                     onMouseEnter={() => {
                        // context.toggleBackdrop(true);
                        setImgMagnify(true);
                     }}
                     onMouseLeave={() => {
                        // context.toggleBackdrop(false);
                        setImgMagnify(false);
                     }} />
                <ImageMagnifier display={imgMagnify} src={item.img[imgIdx]} cursorPosition={{x, y}}/>
            </div>
            <div className={styles.otherImgContainer}>
                {item.img.map((imgs, idx) => <div key={idx}
                                                  className={imgIdx === idx ? `${styles.otherImgItem} ${styles.activeImg}` : styles.otherImgItem}
                                                  onClick={() => setImgIdx(idx)}>
                    <img src={imgs} alt={item.title} className={styles.otherImg} />
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
            <div className={styles.relatedItemContainer}>
                <h2 className={styles.productDetailsH2}>Related Products</h2>
                <div className={styles.relatedProducts}>
                    <Carousel data={relatedItem} category={params.category} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
