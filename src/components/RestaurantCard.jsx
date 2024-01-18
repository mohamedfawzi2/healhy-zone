// components/RestaurantCard.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cardImage from '../assests/1 (1).jpg'

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src={cardImage}
        alt="Food"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title ">Special Dish</h5>
        <br />
        <p className="card-text">Description of the dish goes here.</p>
        <p className="card-text">
          <strong className='m-3'>Price: 8.9$</strong>
          <button type="button" className="btn btn-outline-primary ">Description </button>

        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
