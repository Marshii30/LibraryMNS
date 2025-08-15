// src/Api.js
import axios from "axios";

// 🌐 Replace with your actual Render backend URL after deployment
const BASE_URL = "https://your-backend-service.onrender.com";

// 📚 GET all books
export const getBooks = () => axios.get(`${BASE_URL}/books`);

// ➕ POST: Add a new book
export const addBook = (bookData) => axios.post(`${BASE_URL}/add-book`, bookData);

// 📘 GET: Get book details by ID
export const getBookById = (bookId) => axios.get(`${BASE_URL}/books/${bookId}`);

// 👤 POST: Login user (optional)
export const loginUser = (credentials) => axios.post(`${BASE_URL}/login`, credentials);
