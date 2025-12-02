// Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-20 px-6">
      {" "}
      <section className="text-center max-w-3xl">
        {" "}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Our Store{" "}
        </h1>{" "}
        <p className="text-lg text-gray-700 mb-6">
          Explore the best products curated just for you. Navigate through our
          categories and find exactly what you need with ease.{" "}
        </p>{" "}
        <div className="flex justify-center gap-4">
          {" "}
          <a
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View Products{" "}
          </a>{" "}
          <a
            href="/about"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
          >
            Learn More{" "}
          </a>{" "}
        </div>{" "}
      </section>
      <section className="mt-16 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Quality Products</h2>
          <p className="text-gray-600">
            All our products are carefully selected for top quality and
            reliability.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Fast Delivery</h2>
          <p className="text-gray-600">
            Get your orders delivered to your doorstep quickly and safely.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">24/7 Support</h2>
          <p className="text-gray-600">
            Our team is here to help you anytime you need assistance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
