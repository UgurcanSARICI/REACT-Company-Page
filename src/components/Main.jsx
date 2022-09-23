import React from "react";
import banner from "../assets/banner.jpeg";
const Main = () => {
  return (
    <div>
      <div className="absolute h-screen">
        <img
          src={banner}
          alt="main-photo"
          className="h-full w-screen object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative text-center">
          <p className="text-4xl text-purple-500">
            The It career of your dreams starts here
          </p>
          <p className="text-5xl text-purple-300">alpha tech</p>
          <button className="bg-red-700 px-4 py-2 mt-6 text-white rounded-lg hover:bg-red-900 duration-200">
            our services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
