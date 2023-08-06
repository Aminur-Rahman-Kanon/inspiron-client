import React from 'react';
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Drawtoggle ({toggleSidedrawer}) {
  return <FontAwesomeIcon icon={faBars} className={styles.bars} onClick={toggleSidedrawer}/>
}

export default Drawtoggle;
