import React, { useState, useEffect } from 'react';
import './Artist.css';
import { useNavigate } from 'react-router-dom';

function Artist() {
  const [artistData, setArtistData] = useState([]); // State to store fetched artist data
  const navigate = useNavigate();

  // Fetch artist data from the JSON file
  useEffect(() => {
    fetch('/artists.json') // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => setArtistData(data))
      .catch((error) => console.error('Error fetching artist data:', error));
  }, []);

  const handleArtistClick = (id) => {
    navigate(`/artist/${id}`);
  };

  return (
    <div className='artist-container'>
      <div className='artist-description'>
        <h2>Meet Our Team</h2>
        <div className='artist-divider'></div>
        <p>
          At Eighth Element Tattoo & Piercing, our talented team of artists
          brings passion, creativity, and years of experience to every piece of
          body art. Each artist specializes in their unique style, from intricate
          custom designs to bold traditional tattoos. Dedicated to precision,
          safety, and exceptional craftsmanship, our artists work closely with
          clients to transform ideas into stunning, personalized tattoos and
          piercings that tell a story.
        </p>
      </div>
      <div className='artist-list'>
        {artistData.map((artist) => (
          <div
            className='artist'
            key={artist.id}
            onClick={() => handleArtistClick(artist.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={artist.img} alt={artist.name} />
            <h3>{artist.name}</h3>
            <div className='artist-name-divider'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artist;
