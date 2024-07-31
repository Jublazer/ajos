"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import dummyUsers from '../components/DummyData';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; // Wait for the router to be ready
  }, [router.isReady]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const user = dummyUsers.find(
      user =>
        (user.email === formData.emailOrPhone || user.phone === formData.emailOrPhone) &&
        user.password === formData.password
    );

    if (user) {
      // Save user to local storage
      localStorage.setItem('authToken', JSON.stringify(user));

      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      setError('Invalid email/phone number or password.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Login - Thrift Contributions</title>
      </Head>

      <Navbar />

      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg mt-16">
        <h2 className="text-yellow-500 text-2xl font-bold mb-6">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <label className="block mb-4">
          <span className="text-gray-300">Email Address / Phone Number</span>
          <input type="text" name="emailOrPhone" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your email or phone number"/>
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Password</span>
          <input type="password" name="password" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your password"/>
        </label>

        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-yellow-500 hover:text-yellow-600">Forgot Password?</a>
        </div>

        <button onClick={handleSubmit} className="bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-600">Login</button>

        <div className="mt-4 text-center">
          <p className="text-gray-300">Don't have an account? 
            <Link href="/register" legacyBehavior>
              <a className="text-yellow-500 hover:text-yellow-600">Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
