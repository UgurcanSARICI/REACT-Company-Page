import React from "react";
import { BiCode, BiNetworkChart } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import ServicesCart from "./ServicesCart";
const Services = () => {
  return (
    <div className="my-10 h-auto">
      <div className="text-center">
        <p className="text-6xl font-thin">Services</p>
        <p className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          accusamus ab quia similique, ipsum optio possimus commodi rerum velit
          cum exercitationem harum vitae.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row mt-[3rem] justify-evenly gap-3 sm:mx-[1.6rem]">
        {/* asdasd */}
        <ServicesCart title="Programming" icons={<BiCode />} />
        <ServicesCart title="Design" icons={<MdDesignServices />} />
        <ServicesCart title="Networking" icons={<BiNetworkChart />} />
        {/* asdasd */}
      </div>
    </div>
  );
};

export default Services;
