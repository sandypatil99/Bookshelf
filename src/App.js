import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import Bookshelf from './components/Bookshelf.js';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBooks);
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Best Bookshelf</h1>
          <nav>
            <Link to="/">Search Books</Link>
            <Link to="/bookshelf">My Bookshelf</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchBooks addToBookshelf={addToBookshelf} />} />
            <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
