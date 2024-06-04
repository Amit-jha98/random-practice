"use client";
import React from 'react';
import Link from 'next/link';

const SignIn: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Form submitted');
  };

  return (
    <div className='signup-container'>
      <h1>AASJAS</h1>
      <form onSubmit={handleSubmit}>
        <input type="tel" placeholder="Enter number" required />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter password" required />
        <button type="submit">Sign Up</button>
        <Link href="https://github.com/Amit-jha98">
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
