import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("title-asc");
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3040/books")
      .then((response) => {
        setBooks(response.data);
        filterBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again later.");
      });
  }, []);

  useEffect(() => {
    filterBooks(books);
  }, [category, searchQuery, sortOption, books]);

  const filterBooks = (books) => {
    let filtered = category
      ? books.filter((book) => book.category === category)
      : books;

    if (searchQuery) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "title-asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title-desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "author-asc") {
      filtered.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortOption === "author-desc") {
      filtered.sort((a, b) => b.author.localeCompare(a.author));
    }

    setFilteredBooks(filtered);
  };

  const handleSearchChange = (event) => setSearchQuery(event.target.value);
  const handleSortChange = (event) => setSortOption(event.target.value);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="books-container">
     <div className="d-flex justify-content-between col-md-12">
     <h2>
        Explore Our Library {category ? `- ${category} Category` : ""}
      </h2>
      <div className="d-flex justify-content-end row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search books"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="title-asc">Sort by Title (A-Z)</option>
            <option value="title-desc">Sort by Title (Z-A)</option>
            <option value="author-asc">Sort by Author (A-Z)</option>
            <option value="author-desc">Sort by Author (Z-A)</option>
          </select>
        </div>
      </div>
     </div>

      <div className="row g-4">
        {filteredBooks.length === 0 ? (
          <div className="col-12 text-center">
            <div className="alert alert-warning">No Books Found</div>
          </div>
        ) : (
          filteredBooks.map((book) => (
            <div className="col-md-4 col-lg-3" key={book.id}>
              <div
                className="card cardo h-100 shadow-sm"
                style={{
                  backgroundColor: "#21252A" ,
                  border: "none" ,
                  borderRadius: "8px"
        
                }}
              >
                <Link to={`/book/${book.id}`}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="card-img-top book-image "
                    style={{
                      height: "230px",
                      margin:"20px 0",
                      objectFit: "contain"
                    }}
                  />
                  <div className="card-body">
                    <h6 className="text-white card-title text-truncate fw-bold">
                      {book.title}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-white">{book.author}</span>
                      <span className="fw-bold text-primary">
                        ${book.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Books;
