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
    <div className="bg-accent text-white min-h-screen">
      <Navbar />
      <div className="container flex items-center justify-center  p-8 mt-16">
        <div className=''>
          <p className='text-black'>Welcome to the dashboard!</p>
        </div>
      </div>
      <div className="p-8 flex items-center justify-center">
        <div className="bg-white/85 card-title glass space-x-10 justify-center w-2/4 shadow-md text-yellow-600 p-6 rounded-lg mb-1 min-w-2/5" >
          <h6 className="text-2xl text-accent font-semibold mb-2">Main Balance:</h6>
          <h2 className=" text-gray-800 text-5xl font-bold mb-2">₦100,000.00</h2>
        </div>
      </div>
      
      <div className="flex mt-0 card-body items-center justify-center">
        <div className='flex w-2/4 space-x-10 justify-between'>
            <Deposit />
            <Withdraw />
            <Transfer />
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
