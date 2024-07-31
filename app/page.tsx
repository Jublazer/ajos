import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Thrift Contributions</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-75 shadow-lg py-4 px-8 flex justify-between items-center z-50">
        <div className="text-yellow-500 text-xl font-bold">ThriftContributions</div>
        <ul className="flex space-x-8">
          <li className="text-white hover:text-yellow-500"><a href="#">Home</a></li>
          <li className="text-white hover:text-yellow-500"><a href="#">Ajo</a></li>
          <li className="text-white hover:text-yellow-500"><a href="#">Biller</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="/register" className="text-yellow-500 hover:text-white">Register</a>
          <a href="/login" className="text-yellow-500 hover:text-white">Login</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-8 md:px-16 lg:px-24">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Welcome to Thrift Contributions</h1>
          <p className="text-lg text-gray-300">Join our community and manage your contributions seamlessly. Save, invest, and grow with us.</p>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">About Us</h2>
          <p className="text-gray-300">
            Thrift Contributions is a platform designed to help you manage your financial contributions easily and efficiently. Whether you want to create new contribution groups, view active contributions, or use your balance for utility services, we've got you covered.
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Features</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-white">Create New Contribution Group</h3>
              <p className="text-gray-300">Easily create and manage your contribution groups. Invite members and track your contributions seamlessly.</p>
            </div>
            <div>
              <h3 className="text-xl text-white">List of Contribution Groups</h3>
              <p className="text-gray-300">View all the contribution groups you have created and join new ones.</p>
            </div>
            <div>
              <h3 className="text-xl text-white">Utility Services</h3>
              <p className="text-gray-300">Use your balance to recharge your phone, buy data, and pay for other utility services.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Get Started</h2>
          <div className="flex justify-center space-x-4">
            <a href="/register" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Register</a>
            <a href="/login" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Login</a>
          </div>
        </section>
      </main>
    </div>
  );
}
