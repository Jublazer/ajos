"use client"

import Head from 'next/head';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Login - Thrift Contributions</title>
      </Head>

      <Navbar />

      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg mt-16">
        <h2 className="text-yellow-500 text-2xl font-bold mb-6">Login</h2>

        <label className="block mb-4">
          <span className="text-gray-300">Email Address / Phone Number</span>
          <input type="text" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your email or phone number"/>
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Password</span>
          <input type="password" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your password"/>
        </label>

        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-yellow-500 hover:text-yellow-600">Forgot Password?</a>
        </div>

        <button className="bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-600">Login</button>

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

