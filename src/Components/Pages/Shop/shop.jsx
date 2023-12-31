import React, { useEffect, useState } from 'react';
import styles from './shop.module.css';
import { productsCategory } from '../../Others/Data/data';
import { useParams } from 'react-router-dom';
import RatingContainer from '../../Others/RatingContainer/ratingContainer';
import { Link } from 'react-router-dom';
import ShopBanner from './ShopBanner/shopBanner';
import ProductOptionPanel from '../../Others/ProductOptionPanel/productOptionPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../Others/Backdrop/backdrop';

function Shop() {

    const params = useParams();

    const [category, setCategory] = useState(params.category || 'watches');

    const [products, setProducts] = useState([]);

    const [toggleSidebar, setToggleSidebar] = useState(false);

    const [backdrop, setBackdrop] = useState(false);

    useEffect(() => {
        fetch(`https://inspiron-server-9gmf.onrender.com/shop/${category}`)
        .then(res => res.json())
        .then(result => setProducts(result.data))
        .catch(err => console.log(err));
    }, [category]);

    console.log(products);

    const closeSidePanel = (item) => {
        setCategory(item);
        setToggleSidebar(false);
        setBackdrop(false);
    }

    const categories = productsCategory.map((item, idx) => <div key={idx}
        onClick={() => closeSidePanel(item.linkName)}
        className={styles.categoryListItem}>
        <div className={styles.categoryImgContainer}>
            <img src={item.img} alt={item.title} className={styles.categoryImg}/>
        </div>
        <p className={styles.categoryP} style={category === item.linkName ? {color: '#4d53f6'} : {color: 'rgb(75, 75, 75)'}}>{item.title}</p>
    </div>)

    const displayProducts = products.length ? <div className={styles.productDisplayContainer}>
        {
            products.map(item => {
                const productLink = `/shop/${category}/${item._id}`;
                return <Link key={item.title}
                             to={productLink}
                             className={styles.productsItem}>
                    <div className={styles.productsImgContainer}>
                        <img src={item.img[0]} alt={item.title} className={styles.productsImg} />
                        <h4 className={styles.productsH4}>{item.title}</h4>
                    </div>
                    <div className={styles.productsDetailsContainer}>
                        <RatingContainer  rating={item.rating} />
                        <h4 className={styles.productsH4}>&pound;{item.price}</h4>
                    </div>
                    <div className={styles.optionPanel}>
                        <ProductOptionPanel link={productLink} product={item}/>
                    </div>
                </Link>
            })
        }
    </div>
    :
    <div className={styles.defaultProductDisplay}>
        <h4>Nothing to display</h4>
    </div>

    return (
        <>
        <Backdrop backdrop={backdrop} togglebackdrop={() => {
            setToggleSidebar(false);
            setBackdrop(false);
        }}/>
        <section className={styles.shopContainerMain}>
            <ShopBanner item={category}/>
            <div className={styles.toggleBtnContainer}>
                <div className={styles.toggleBtn}
                     onClick={() => {
                        setToggleSidebar(true);
                        setBackdrop(true);
                     }}>
                    <FontAwesomeIcon icon={faList} className={styles.toggleIcon} />
                </div>
            </div>
            <div className={styles.shopContainer}>
                <div className={toggleSidebar ? `${styles.shopCategoryContainer} ${styles.show}` : styles.shopCategoryContainer}>
                    <h3 className={styles.categoryH3}>Categories</h3>
                    <ul className={styles.categoryList}>
                        {categories}
                    </ul>
                </div>
                <div className={styles.shopProductDisplay}>
                    {displayProducts}
                </div>
            </div>
        </section>
        </>
    )
}

export default Shop
