import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white py-10">
      <div className="grid grid-col-1 md:grid-cols-3 gap-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4">Travel Agency</h2>
          <p className="mb-4">
            Your trusted partner for unforgettable travel experiences. Explore
            the world with us.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <div className="flex flex-col mt-4 space-y-2">
            <Link to={"/"}>Home</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <FaFacebook
              size={24}
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
            />
            <FaInstagram
              size={24}
              className="text-pink-500 hover:text-pink-600 cursor-pointer"
            />
            <FaTwitter
              size={24}
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
            />
            <FaYoutube
              size={24}
              className="text-red-500 hover:text-red-600 cursor-pointer"
            />
          </div>

          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-l-lg bg-gray-600 outline-blue-500 placeholder-white"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-between border-t mt-5 border-gray-700 pt-4">
        <p>&copy; 2025 Travel Agency. All right reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>Terms of services</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
