"use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';
// import Navbar from '../components/Navbar';
// import dummyUsers from '../components/DummyData';

// const Register = () => {
//   const [stage, setStage] = useState(1);
//   const [formData, setFormData] = useState({});
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     // Add user to the dummy database
//     dummyUsers.push({
//       id: dummyUsers.length + 1,
//       ...formData,
//     });

//     // Save user to local storage
//     localStorage.setItem('authToken', JSON.stringify(formData));

//     // Redirect to dashboard
//     router.push('/dashboard');
//   };

//   return (
//     <div className="bg-black text-white min-h-screen flex items-center justify-center">
//       <Head>
//         <title>Register - Thrift Contributions</title>
//       </Head>

//       <Navbar />

//       <div className="flex w-full max-w-6xl mt-16">
//         <div className="w-1/2 hidden lg:block bg-gray-900 p-8">
//           <h2 className="text-yellow-500 text-3xl font-bold mb-4">Join Thrift Contributions</h2>
//           <p className="text-gray-300">Manage your contributions seamlessly. Save, invest, and grow with our community.</p>
//         </div>
        
//         <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg">
//           <h2 className="text-yellow-500 text-2xl font-bold mb-6">Register</h2>

//           {stage === 1 && (
//             <div>
//               <label className="block mb-4">
//                 <span className="text-gray-300">Email Address / Phone Number</span>
//                 <input type="text" name="emailOrPhone" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your email or phone number"/>
//               </label>
//               <button onClick={() => setStage(2)} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Next</button>
//             </div>
//           )}

//           {stage === 2 && (
//             <div>
//               <label className="block mb-4">
//                 <span className="text-gray-300">Full Name</span>
//                 <input type="text" name="fullname" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your full name"/>
//               </label>
//               <label className="block mb-4">
//                 <span className="text-gray-300">Username</span>
//                 <input type="text" name="username" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter a username"/>
//               </label>
//               <label className="block mb-4">
//                 <span className="text-gray-300">Phone Number</span>
//                 <input type="text" name="phone" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your phone number"/>
//               </label>
//               <div className="flex justify-between">
//                 <button onClick={() => setStage(1)} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
//                 <button onClick={() => setStage(3)} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Next</button>
//               </div>
//             </div>
//           )}

//           {stage === 3 && (
//             <div>
//               <label className="block mb-4">
//                 <span className="text-gray-300">Country</span>
//                 <input type="text" name="country" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your country"/>
//               </label>
//               <label className="block mb-4">
//                 <span className="text-gray-300">State</span>
//                 <input type="text" name="state" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your state"/>
//               </label>
//               <label className="block mb-4">
//                 <span className="text-gray-300">Current Location</span>
//                 <input type="text" name="location" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your current location"/>
//               </label>
//               <div className="flex justify-between">
//                 <button onClick={() => setStage(2)} className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
//                 <button onClick={handleSubmit} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Register</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct usage for the 'app' directory
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import dummyUsers from '../components/DummyData';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
    currentLocation: '',
  });
  const [error, setError] = useState('');
  const [stage, setStage] = useState(1);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStage = () => {
    // Validate input for the current stage
    if (stage === 1) {
      if (!formData.email && !formData.phone) {
        setError('Please provide either an email address or a phone number.');
        return;
      }
    } else if (stage === 2) {
      if (!formData.fullName || !formData.username || !formData.password || !formData.confirmPassword) {
        setError('Please fill out all personal information fields.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      // Check if the email or username already exists in the dummy database
      const existingUser = dummyUsers.find(
        user => user.email === formData.email || user.username === formData.username
      );
      if (existingUser) {
        setError('Email or username already exists, please login or use another.');
        return;
      }
    }

    setError('');
    setStage(stage + 1);
  };

  const handleSubmit = () => {
    // Final stage validation
    if (!formData.country || !formData.state || !formData.currentLocation) {
      setError('Please fill out all additional information fields.');
      return;
    }

    // Add user to the dummy database
    dummyUsers.push({
      id: dummyUsers.length + 1,
      ...formData
    });
    localStorage.setItem('authToken', JSON.stringify(formData));
    router.push('/dashboard');
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Register - Thrift Contributions</title>
      </Head>

      <Navbar />

      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg mt-16">
        <h2 className="text-yellow-500 text-2xl font-bold mb-6">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {stage === 1 && (
          <>
            <label className="block mb-4">
              <span className="text-gray-300">Email Address</span>
              <input type="text" name="email" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your email"/>
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Phone Number</span>
              <input type="text" name="phone" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your phone number"/>
            </label>

            <button onClick={handleNextStage} className="bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-600">Next</button>
          </>
        )}

        {stage === 2 && (
          <>
            <label className="block mb-4">
              <span className="text-gray-300">Full Name</span>
              <input type="text" name="fullName" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your full name"/>
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Username</span>
              <input type="text" name="username" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Choose a username"/>
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Password</span>
              <input type="password" name="password" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Create a password"/>
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Confirm Password</span>
              <input type="password" name="confirmPassword" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Confirm your password"/>
            </label>

            <button onClick={handleNextStage} className="bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-600">Next</button>
          </>
        )}

        {stage === 3 && (
          <>
            <label className="block mb-4">
              <span className="text-gray-300">Country</span>
              <input type="text" name="country" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your country"/>
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">State</span>
              <input type="text" name="state" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your state"/>
            </label>

            <label className="block mb-4">
              <span className="text-gray-300">Current Location</span>
              <input type="text" name="currentLocation" onChange={handleChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded py-2 px-3" placeholder="Enter your current location"/>
            </label>

            <button onClick={handleSubmit} className="bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-600">Register</button>
          </>
        )}

        <div className="mt-4 text-center">
          <p className="text-gray-300">Already have an account? 
            <Link href="/login" legacyBehavior>
              <a className="text-yellow-500 hover:text-yellow-600">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
