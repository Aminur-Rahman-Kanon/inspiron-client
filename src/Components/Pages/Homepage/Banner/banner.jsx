import React, { useEffect, useState } from 'react';
import './banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import macbook from '../../../../Assets/images/products/macbook.jpg';
import { bannerEffect } from '../../../Others/UtilityFunction/utilityFunction';

function Banner () {

    const [carouselItem, setCarouselItem] = useState('carousel-item-container');

    useEffect(() => {
        bannerEffect(carouselItem);
    }, []);

    return (
        <div className='banner-container'>
            <Swiper>
                <SwiperSlide>
                    <div className='carousel-item-container'>
                        <div className='item-img-container'>
                            <img src={macbook} alt="macbook" className='product-img'/>
                            <div className='img-details-container'>
                                <button className='item-btn'>ORDER NOW</button>
                                <div className='price-container'>
                                    <span className='price'>PRICE ONLY</span>
                                    <span className='price'>&pound;1900</span>
                                </div>
                            </div>
                        </div>
                        <div className='item-details-container'>
                            <div className='item-header-container'>
                                <span className='item-header'>M</span>
                                <span className='item-header'>a</span>
                                <span className='item-header'>c</span>
                                <span className='item-header'>b</span>
                                <span className='item-header'>o</span>
                                <span className='item-header'>o</span>
                                <span className='item-header'>k</span>
                                <span className='item-header' style={{margin: '0 5px'}}></span>
                                <span className='item-header'>P</span>
                                <span className='item-header'>r</span>
                                <span className='item-header'>o</span>
                                <span className='item-header' style={{margin: '0 5px'}}></span>
                                <span className='item-header'>2</span>
                                <span className='item-header'>0</span>
                                <span className='item-header'>2</span>
                                <span className='item-header'>3</span>
                            </div>
                            <ul className='item-lists'>
                                <li className='item-list'>Apple M2 Pro chip</li>
                                <li className='item-list'>19-core GPU</li>
                                <li className='item-list'>16-core Neural Engine</li>
                                <li className='item-list'>200GB/s memory bandwidth</li>
                                <li className='item-list'>Liquid Retina XDR display</li>
                                <li className='item-list'>16GB unified memory</li>
                                <li className='item-list'>1TB SSD</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;
