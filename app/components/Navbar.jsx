"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-75 shadow-lg py-4 px-8 flex justify-between items-center z-50">
      <div className="text-yellow-500 text-xl font-bold">ThriftContributions</div>
      <ul className="flex space-x-8">
        <li className="text-white hover:text-yellow-500">
          <Link href="/" legacyBehavior><a>Home</a></Link>
        </li>
        <li className="text-white hover:text-yellow-500">
          <Link href="/ajo" legacyBehavior><a>Ajo</a></Link>
        </li>
        <li className="text-white hover:text-yellow-500">
          <Link href="/biller" legacyBehavior><a>Biller</a></Link>
        </li>
      </ul>
      <div className="flex space-x-4">
        {!isLoggedIn ? (
          <>
            <Link href="/register" legacyBehavior>
              <a className="text-yellow-500 hover:text-white">Register</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="text-yellow-500 hover:text-white">Login</a>
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="text-yellow-500 hover:text-white">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
