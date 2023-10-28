import React from "react";
import banner from "./banner.jpg";
import Products from './Products'
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={banner} className="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div classNameName="container">

          <h5 className="card-title display-3 fw-border mb-0">NEW SEASON ARRIVALS </h5>
          <p className="card-text lead fs-2 ">
           CHECK OUT ALL TRENDS
          </p>
         
        </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
