import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const images = [
    '/src/images/inside.jpg',
    '/src/images/inside2.jpg',
    '/src/images/outside.jpg',
    // Add as many images as you like
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="about-content">
      <div className="about-left">
        <div className="image-container">
          <img src={images[currentImageIndex]} alt="Tattoo Art" />
        </div>
      </div>
      <div className="about-right">
        <h1>About Us</h1>
        <p>Welcome to our tattoo shop. We offer professional tattoos, safe piercings, and high-end jewelry.</p>
      </div>
    </div>
  );
}

export default About;
