import React from 'react';

export default function YelpList({ businesses }) {
  return (
    <div className='yelp-column'>
      {businesses.map((business, i) => <div className='yelp-item' key={business.name + i}>
        <div>{business.name}</div>
        <img className='image' src={business.image_url} />
        <div>{business.location.display_address}</div>
               
      </div>)}
    </div>
  );
}