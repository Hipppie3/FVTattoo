import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomCarousel from '../components/CustomCarousel'; // Updated to CustomCarousel
import './ArtistProfile.css';

function ArtistProfile() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetch('/artists.json')
      .then((response) => response.json())
      .then((data) => {
        const foundArtist = data.find((artist) => artist.id === parseInt(id));
        setArtist(foundArtist);
      });
  }, [id]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artist-profile-container">
      <div className="artist-profile">
        <div className="artist-profile-image">
          <img src={artist.img} alt={artist.name} />
        </div>
        <div className="artist-profile-description">
          <h1>{artist.name.toUpperCase()}</h1>
          <p>{artist.bio}</p>
        </div>
      </div>
      <div className="artist-gallery">
        <h2>{artist.name.toUpperCase()}'S WORK</h2>
        <div className="artist-gallery-divider"></div>
        
        {/* Conditional rendering for carousel or message */}
        {artist.work && artist.work.length > 0 ? (
          <CustomCarousel images={artist.work} visibleItems={4} />
        ) : (
          <p className="no-work-message">
            This artist currently has no work to display.
          </p>
        )}
      </div>
    </div>
  );
}

export default ArtistProfile;
