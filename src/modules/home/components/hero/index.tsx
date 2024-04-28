"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://d2d3ehxuorb8xr.cloudfront.net/2296x650_DESKTOP_TOYS_EN_1_b297cde9b8.jpg',
  'https://d2d3ehxuorb8xr.cloudfront.net/2296x650_DESKTOP_BANNER_EN_16_257d062967.jpg',
  'https://d2d3ehxuorb8xr.cloudfront.net/2296x650_DESKTOP_BANNER_EN_18_071a9a9a49.jpg'
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
  };

  const SliderComponent = Slider as any as React.ComponentType<any>;


  return (
    <>

      <div className="m-2 ml-3 mr-3">
      <SliderComponent {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full border-b border-ui-border-base bg-ui-bg-subtle"
            style={{ backgroundImage: `url(${image})`, backgroundSize: '100% 100%', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
          </div>
        </div>
      ))}
    </SliderComponent>
          </div>
    </>

  );
};

export default Hero;
