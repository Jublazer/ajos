"use client"
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import Transfer from '../components/Transfer';
const Dashboard = () => {
  const router = useRouter();
 
  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen" data-theme="mytheme">
      <Navbar />
      <div className="container mx-auto p-8 mt-16">
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">Dashboard</h1>
        <p>Welcome to the dashboard! You are successfully logged in.</p>
      </div>
      <div className="p-8 flex items-center justify-center">
        
        <div className="bg-white w-2/4 shadow-md text-orange-600 p-6 rounded-lg mb-6 min-w-2/5" >
          <h1 className="text-2xl text-orange-600 font-semibold mb-4">Main Account Balance</h1>
          <h2 className="text-xl font-bold">₦100,000.00</h2>
          <div className="flex space-x-4">
            <Deposit />
            <Withdraw />
            <Transfer />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
