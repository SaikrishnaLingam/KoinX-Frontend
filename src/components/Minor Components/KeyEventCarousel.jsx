import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyEventCard from './KeyEventCard';
import { dummyData } from '../../utils/Data';

const KeyEventCarousel = () => {
    const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            if (windowWidth >= 769) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        // Initial call to handleResize
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const carouselSettings = {
        dots: false,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...carouselSettings}>
                {dummyData.map((item) => (
                    <KeyEventCard key={item.id} {...item} slidesToShow={slidesToShow} />
                ))}
            </Slider>
        </div>
    );
};

export default KeyEventCarousel;
