import React from 'react';
import styles from './checkoutItems.module.css';

function CheckoutItems({ items }) {

    console.log(items);

    let displayCheckoutItems;
    let totalPrice = 0;
    if (Object.keys(items).length) {
        displayCheckoutItems = Object.values(items).map(item => {
            totalPrice += item.length * item[0].price;
            return <div key={item[0]._id} className={styles.checkoutItem}>
                <div className={styles.checkoutImgContainer}>
                    <img src={item[0].img[0]} alt={item[0].title} className={styles.checkoutImg} />
                </div>
                <div className={styles.checkoutDetailsContainer}>
                    <p className={styles.checkoutP}>{item[0].title}</p>
                    <p className={styles.checkoutP}>{item.length} x {item[0].price}</p>
                    <p className={styles.checkoutP}>&pound;{item.length* Number(item[0].price)}</p>
                </div>
            </div>
        })
    }
    else {
        displayCheckoutItems = <h4>No items</h4>
    }

    return (
        <div className={styles.checkoutItemsContainer}>
            <div className={styles.checkoutItemHeader}>
                <h3 className={styles.checkoutItemsH3}>Order Summary</h3>
                <span className={styles.editOrders} onClick={() => window.location.assign('/cart')}>(Edit)</span>
            </div>
            <div className={styles.outerBox}>
                <div className={styles.checkoutItems}>
                    {displayCheckoutItems}
                </div>
            </div>
            <div className={styles.outerBox}>
                <div className={styles.totalContainer}>
                    <div className={styles.totalItems}>
                        <span className={styles.totalItem}>Subtotal</span>
                        <span className={styles.totalItem}>&pound;{totalPrice}</span>
                    </div>
                    <div className={styles.totalItems}>
                        <span className={styles.totalItem}>Shipping</span>
                        <span className={styles.totalItem}>&pound;{Object.keys(items).length ? 10 : 0}</span>
                    </div>
                    <div className={styles.totalItems}>
                        <span className={styles.totalItem}>Subtotal</span>
                        <span className={styles.totalItem}>&pound;{Object.keys(items).length ? totalPrice + 10 : 0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItems
