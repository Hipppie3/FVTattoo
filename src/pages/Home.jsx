import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import frank from '../images/frank.jpg';

// Define the images array directly in the file
function Home() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [artistData, setArtistData] = useState([]); // Store artist data

  const navigate = useNavigate();

  // Fetch artist data from the JSON file
  useEffect(() => {
    fetch('/artists.json') // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => setArtistData(data))
      .catch((error) => console.error('Error fetching artist data:', error));
  }, []);

  // Cycle through images every 3 seconds
  useEffect(() => {
    if (artistData.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artistData.length);
      }, 3000);

      return () => clearInterval(interval); // Cleanup the interval on unmount
    }
  }, [artistData]);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const teamObserver = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsTeamVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) {
      teamObserver.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        teamObserver.unobserve(teamRef.current);
      }
    };
  }, []);

  const meetArtist = () => {
    navigate('/artist');
  };

  return (
    <main>
      <div className="main-section">
        <div className="main-body">
          <h1 className="body-title">PRECISION, SAFETY, STYLE</h1>
          <div className="divider"></div> {/* Line between the titles */}
          <p className="body-title">
            Eighth Element offers expert tattoos, safe piercings, and luxury jewelry—crafted with precision in a sterile, professional environment.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" ref={aboutRef}>
        <div className="about-section-title">About</div>
        <div className={`about-info ${isAboutVisible ? 'active' : ''}`}>
          <div className="about-left">
            <p>
              Eighth Element Tattoo & Piercing is artist owned and operated by Frank Tran. We are a Professional Custom Tattoo and Body Piercing Studio, dedicated to body art. Majority of our designs are custom designed to our clients specifications in house. We are happy to accommodate any custom design or flash tattoo clients may bring in. No tattoo is too small or too big.
            </p>
          </div>
          <div className="about-right">
            <img src={frank} alt="Frank Tran" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section" ref={teamRef}>
        <div className="team-section-title">Our Team</div>
        <div className={`team-section-bottom ${isTeamVisible ? 'active' : ''}`}>
          <div className='team-left'>
            <div className='team-image'>
              {/* Display current image */}
              {artistData.length > 0 && (
                <img
                  src={artistData[currentImageIndex]?.img}
                  alt={artistData[currentImageIndex]?.name}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
          </div>

          <div className='team-right'>
            <div className='team-right-info'>
              <p>At Eighth Element Tattoo & Piercing, our talented team of artists brings passion, creativity, and years of experience to every piece of body art. Each artist specializes in their unique style, from intricate custom designs to bold traditional tattoos. Dedicated to precision, safety, and exceptional craftsmanship, our artists work closely with clients to transform ideas into stunning, personalized tattoos and piercings that tell a story.</p>
              <button onClick={meetArtist}>MEET THE ARTISTS</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
