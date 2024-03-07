// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyEventCard from "./KeyEventCard";
import { dummyData } from "../../utils/Data";

const KeyEventCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {dummyData.map((item) => (
                    <KeyEventCard key={item.id} {...item} />
                ))}
            </Slider>
        </div>
    )
}

export default KeyEventCarousel