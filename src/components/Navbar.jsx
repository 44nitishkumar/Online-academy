import React from "react";
import { Link } from "react-router";
import { TfiEmail } from "react-icons/tfi";
const Navbar = () => {
  return (
    <nav className="bg-white gap-x-4 mt-2 ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div>
          <img src="logo.webp" alt="logo" className="w-30 h-15" />
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-3 text-center sm:text-left">
          <TfiEmail className="text-3xl sm:text-2xl text-gray-900 mb-2 sm:mb-0" />
          <div>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              Mail Us
            </p>
            <Link
              to="mailto:support@xectiqindia.in"
              className="text-blue-800 text-sm sm:text-base hover:underline"
            >
              support@xectiqindia.in
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link to="/Login">
            <button className="bg-red-500 text-white font-bold text-sm rounded px-2 py-2.5 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-red-600 ">
              Student Login
            </button>
          </Link>

          <Link to="/InstituteLogin">
            <button className="bg-red-500 text-white font-bold text-sm rounded mb-2 px-2 py-2.5 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-red-600">
              Institute Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
