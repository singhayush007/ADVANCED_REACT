import React from 'react'

const About = () => {
  return (
    <div className="w-full min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>

        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Welcome to our platform! We are committed to delivering high-quality solutions 
          that make your experience smooth, intuitive, and enjoyable.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Our mission is to build modern web applications with clean code, performance, 
          and user-focused design. We believe in constant learning, innovation, 
          and pushing boundaries to create something meaningful.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Thank you for being a part of this journey!
        </p>
      </div>
    </div>
  )
}

export default About
