import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center text-bg-dark py-3 px-4 shadow-sm">
      <div className="d-flex align-items-center">
        <img src="logo.png" alt="Logo" className="logo-png me-2" />
        <h2 className="title mb-0">
          <Link to="/" className="text-decoration-none text-white">
            BookWorm
          </Link>
        </h2>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link text-white">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category" className="nav-link text-white">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
