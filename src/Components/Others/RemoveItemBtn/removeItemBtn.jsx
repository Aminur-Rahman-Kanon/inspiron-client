import React, { useState } from 'react';
import styles from './removeItemBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function RemoveItemBtn({ context, product, children }) {

    const [isPending, setIsPending] = useState(false);

    const removeItemFromCart = async (e) => {
        e.preventDefault();
        setIsPending(true);
        const deviceId = context.data.deviceId;
        const cart = await fetch('https://inspiron-server-9gmf.onrender.com/fetch-cart-item', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ deviceId: deviceId })
        }).then(res => res.json()).then(data => data).catch(err => {
            if (err) {
                return new Error("Server error");
            }
        });
        //if no item in the cart then abort
        if (!Object.keys(cart.data).length) {
            setIsPending(false);
            return;
        }
        //filtering the item to remove
        const itemToDelete = Object.keys(cart.data).filter(item => item === product._id)[0];
        //if only 1 or no item exist in the array then remove the property
        if (cart.data[itemToDelete].length <= 1){
            delete cart.data[itemToDelete];
            // sessionStorage.setItem('cart', JSON.stringify(cart));
            await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ deviceId, product: cart.data })
            }).then(res => res.json()).then(data => {
                context.toggleProductCount(context.productCount -1);
                setIsPending(false);
            })
        }
        //if more than one item left in the cart
        else {
            cart.data[itemToDelete].pop();
            // sessionStorage.setItem('cart', JSON.stringify(cart));
            await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ deviceId, product: cart.data })
            }).then(res => res.json()).then(data => {
                context.toggleProductCount(context.productCount -1);
                setIsPending(false);
            })
        }
    }

    return (
        <button disabled={isPending} className={styles.removeItemBtn} onClick={removeItemFromCart}>
            {
            isPending ? 
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.RemoveItemIcon}/>
            :
            children
            }
        </button>
    )
}

export default RemoveItemBtn
