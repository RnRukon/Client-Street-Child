import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from "./Image/Eid-for-Street-Children_2021-Barishal_04-1-scaled.jpg"
import Image2 from "./Image/Street-Children.jpg"
import Image3 from "./Image/Street_children_are_in_smart_look_after_waring_their_winter_outfit_800x.jpg"

const Banner = () => {
    return (
        <>
            <Carousel autoPlay  showThumbs={false}  className=' text-center thumbs-wrapper' >
                <div className="">
                    <img className=' h-96 object-cover'  src={Image1} alt='' />
                    <p className=' legend'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, saepe!</p>

                </div>
                <div className="">
                    <img className=' h-96 object-cover' src={Image2} alt='' />
                    <p className=' legend'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, saepe!</p>
                </div>
                <div className="">
                    <img className=' h-96 object-cover'  src={Image3} alt='' />
                    <p className=' legend'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, saepe!</p>
                </div>
            </Carousel>
        </>
    );
};

export default Banner;