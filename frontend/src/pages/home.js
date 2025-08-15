import '../Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const [srn, setSrn] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() && srn.trim() && department.trim()) {
      navigate('/books');
    } else {
      alert('Please fill all login fields.');
    }
  };

  return (
    <div className="home-container">
      <h1>📚 Read Free Books Online</h1>
      <p>Millions of books available through Controlled Digital Lending.</p>

      {/* Login Box */}
      <div className="login-box">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="SRN (ID)"
          value={srn}
          onChange={(e) => setSrn(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      {/* Sample Books Section */}
      <div className="sample-books">
        <div className="book">
          <img src="/images/book4.jpeg" alt="The Symphony Of Life" />
          <p><strong>The Symphony Of Life</strong><br />₹150</p>
          <button onClick={() => alert("Login First")}>Add Book</button>
        </div>

        <div className="book">
          <img src="/images/book3.jpeg" alt="City Of Joy" />
          <p><strong>City Of Joy</strong><br />₹120</p>
          <button onClick={() => alert("Login First")}>Add Book</button>
        </div>

        <div className="book">
          <img src="/images/book2.jpeg" alt=" Best Seller She Wrote" />
          <p><strong> Best Seller She Wrote</strong><br />₹180</p>
          <button onClick={() => alert("Login First")}>Add Book</button>
        </div>

        <div className="book">
          <img src="/images/book1.jpeg" alt="Attack On Titan" />
          <p><strong>Attack On Titan</strong><br />₹160</p>
          <button onClick={() => alert("Login First")}>Add Book</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
