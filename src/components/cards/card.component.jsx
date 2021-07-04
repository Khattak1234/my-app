import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
      <img
       alt='devil'
       src={`https://robohash.org/${props.devil.id}?set=set2&size=180*180`} 
       />
      <h2>{props.devil.name}</h2>
      <p>{props.devil.email}</p>
    </div>
);