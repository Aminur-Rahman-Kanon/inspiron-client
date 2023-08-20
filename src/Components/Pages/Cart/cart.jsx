import React, { useState, useContext } from 'react';
import styles from './cart.module.css';
import { useNavigate } from 'react-router-dom';
import payment from '../../../Assets/payment-method.png';
import AuthContext from '../../Others/AuthContext/authContext';
import { addItemToCart, removeItemFromCart, removeItems } from '../../Others/UtilityFunction/utilityFunction';

function Cart() {
    const context = useContext(AuthContext);

    const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : {};

    const navigate = useNavigate();

    const [coupon, setCoupon] = useState('');

    const discount = 10;

    let subtotal = 0;

    
    const cartDisplay = Object.keys(cart).length ? Object.values(cart).map(item => {
        subtotal += item[0].price * item.length;
        return <div key={item[0]._id} className={styles.cartItem}>
            <div className={styles.cartItemImgContainerMain}>
                <div className={styles.cartImgContainer}>
                    <img src={item[0].img[0]} alt={item[0].title} className={styles.cartImg} />
                </div>
                <div className={styles.cartInfoContainer}>
                    <p className={styles.cartTitle}>{item[0].title}</p>
                    <p className={styles.cartTitle}>Item id: fghy22kl2</p>
                    <p className={styles.cartTitle}>price: &pound;{item[0].price}</p>
                </div>
            </div>
            <div className={styles.cartItemElements}>
                <div className={styles.cartItemElement}>
                    <button className={styles.quantityBtn} onClick={() => addItemToCart(context, item[0], item.length + 1)}>+</button>
                    <div className={styles.quantityCount}>{item.length}</div>
                    <button className={styles.quantityBtn} onClick={() => removeItemFromCart(context, item[0])}>-</button>
                </div>
                <div className={styles.cartItemElement}>
                    <span className={styles.subtotal}>&pound;{Number(item.length)* Number(item[0].price)}</span>
                </div>
                <div className={styles.cartItemElement}>
                    <button className={styles.removeBtn} onClick={() => removeItems(context, item[0])}>Remove</button>
                </div>
            </div>
        </div>
    })
    :
    <div>
        <h4 className={styles.cartH4}>No item in the cart</h4>
    </div>

    return (
        <section className={styles.cartContainerMain}>
            <div className={styles.cartContainer}>
                <div className={styles.cartItemContainer}>
                    <div className={styles.cartLabels}>
                        <div className={styles.cartLabel}>Product</div>
                        <div className={styles.cartLabel}>Quantity</div>
                        <div className={styles.cartLabel}>Subtotal</div>
                        <div className={styles.cartLabel}>Action</div>
                    </div>
                    <div className={styles.cartItems}>
                        {cartDisplay}
                    </div>
                </div>
                <div className={styles.cartDetailsContainer}>
                    <div className={styles.couponContainer}>
                        <div className={styles.couponInputContainer}>
                            <input type='text'
                                   placeholder="Enter coupon code"
                                   className={styles.couponInput}
                                   onChange={(e) => setCoupon(e.target.value)} />
                            <button disabled={!coupon} className={styles.couponBtn}>Apply coupon</button>
                        </div>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalItems}>
                            <div className={styles.totalItem}>
                                <span className={styles.totalLabel}>Subtotal: &pound;{subtotal}</span>
                            </div>
                            <div className={styles.totalItem}>
                                <span className={styles.totalLabel}>Discount: &pound;{discount}</span>
                            </div>
                            <div className={styles.totalItem}>
                                <span className={styles.totalLabel} style={{fontWeight: '700', fontSize: '13px'}}>Total Price: &pound;{subtotal - discount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cartFooterContainer}>
                    <div className={styles.cartFooterItem}>
                        <img src={payment} alt="how to pay online" className={styles.cartFooterImg}/>
                    </div>
                    <div className={styles.cartFooterItem}>
                        <button onClick={() => navigate(-1)} className={styles.cartFooterBtn} >Continue Shopping</button>
                        <button onClick={() => navigate('/checkout')} className={styles.cartFooterBtn} >Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
