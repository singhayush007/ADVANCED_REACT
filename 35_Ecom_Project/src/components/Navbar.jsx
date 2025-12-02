import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6 items-center">
      <Link
        to="/"
        className="hover:text-blue-400 transition duration-200 text-lg font-medium"
      >
        Home
      </Link>

      <Link
        to="/products" 
        className="hover:text-blue-400 transition duration-200 text-lg font-medium"
      >
        Product
      </Link>

      <Link
        to="/about"
        className="hover:text-blue-400 transition duration-200 text-lg font-medium"
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;

