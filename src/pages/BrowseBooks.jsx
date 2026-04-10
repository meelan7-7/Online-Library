import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();   // Get category from URL parameters
  const books = useSelector(state => state.books.books);

  const [search, setSearch] = useState(""); // Local state to store search input
  const filteredBooks = books.filter(book =>
    (category === "all" || book.category === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2>Browse Books</h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBooks.map(book => (           // Filter books based on category and search input
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BrowseBooks;
