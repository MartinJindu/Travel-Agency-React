import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/gallery",
    name: "Gallery",
  },
  {
    href: "/contact",
    name: "Contact",
  },
  {
    href: "/about",
    name: "About",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container px-4 flex justify-between items-center h-16">
        <Link to={"/"}>
          <h3 className="text-2xl font-bold ">Travel</h3>
        </Link>

        <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <button className="hidden py-2 px-6 border bg-gray-300 cursor-pointer">
            Login
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-2 hover:bg-gray-600 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <button className="hidden py-2 px-6 border bg-gray-300 cursor-pointer">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
