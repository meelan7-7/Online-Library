import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {        // Handle input changes dynamically for all form fields
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.rating
    ) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Add book to Redux
    dispatch(
      addBook({
        ...form,
        id: Date.now()
      })
    );

    // ✅ Redirect to browse page
    navigate("/books/all");
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
        /><br /><br />

        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
        /><br /><br />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        /><br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        /><br /><br />

        <input
          name="rating"
          placeholder="Rating"
          type="number"
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;