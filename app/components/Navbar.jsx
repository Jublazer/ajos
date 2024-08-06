"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct usage for the 'app' directory
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

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
        <div>
          <Link href="/" className="text-white mx-2">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/ajo" className="text-white mx-2">
                Ajo
              </Link>
              <Link href="/biller" className="text-white mx-2">
                Biller
              </Link>
              <button onClick={handleLogout} className="text-white mx-2">
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

