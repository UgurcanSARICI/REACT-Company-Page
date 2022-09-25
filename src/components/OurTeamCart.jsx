import React from "react";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import Icons from "../components/Icons";
const OurTeamCart = ({ name, image, talent }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt="profile"
        className=" w-[15rem] rounded-full border-[8px] border-gray-500"
      />
      <div className="flex flex-col items-center">
        <p className="font-semibold text-2xl">{name}</p>
        <p className="hover:underline">
          {talent ? (
            talent
          ) : (
            <a
              href="https://github.com/UgurcanSARICI"
              alt="link"
              target={"_blank"}
              rel="noreferrer"
            >
              Front-End Developer
            </a>
          )}
        </p>
        <div>
          <div className="mt-2 flex gap-3">
            <Icons icon={<FiTwitter />} />
            <Icons icon={<FiFacebook />} />
            <Icons icon={<FiLinkedin />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCart;
