# Personal Bookshelf

A React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- **Book Search**: Search for books by name using the Open Library API.
- **Real-Time Results**: Display search results in real-time as the user types.
- **Add to Bookshelf**: Add books from the search results to a personal bookshelf.
- **Persistent Storage**: Store the personal bookshelf using localStorage for persistence across sessions.
- **Navigation**: Navigate between the book search page and the personal bookshelf page.

## Tech Stack

- **React**: Front-end JavaScript library.
- **Axios**: Promise-based HTTP client for the browser.
- **React Router**: Declarative routing for React applications.
- **CSS**: Styling of components.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

    
    git clone https://github.com/yourusername/personal-bookshelf.git
    cd personal-bookshelf
    ```

2. **Install dependencies**:

    ```
    npm install
    ```

3. **Start the development server**:

    ```
    npm start
    ```

4. **Open the application**:

    Open your browser and navigate to `http://localhost:3000`.

## Deployment

Deploy your project on a hosting platform like Netlify or Vercel.

### Netlify Deployment

1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and click on "New site from Git".
3. Connect your GitHub repository and follow the prompts to deploy.

### Vercel Deployment

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click on "New Project".
3. Connect your GitHub repository and follow the prompts to deploy.

## Project Structure

```plaintext
personal-bookshelf/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── Bookshelf.js
│   │   └── SearchBooks.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md



Components
BookCard: Displays individual book details and an "Add to Bookshelf" button.
SearchBooks: Provides an input field to search for books and displays search results.
Bookshelf: Displays the books added to the personal bookshelf.


API
Open Library Search API: Used to fetch book data based on user queries.
https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1
