import React from 'react';
import './Artist.css';

// Create an array of artist data
const artistData = [
  { id: 1, name: 'Mikey Ballek', img: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Nathan Woelke', img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Drake', img: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Tony Garcia', img: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Mikey Ballek', img: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Nathan Woelke', img: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Drake', img: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Tony Garcia', img: 'https://via.placeholder.com/150' }
];

function Artist() {
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
          <div className='artist' key={artist.id}>
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
