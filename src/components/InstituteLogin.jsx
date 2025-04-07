import React from "react";

const InstituteLogin = () => {
  return (
    <div className="bg-blue-800 h-screen flex justify-center items-center">
      <div className="conatiner max-w-md bg-white p-8 rounded">
        <h2 className="text-center mb-6 text-2xl font-bold">Sign Up</h2>
        <div className="space-y-4">
          <div>
            <h2 className="text-gray-500 block mb-1 text-sm">USER NAME</h2>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border border-gray-500 rounded px-4 py-2 w-full focus:outline-none"
            />
          </div>
          <div>
            <h2 className="text-gray-500 text-sm block mb-1">PASSWORD</h2>
            <input
              type="text"
              placeholder="Enter Password"
              className="border border-gray-500 rounded px-4 py-2 w-full focus:outline-none"
            />
          </div>
          <button className="bg-orange-500 px-4 py-2 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstituteLogin;
