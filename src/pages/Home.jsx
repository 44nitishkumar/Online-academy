import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { Data } from "../assets/Data";
import { useEffect } from "react";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(Data), [dispatch]);
  });
  return (
    <div className="bg-black sm:h-full ">
      <div className="container  mx-auto py-6">
        <h2 className="text-white font-bold text-2xl mb-4 text-center underline  decoration-red-500 mb-2 ">
          Notes
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0, 10).map((product, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-115 bg-gray-800 px-4 py-2 rounded"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-15 mt-4 mx-auto "
              />
              <p className="mt-1 font-medium text-white">{product.name}</p>
            </div>
          ))}
        </div>
        <h2 className="text-white text-2xl font-bold mt-16 mb-8 flex justify-center underline decoration-red-500">
          Keyboard Shortcuts
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer ">
          {products.products.slice(10).map((product, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-115 bg-gray-800 px-4 py-2 rounded "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-15 mt-4 mx-auto  "
              />
              <p className="mt-1 font-medium text-white">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// array methods
// object method
// react hooks - useState, useEffect, useReducer, useRef
