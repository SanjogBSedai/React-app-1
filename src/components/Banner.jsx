import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <div className="bg-black w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:p-[24px] text-[#00df9a]">
          Learn with us
        </div>
        <h2 className="text-white text-5xl md:text-[80px] md:p-[24px]">
          Grow with us.
        </h2>
        <div className="text-[20px] md:text-[50px] md:p-[24px] text-white">
          Learn
          <Typed
            className="pl-2"
            strings={["WebDevelopment", "BuildingWebsite", "AsDeveloper"]}
            typeSpeed={80}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-[#00df9a] text-white p-3 rounded">
          Get started
        </button>
      </div>
    </div>
  );
}
