import React from "react";

const Login = () => {
  return (
    <div className="bg-blue-900 h-screen flex  items-center justify-center">
      <div className="bg-white  max-w-md p-8 rounded ">
        <h3 className="text-2xl font-bold text-center mb-6 ">Login</h3>
        <div className="space-y-4">
          <div>
            <h3 className="block text-sm text-gray-500 mb-1 ">USER NAME</h3>
            <input
              type="text"
              placeholder="Enter user Name"
              className="border border-gray-500 block w-full px-4 py-2 rounded focus:outline-none"
            />
          </div>
          <div>
            <h3 className="block text-sm text-gray-500 mb-1">PASSWORD</h3>
            <input
              type="text"
              placeholder="Enter Password"
              className="border border-gray-500 rounded px-4 py-2 w-full block focus:outline-none"
            />
          </div>
          <button className="bg-orange-500 px-4 py-2 rounded mt-2 flex justify-center text-center cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
