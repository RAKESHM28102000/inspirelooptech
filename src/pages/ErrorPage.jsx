// src/pages/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-red-50">
    <h1 className="text-4xl font-bold text-red-700 mb-4">Oops! Something went wrong.</h1>
    <p className="text-gray-700 mb-6">An unexpected error occurred. Please try again later.</p>
    <Link
      to="/"
      className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      Go to Home
    </Link>
  </div>
);

export default ErrorPage;

