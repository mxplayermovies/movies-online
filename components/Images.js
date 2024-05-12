import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imagesData from '../public/movies.json';

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (imagesData && imagesData.images) {
      setImages(imagesData.images);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const handleImageClick = link => {
    window.location.href = link;
  };

  return (
    <div className='carousel-inner relative w-full cursor-pointer m-10 overflow-hidden'>
      <h2 className='mb-4 py-5 font-bold leading-none tracking-tight text-white text-center text-3xl dark:text-white' style={{ color: '#40D7BC', textShadow: '2px 5px 5px #000000' }}>Latest Imgeas Updated</h2>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <div onClick={() => handleImageClick(imageUrl)} style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer', textShadow: '2px 5px 5px #000000', filter: 'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)' }}>
              <img className='scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl' src={imageUrl} alt={`Image ${index}`} width={400} height={400} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Images;
