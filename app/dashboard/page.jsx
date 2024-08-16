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
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 mt-16">
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">Dashboard</h1>
        <p>Welcome to the dashboard! You are successfully logged in.</p>
        <input type="checkbox" class="checkbox checkbox-accent" />
      </div>
      <div className="p-8 flex items-center justify-center">
        
        <div className="bg-white/85 glass w-2/4 shadow-md text-yellow-600 p-6 rounded-lg mb-6 min-w-2/5" >
          <h1 className="text-2xl text-gray-600 font-semibold mb-4">Main Account Balance</h1>
          <h2 className=" text-green-600 text-5xl font-bold mb-5">₦100,000.00</h2>
          <div className="flex space-x-4">
            <Deposit />
            <Withdraw />
            <Transfer />
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-bordered w-full h-44 bg-slate-50">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Groups" />
        <div role="tabpanel" className="tab-content p-10 w-full">Groups Contents</div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Invest"
          defaultChecked />
        <div role="tabpanel" className="tab-content p-10">Invest Content</div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Savinga" />
        <div role="tabpanel" className="tab-content p-10">Savings Contents</div>
      </div>
    </div>
  );
};

export default Dashboard;
