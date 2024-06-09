import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const SearchBooks = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const searchBooks = async (query) => {
    if (query) {
      try {
        setIsSearching(true);
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching data from API', error);
      } finally {
        setIsSearching(false);
      }
    } else {
      setBooks([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      searchBooks(value);
    }, 500); // Delay search by 500ms
    setDebounceTimeout(timeout);
  };

  const clearSearch = () => {
    setQuery('');
    setBooks([]);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
  };

  return (
    <div className="search-books">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books..."
        />
        {query && <button onClick={clearSearch}>Clear</button>}
      </div>
      {isSearching && <p>Searching...</p>}
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
