import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BookDetails.css';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3040/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
        setError('Failed to load book details. Please try again later.');
      });
  }, [id]);

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  if (!book) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container m-5 mt-5">
    
      <div className="d-flex justify-content-between col-md-9 row bg-black p-2 py-4 rounded-4 mt-4">
        <div className="col-md-3 text-center">
          <img
            src={book.image}
            alt={book.title}
            className="rounded shadow book-detail-image"
          />
        </div>

        <div className="col-md-8">
          <div className="card p-4 bg-black">
            <h2 className="fw-bold text-white">{book.title}</h2>
            <h5 className="text-white mb-3">by {book.author}</h5>
            <p>
              <strong className='text-white'>Category:</strong> {book.category}
            </p>
            <p className='text-white'>{book.description}</p>
            <h4 className="text-primary fw-bold">${book.price}</h4>
          </div>
        </div>
      </div>
      <Link to="/books" className="btn btn-dark my-3">
        &larr; Back to Books
      </Link>
    </div>
  );
};

export default BookDetails;
