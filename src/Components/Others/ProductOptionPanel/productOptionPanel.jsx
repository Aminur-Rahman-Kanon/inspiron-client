import React from 'react';
import styles from './productOptionPanel.module.css';
import { optionContainerData } from '../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductOptionPanel() {
    return (
        <div className={styles.optionPanelContainer}>
            {
                optionContainerData.map((option, idx) => <div key={idx} className={styles.optionPanelItem}>
                    <div className={styles.alertBoxContainer}>
                        <div className={styles.alertBox}>
                            <p className={styles.alert}>{option.name}</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={option.icon} className={styles.optionPanelIcon} />
                </div>)
            }
        </div>
    )
}

export default ProductOptionPanel
