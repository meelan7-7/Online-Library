import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>

      <button onClick={() => navigate("/books/all")}>
        Back to Browse
      </button>
    </div>
  );
}

export default BookDetails;