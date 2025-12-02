import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          About Page
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Welcome to the About section. Choose a topic below to explore nested routes.
        </p>

        {/* Nested Links */}
        <div className="flex gap-4 mb-6">
          <Link
            to="a1"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to A1
          </Link>

          <Link
            to="b1"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Go to B1
          </Link>
        </div>

        {/* Nested Route Render Area */}
        <div className="border-t pt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
