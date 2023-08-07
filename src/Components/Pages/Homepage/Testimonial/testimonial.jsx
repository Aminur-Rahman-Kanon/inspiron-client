import React, { useEffect, useState } from 'react';
import './testimonial.css';
import { Carousel } from 'react-responsive-carousel';
import comma from '../../../../Assets/images/comma.png';

function Testimonial() {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('https://inspiron-server-9gmf.onrender.com/get-testimonial')
        .then(res => res.json())
        .then(result => {
            if (result.status === 'success'){
                setTestimonial(result.data)
            }
        }).catch(err => console.log(err));
    }, []);

    const testimonialDisplay = testimonial.length ? <Carousel autoPlay={true} 
        infiniteLoop={true} 
        interval={5000} 
        transitionTime={1500} 
        showStatus={false} 
        showThumbs={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="testimonial-silder-container">
        {
            testimonial.map(item => 
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
            </div>)
        }   
    </Carousel>
    :
    <div>
        <h4>No Comment yet</h4>
    </div>

    return testimonialDisplay;
}

export default Testimonial;
