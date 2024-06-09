// src/components/SearchBooks.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const SearchBooks = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setBooks(response.data.docs);
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="search-books">
      <input
        type="text"
        value={query}
        onChange={searchBooks}
        placeholder="Search for books..."
      />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
