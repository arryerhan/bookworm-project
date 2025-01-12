import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="image-container d-flex align-items-center justify-content-center">
      <div className="overlay-text text-center text-white">
        <h1 className="home-title display-4 fw-bold">Welcome to BookWorm</h1>
        <h2 className="home-desc fs-5 mt-3">You can find all the newly released books on the Books page</h2>
      </div>
    </div>
  );
};

export default Home;
