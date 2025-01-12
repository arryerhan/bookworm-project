import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Category.css'; 

const Category = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="category-container mx-auto">
        <Link
          to="/category/Novel"
          className="list-group-item list-group-item-action mb-3"
        >
          Novel
        </Link>
        <Link
          to="/category/Classic"
          className="list-group-item list-group-item-action mb-3"
        >
          Classic
        </Link>
        <Link
          to="/category/Fiction"
          className="list-group-item list-group-item-action mb-3"
        >
          Fiction
        </Link>
        <Link
          to="/category/Non-fiction"
          className="list-group-item list-group-item-action mb-3"
        >
          Non-fiction
        </Link>
        <Link
          to="/category/Science"
          className="list-group-item list-group-item-action mb-3"
        >
          Science
        </Link>
      </div>
    </div>
  );
};

export default Category;
