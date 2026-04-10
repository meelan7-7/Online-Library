import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/books/:category" element={<><Navbar /><BrowseBooks /></>} />
        <Route path="/book/:id" element={<><Navbar /><BookDetails /></>} />
        <Route path="/add-book" element={<><Navbar /><AddBook /></>} />

        {/* 404 WITHOUT Navbar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;