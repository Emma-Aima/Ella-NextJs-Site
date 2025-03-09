// app/layout.js or pages/_app.js (depending on your setup)
import React from 'react';
import './globals.css';  // Your global CSS file (if you use one)
import Link from 'next/link';  // Link component for navigation
import { Inter } from 'next/font/google'; // If you are using Google Fonts
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Emmanuella Ileogben - Portfolio</title>
      </head>
      <body className={`font-sans ${inter.className}`}>
        {/* Header Section */}
        <header className="bg-gray-600 text-black py-8 text-center">
          <h1 className="text-4xl font-bold">Hi, I'm Emmanuella Ileogben</h1>
          <p className="mt-2 text-xl">A Software Engineer passionate about Web Development, Artificial Intelligence, 
            and Problem Solving.</p>
        </header>

        {/* Main Content */}
        <main className="py-16 px-4 max-w-6xl mx-auto">
          {children}
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-700 text-black py-8 text-center">
          <p>&copy; 2025 Emmanuella Ileogben. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}