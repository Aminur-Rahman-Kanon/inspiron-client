import React from 'react';
import styles from './homepageMain.module.css';
import Banner from '../Banner/banner';
import AdditionalBanner from '../AdditionalBanner/additionalBanner';
import ProductsType from '../../Products/ProductsType/productsType';
import FeaturedProduct from '../FeaturedProduct/featuredProduct';
import TopSellingProduct from '../TopSellingProduct/topSellingProduct';
import ProductsCategory from '../ProductsCategory/productsCategory';
import AdditionalBanner2 from '../AdditionalBanner2/additionalBanner2';
import SponsorShip from '../SponsorShip/sponsorShip';
import Testimonial from '../Testimonial/testimonial';

function HomepageMain () {
    return (
        <div className={styles.homepageMainContainer}>
            <Banner />
            <AdditionalBanner />
            <ProductsType />
            <FeaturedProduct />
            <TopSellingProduct />
            <ProductsCategory />
            <AdditionalBanner2 />
            <SponsorShip />
            <Testimonial />
        </div>
    )
}

export default HomepageMain;
