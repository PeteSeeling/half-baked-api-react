import React from 'react';

export default function YelpList({ businesses }) {
  return (
    <div>
      {businesses.map((business, i) => <div className='yelp-item' key={business.name + i}>
        <p>{business.name}</p>
        <img src={business.image_url} />
        <p>{business.reviews}</p>
               
      </div>)}
    </div>
  );
}