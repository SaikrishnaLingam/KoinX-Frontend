// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyEventCard from "./KeyEventCard";

const KeyEventCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    const dummyData = [
        {
            'id': '1',
            'bgColor': 'rgb(219 234 254 / var(--tw-bg-opacity)',
            'logo': 'src/assets/newspaper.svg',
            'heading': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem illum ex obcaecati.",
            'text': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus hic vitae fugiat cum! Perferendis cupiditate maxime et, aliquam debitis quibusdam corporis esse ducimus placeat, officiis illo.Qui praesentium deserunt in quae molestias minima cumque laboriosam."
        },
        {
            'id': '2',
            'bgColor': 'rgb(220 252 231 / var(--tw-bg-opacity)',
            'logo': "src/assets/trend-up.svg",
            'heading': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem illum ex obcaecati.",
            'text': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus hic vitae fugiat cum! Perferendis cupiditate maxime et, aliquam debitis quibusdam corporis esse ducimus placeat, officiis illo.Qui praesentium deserunt in quae molestias minima cumque laboriosam."
        },
        {
            'id': '3',
            'bgColor': 'rgb(254 226 226 / var(--tw-bg-opacity)',
            'logo': "src/assets/market-research.svg",
            'heading': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem illum ex obcaecati.",
            'text': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus hic vitae fugiat cum! Perferendis cupiditate maxime et, aliquam debitis quibusdam corporis esse ducimus placeat, officiis illo.Qui praesentium deserunt in quae molestias minima cumque laboriosam."
        }
    ]
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