import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Category from './components/Category'
import BookDetails from './components/BookDetails'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/category/:category" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
