import React, { useContext } from 'react';
import styles from './displayCartItem.module.css';
import { Link } from 'react-router-dom';
import { removeItemFromCart } from '../../../Others/UtilityFunction/utilityFunction';
import AuthContext from '../../../Others/AuthContext/authContext';

function DisplayCartItem({ cart }) {

    const context = useContext(AuthContext);
    let displayCart;
    
    if (Object.keys(cart).length){
        displayCart = Object.values(cart).map(item => <div key={item[0]._id} className={styles.displayCartItem}>
            <div className={styles.displayCartImgContainer}>
                <img src={item[0]['img'][0]} alt={item[0].title} className={styles.displayCartImg} />
            </div>
            <div className={styles.displayCartDetailsContainer}>
                <h4 className={styles.heading}>{item[0].title}</h4>
                <span className={styles.subHeading}>{`${item.length} x ${item[0].price}`}</span>
                <span className={styles.subHeading}>Total: &pound;{Number(item[0].price)*Number(item.length)}</span>
                <button className={styles.removebtn} onClick={() => removeItemFromCart(context, item[0])}>Remove</button>
            </div>
        </div>)
    }
    else {
        displayCart = <div className={styles.defaultItem}>
            <h4 className={styles.heading}>No Item</h4>
        </div>
    }

    return (
        <div className={styles.displayCartItemContainer}>
            <div className={styles.cartViewContainer}>
                {displayCart}
            </div>
            <div className={styles.actionContainer}>
                <button disabled={!Object.keys(cart).length}
                        className={styles.actionBtn}
                        onClick={() => window.location.assign('/checkout')}>
                        Checkout Now
                </button>
                <button disabled={!Object.keys(cart).length}
                        className={styles.actionBtn}
                        onClick={() => window.location.assign('/cart')}>
                        View Cart
                </button>
            </div>
        </div>
    )
}

export default DisplayCartItem;
