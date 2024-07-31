"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import Head from 'next/head';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; // Wait for the router to be ready

    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    }
  }, [router.isReady]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Dashboard - Thrift Contributions</title>
      </Head>

      <Navbar />

      <div className="p-8 mt-16">
        <h2 className="text-yellow-500 text-3xl font-bold">Dashboard</h2>
        <p className="text-gray-300 mt-4">Welcome to your dashboard. Here you can manage your contributions and investments.</p>
      </div>
    </div>
  );
};

export default Dashboard;
