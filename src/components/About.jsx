import React from "react";
import { AboutUs } from "../assets";
const About = () => {
  return (
    <div className="py-10">
      <div className="text-center my-10">
        <p className="text-6xl font-thin ">About Us</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          suscipit aliquam non velit et consequatur!
        </p>
      </div>
      {/* asdasd */}
      <div className="flex flex-col-reverse sm:flex-row mx-10 justify-center">
        <div className="mt-4 sm:mx-4">
          {[
            "lorem consectetur adipisicing elit. Nequ asdsad",
            "lorem consectetur adipisicing elit. Nequ asdsad",
            "lorem consectetur adipisicing elit. Nequ asdsad",
            "lorem consectetur adipisicing elit. Nequ asdsad",
            "lorem consectetur adipisicing elit. Nequ asdsad",
            "lorem consectetur adipisicing elit. Nequ asdsad",
          ].map((item, idx) => (
            <p key={idx} className="p-2">
              {" "}
              {item}
            </p>
          ))}
        </div>
        <div className="sağ div">
          <img
            src={AboutUs}
            alt="asdasd"
            className="rounded-2xl sm:h-[20rem]"
          />
        </div>
      </div>
      {/* asdasd */}
    </div>
  );
};

export default About;
