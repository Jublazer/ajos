"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct usage for the 'app' directory
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    // Set the initial theme based on user's preference or default to light
    const userTheme = localStorage.getItem('theme') || 'light';
    setTheme(userTheme);
    document.documentElement.setAttribute('data-theme', userTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };



  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    // Clear the authentication token and redirect to the homepage
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    router.push('/');
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-yellow-500 font-bold text-xl">
          Thrift Contributions
        </Link>
        <div className="tabs tabs-bordered">
          <button
            className={`tab ${theme === 'light' ? 'tab-active' : ''}`}
            onClick={toggleTheme}
          >
            Light
          </button>
          <button
            className={`tab ${theme === 'dark' ? 'tab-active' : ''}`}
            onClick={toggleTheme}
          >
            Dark
          </button>
        </div>
        <div>
          <Link href="/" className="text-white mx-2 hover:text-yellow-600 active:text-yellow-500">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="text-white mx-2  hover:text-yellow-600 active:text-yellow-500">
                Dashboard
              </Link>
              <Link href="/ajo" className="text-white mx-2  hover:text-yellow-600 active:text-yellow-500">
                Ajo
              </Link>
              <Link href="/biller" className="text-white mx-2  hover:text-yellow-600 active:text-yellow-500">
                Biller
              </Link>
              <button onClick={handleLogout} className="text-white mx-2  hover:text-yellow-600 active:text-yellow-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white mx-2">
                Login
              </Link>
              <Link href="/register" className="text-white mx-2">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

