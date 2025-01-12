import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-3">
      <div className="container d-flex justify-content-center align-items-center text-white">
        <img src="./logo.png" className="footer-img me-2" alt="BookWorm Logo" />
        <span className="me-1 fw-bold">BookWorm</span>
        <span>&copy; {new Date().getFullYear()-1} All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
