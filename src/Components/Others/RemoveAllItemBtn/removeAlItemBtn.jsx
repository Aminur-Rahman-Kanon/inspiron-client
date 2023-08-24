import React, { useState, useEffect } from 'react';
import styles from './removeAllItemBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function RemoveAlItemBtn({ context, product, children }) {

    const [isPending, setIsPending] = useState(false);

    const removeItems = async (e) => {
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
        if (!Object.keys(cart.data)) {
            setIsPending(false);
            return;
        }

        const itemToDelete = Object.keys(cart.data).filter(item => item === product._id)[0];
        if (itemToDelete){
            delete cart.data[itemToDelete];
            await fetch('https://inspiron-server-9gmf.onrender.com/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ deviceId, product: cart.data })
            }).then(res => res.json()).then(data => {
                setIsPending(false);
                context.toggleProductCount(context.productCount -1);
            })
        }
    }

    return (
        <button className={styles.removeAllItemBtn} onClick={removeItems}>
            {
                isPending ?
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.removeAllItemIcon} />
                :
                children
            }
        </button>
    )
}

export default RemoveAlItemBtn;
