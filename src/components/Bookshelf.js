import React from 'react';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      <div className="book-list">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
