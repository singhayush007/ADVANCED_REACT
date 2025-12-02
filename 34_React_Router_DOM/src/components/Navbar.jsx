import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const isLoggedIn = true; // testing purpose

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/about");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-blue-900 text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          My<span className="text-red-400">Site</span>
        </h1>

        <div className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-red-400 transition-colors duration-200">
            Home
          </Link>

          <Link to="/about" className="hover:text-red-400 transition-colors duration-200">
            About
          </Link>

          <Link to="/contact" className="hover:text-red-400 transition-colors duration-200">
            Contact
          </Link>

          <Link to="/service" className="hover:text-red-400 transition-colors duration-200">
            Service
          </Link>

          <Link to="/help" className="hover:text-red-400 transition-colors duration-200">
            Help
          </Link>

          <button
            onClick={handleClick}
            className="bg-red-500 px-3 py-1 rounded-md"
          >
            Go to About (Programmatic)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

