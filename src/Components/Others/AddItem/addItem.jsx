import React from 'react';
import styles from './addItem.module.css';

function AddItem({item, increment, decrement}) {
    return (
        <div className={styles.addItemContainer}>
            <div className={styles.label}>
                Quantity
            </div>
            <div className={styles.addItemBtns}>
                <button className={styles.addItemBtn} onClick={increment}>+</button>
                <div className={styles.addItemCount}>{item}</div>
                <button disabled={item <= 0} className={styles.addItemBtn} onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default AddItem
