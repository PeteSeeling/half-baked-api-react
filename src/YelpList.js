import React from 'react';

export default function YelpList({ businesses }) {
  return (
    <div className='yelp-column'>
      {businesses.map((business, i) => <div className='yelp-item' key={business.name + i}>
        <p>{business.name}</p>
        <img className='image' src={business.image_url} />
        <p>{business.reviews}</p>
               
      </div>)}
    </div>
  );
}