import React from 'react';
import Link from 'next/link';
import '@/public/styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" className="navbar-logo-link">
            Hearease
          </Link>
        </div>
        <div className="navbar-links">
          <a href="/download" className="btn-download">Download App</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
