import React from 'react';
import './banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import laptop from '../../../../Assets/images/laptop.png';
import tablet from '../../../../Assets/images/tablet.png';
import watch from '../../../../Assets/images/watch.png';
import phone from '../../../../Assets/images/phone.png';
import game from '../../../../Assets/images/game.png';

function Banner () {
    return (
        <Carousel autoPlay={true} 
                  infiniteLoop={true} 
                  interval={5000} 
                  transitionTime={1500} 
                  showStatus={false} 
                  showThumbs={false}
                  className="banner-silder-container"
                  >
            <section className='banner-items' style={{flexFlow: 'row-reverse'}}>
                <div className='banner-header-container'>
                    <h3 className='banner-h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h3>
                    <p className='banner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non officiis corrupti. Vel error cumque dignissimos, dolorum laudantium et accusamus ad perferendis blanditiis aspernatur animi sed asperiores voluptate voluptatum quod!</p>
                    <Link to='#' className='banner-link'>See More</Link>
                </div>
                <div className='banner-img-container'>
                    <img src={watch} alt="smart watch" className='banner-img'/>
                </div>
            </section>
            <section className='banner-items'>
                <div className='banner-header-container'>
                    <h3 className='banner-h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h3>
                    <p className='banner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non officiis corrupti. Vel error cumque dignissimos, dolorum laudantium et accusamus ad perferendis blanditiis aspernatur animi sed asperiores voluptate voluptatum quod!</p>
                    <Link to='#' className='banner-link'>See More</Link>
                </div>
                <div className='banner-img-container'>
                    <img src={laptop} alt="laptop" className='banner-img'/>
                </div>
            </section>
            <section className='banner-items' style={{flexFlow: 'row-reverse'}}>
                <div className='banner-header-container'>
                    <h3 className='banner-h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h3>
                    <p className='banner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non officiis corrupti. Vel error cumque dignissimos, dolorum laudantium et accusamus ad perferendis blanditiis aspernatur animi sed asperiores voluptate voluptatum quod!</p>
                    <Link to='#' className='banner-link'>See More</Link>
                </div>
                <div className='banner-img-container'>
                    <img src={tablet} alt="tablet" className='banner-img'/>
                </div>
            </section>
            <section className='banner-items'>
                <div className='banner-header-container'>
                    <h3 className='banner-h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h3>
                    <p className='banner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non officiis corrupti. Vel error cumque dignissimos, dolorum laudantium et accusamus ad perferendis blanditiis aspernatur animi sed asperiores voluptate voluptatum quod!</p>
                    <Link to='#' className='banner-link'>See More</Link>
                </div>
                <div className='banner-img-container'>
                    <img src={phone} alt="smart phone" className='banner-img'/>
                </div>
            </section>
            <section className='banner-items' style={{flexFlow: 'row-reverse'}}>
                <div className='banner-header-container'>
                    <h3 className='banner-h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h3>
                    <p className='banner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non officiis corrupti. Vel error cumque dignissimos, dolorum laudantium et accusamus ad perferendis blanditiis aspernatur animi sed asperiores voluptate voluptatum quod!</p>
                    <Link to='#' className='banner-link'>See More</Link>
                </div>
                <div className='banner-img-container'>
                    <img src={game} alt="gaming console" className='banner-img'/>
                </div>
            </section>
        </Carousel>
    )
}

export default Banner;
