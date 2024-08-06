"use client"
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
      </div>
    </div>
  );
};

export default Dashboard;
