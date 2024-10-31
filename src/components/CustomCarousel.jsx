import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css';

function CustomCarousel({ images, visibleItems = 4, onClickImage }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: visibleItems,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: visibleItems,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: Math.min(2, visibleItems),
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      containerClass="carousel-container"
      itemClass="carousel-item"
      showDots={true}
    >
      {images.map((img, idx) => (
        <div key={idx} className="carousel-image-container">
          <img src={img} alt={`Slide ${idx + 1}`} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
