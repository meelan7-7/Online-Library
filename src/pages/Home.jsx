import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector(state => state.books.books);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div>
      <h1>Welcome to Online Library</h1>

      {/* Categories */}
      <h2>Categories</h2>
      <div>
        {categories.map(cat => (
          <Link key={cat} to={`/books/${cat}`} style={{ marginRight: "10px" }}>
            {cat}
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h2>Popular Books</h2>
      <div>
        {books.slice(0, 3).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;