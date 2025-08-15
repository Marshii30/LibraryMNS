import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles.css';
import { getBooks } from '../Api'; // Adjusted path

const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]); // Declare state

  useEffect(() => {
    getBooks()
      .then((response) => {
        setBooks(response.data); // Assuming response.data is an array
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        // fallback if backend fails
        setBooks([
          { name: "Book A", price: "₹100", image: "/images/bookA.jpeg" },
          { name: "Book B", price: "₹150", image: "/images/bookB.jpeg" },
          { name: "Book C", price: "₹200", image: "/images/bookC.jpeg" },
          { name: "Book D", price: "₹300", image: "/images/bookD.jpeg" },
          { name: "Book E", price: "₹120", image: "/images/bookE.jpeg" },
          { name: "Book F", price: "₹170", image: "/images/bookF.jpeg" },
          { name: "Book G", price: "₹180", image: "/images/bookG.jpeg" },
          { name: "Book H", price: "₹210", image: "/images/bookH.jpeg" },
          { name: "Book I", price: "₹190", image: "/images/bookI.jpeg" },
          { name: "Book J", price: "₹220", image: "/images/bookJ.jpeg" },
          { name: "Book K", price: "₹220", image: "/images/bookK.jpeg" },
          { name: "Book L", price: "₹220", image: "/images/bookL.jpeg" },
        ]);
      });
  }, []);

  const handleAdd = (book_name) => {
    const srn = localStorage.getItem("srn") || "123";
    fetch("http://localhost:5000/add-book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ srn, book_name }),
    });
    navigate("/thanks?book=" + encodeURIComponent(book_name));
  };

  return (
    <div className="books-container">
      <h2>Available Books</h2>
      <div className="books-grid">
        {books.map((book, idx) => (
          <div key={idx} className="book-card">
            <img src={book.image} alt={book.name} className="book-image" />
            <h3>{book.name}</h3>
            <p>{book.price}</p>
            <button onClick={() => handleAdd(book.name)}>Add Book</button>
          </div>
        ))}
      </div>
      <footer>
        <a href="/help">Help</a> | <a href="/contact">Contact</a> | <a href="/about">About</a>
        <p>© 2025 Library System</p>
      </footer>
    </div>
  );
};

export default Books;
