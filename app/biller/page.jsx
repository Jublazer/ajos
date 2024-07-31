"use client"
import Head from 'next/head';
import Navbar from '../components/Navbar';
import dummyUsers from '../components/DummyData';

const Biller = () => {
    
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Biller - Thrift Contributions</title>
      </Head>

      <Navbar />

      <div className="flex w-full max-w-6xl mt-16">
        <div className="w-1/2 hidden lg:block bg-gray-900 p-8">
          <h2 className="text-yellow-500 text-3xl font-bold mb-4">Join Thrift Contributions</h2>
          <p className="text-gray-300">Manage your contributions seamlessly. Save, invest, and grow with our community.</p>
        </div>
        
        <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-yellow-500 text-2xl font-bold mb-6">Biller</h2>

        </div>
      </div>
    </div>
  );
};

export default Biller;
