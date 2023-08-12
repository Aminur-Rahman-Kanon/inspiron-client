import React from 'react';
import styles from './shopBanner.module.css';
import game from '../../../../Assets/images/banner/game.png';
import headphone from '../../../../Assets/images/banner/headphone.png';
import laptop from '../../../../Assets/images/banner/laptop.png';
import phone from '../../../../Assets/images/banner/phone.png';
import tablet from '../../../../Assets/images/banner/tablet.png';
import tv from '../../../../Assets/images/banner/tv.png';
import watch from '../../../../Assets/images/banner/watch.png';

const bannerImg = {
    game: game,
    headphone: headphone,
    laptop: laptop,
    smartphone: phone,
    tablet: tablet,
    tv: tv,
    watches: watch
}

function ShopBanner({ item }) {

    return (
        <div className={styles.ShopBannerContainer}>
            <div className={styles.bannerDetailsContainer}>
                <h4 className={styles.bannerH4}>{item}</h4>
            </div>
            <div className={styles.bannerImgContainer}>
                <img src={bannerImg[item]} alt={item} className={styles.bannerImg} />
            </div>
        </div>
    )
}

export default ShopBanner
