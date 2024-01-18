import React from "react";
import RestaurantCard from "./RestaurantCard";

const Home = ( ) =>
{
  return (
    <div className=" container mt-5 ">
    <div className="row">
      <div className="col-md-6  ">
        <h2>Welcome to Our Restaurant</h2>
        <p>Experience the best culinary delights...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          laboriosam dolore impedit quae autem pariatur, ipsam porro, atque
          labore possimus itaque ad quaerat natus. Commodi aut blanditiis
          laborum nulla odio.
        </p>
        <br></br>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          placeat minus? Eveniet ducimus labore voluptas eos iure quibusdam
          natus similique fugiat non magnam libero vero rem, perferendis
          adipisci molestias numquam?
        </p>
        <button type="button"  className="btn btn-outline-primary ">Book Now </button>

      </div>
      <div className="col-md-6">
        <RestaurantCard />
        
        
      </div>
    </div>
  </div>



  )
}
 export default Home;