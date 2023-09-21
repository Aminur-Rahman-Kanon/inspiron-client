import React, { useEffect, useState } from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import comma from '../../../../Assets/images/comma.png';

function Testimonial() {

    const [testimonial, setTestimonial] = useState([]);

    // useEffect(() => {
    //     fetch('https://inspiron-server-9gmf.onrender.com/get-testimonial')
    //     .then(res => res.json())
    //     .then(result => {
    //         if (result.status === 'success'){
    //             setTestimonial(result.data)
    //         }
    //     }).catch(err => console.log(err));
    // }, []);

    const testimonialDisplay = testimonial.length ? <Swiper className="testimonial-silder-container">
        {
            testimonial.map(item => 
                <SwiperSlide>
                    <div key={item.name} className='testimonial-item'>
                        <div className='quote-container'>
                            <img src={comma} alt="inverted comma" className='testimonial-icon' />
                        </div>
                        <div className='user-container'>
                            <div className='user-img-container'>
                                <img src={item.img} alt={item.title} className='user-img' />
                            </div>
                            <div className='user-details-container'>
                                <h5 className='user-name'>{item.name}</h5>
                                <p className='user-title'>{item.title}</p>
                            </div>
                        </div>
                        <div className='comment-container'>
                            <p className='comment'>{item.comment}</p>
                        </div>
                    </div>
                </SwiperSlide>)
        }   
    </Swiper>
    :
    <div>
        <h4>No Comment yet</h4>
    </div>

    return testimonialDisplay;
}

export default Testimonial;
