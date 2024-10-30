import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to get route parameters
import './ArtistProfile.css'

const artistData = [
  { id: 1, name: 'Mikey Ballek', img: 'https://via.placeholder.com/150', bio: 'Bio for Mikey' },
  { id: 2, name: 'Nathan Woelke', img: 'https://via.placeholder.com/150', bio: 'Bio for Nathan' },
  { id: 3, name: 'Drake', img: 'https://via.placeholder.com/150', bio: 'Bio for Drake' },
  { id: 4, name: 'Tony Garcia', img: 'https://via.placeholder.com/150', bio: 'Bio for Tony' },
  // More artist data
    { id: 5, name: 'Mikey Ballek', img: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Nathan Woelke', img: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Drake', img: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Tony Garcia', img: 'https://via.placeholder.com/150', bio: `Tony is one of our leading Artist. He's been here for 10 years and has a dedicated follwering` } 
];

function ArtistProfile() {
  const { id } = useParams(); // Get the artist ID from the route parameters
  const artist = artistData.find((artist) => artist.id === parseInt(id)); // Find the artist by ID

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className='artist-profile-container'>

      <div className='artist-profile'>
        <div className='artist-profile-image' >
          <img src={artist.img} alt={artist.name} />
        </div>
        <div className='artist-profile-description'>
          <h1>{artist.name}</h1>
          <p>{artist.bio}</p>
        </div>
      </div>

      <div className='artist-gallery'>
        <h2 className='artist-gallery-title'>
          {artist.name.toUpperCase()} WORK
        </h2>
      </div>
    </div>
  );
}

export default ArtistProfile;
