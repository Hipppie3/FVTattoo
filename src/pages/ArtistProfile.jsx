import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to get route parameters
import './ArtistProfile.css'

const artistData = [
  { id: 1, name: 'Mikey Ballek', img: 'https://via.placeholder.com/150', bio: 'Bio for Mikey' },
  { id: 2, name: 'Nathan Woelke', img: 'https://via.placeholder.com/150', bio: 'Bio for Nathan' },
  { id: 3, name: 'Drake', img: 'https://via.placeholder.com/150', bio: 'Bio for Drake' },
  { id: 4, name: 'Tony Garcia', img: 'https://via.placeholder.com/150', bio: 'Bio for Tony' },
  // More artist data
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
        <h1>{artist.name}</h1>
        <img src={artist.img} alt={artist.name} />
        <p>{artist.bio}</p>
      </div>
      <div className='artist-gallery'>

      </div>
    </div>
  );
}

export default ArtistProfile;
