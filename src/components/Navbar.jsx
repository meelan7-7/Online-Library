import { Link } from "react-router-dom";

function Navbar() {         // Navbar component for navigating between pages
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/books/all">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}

export default Navbar;