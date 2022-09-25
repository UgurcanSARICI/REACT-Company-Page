import React from "react";
import OurTeamCart from "./OurTeamCart";
const OurTeam = () => {
  return (
    <div className="py-10 bg-gray-300">
      <div className="text-center my-10">
        <p className="text-6xl font-thin ">Our Team</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          suscipit aliquam non velit et consequatur!
        </p>
      </div>
      {/* dddd */}
      <div className="flex flex-col max-w-[50rem] sm:max-w-[55rem] md:max-w-[60rem] mx-auto sm:flex-row justify-center items-center gap-[3rem] ">
        {/* xxxx */}
        <OurTeamCart
          name="Frank Mentor"
          talent="Backend Developer"
          image="https://ca.slack-edge.com/T03LBL87DA8-U03MW5VGEMS-e7da38ceffb6-512"
        />
        <OurTeamCart
          name="Ugurcan Sarıcı"
          image="https://ca.slack-edge.com/T03LBL87DA8-U03SCRLMEU8-4682fc00e3fa-512"
        />
        <OurTeamCart
          name="Harvey"
          talent="Backend Developer"
          image="https://ca.slack-edge.com/T03LBL87DA8-U03KULWRB9D-5b17324fe99c-512"
        />
        {/* xxxx */}
      </div>
    </div>
  );
};

export default OurTeam;
