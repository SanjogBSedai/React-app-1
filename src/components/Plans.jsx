import React from "react";
import single from "../assets/img/single.png";
import double from "../assets/img/double.png";
import triple from "../assets/img/triple.png";

export default function Plans() {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-12">
        {/* First container ------------------------------------------------------------------------------------------------ */}

        <div className="shadow-2xl h-[500px] relative my-4 hover:scale-105 duration-500">
          <div>
            <img
              src={single}
              alt=""
              className="w-[150px] h-[100px] mx-auto justify-center px-2"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Web developer
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage </p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send upto 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] relative rounded font-medium my-6 mx-auto px-6 py-3 ml-[80px]">
              Start Trial
            </button>
          </div>
        </div>
        {/* Second Container ---------------------------------------------------------------------------------------------- */}

        <div className="shadow-2xl h-[500px] my-4 bg-gray-100 hover:scale-105 duration-500">
          <div>
            <img
              src={double}
              alt=""
              className="w-[150px] h-[100px] mx-auto justify-center px-2"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Building Website
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage </p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send upto 2GB</p>
            </div>
            <button className="bg-black w-[200px] relative rounded font-medium text-[#00df9a] my-6 mx-auto px-6 py-3 ml-[80px]">
              Start Trial
            </button>
          </div>
        </div>
        {/* Third 
        Conatiner -------------------------------------------------------------------------------------------------*/}
        <div className="shadow-2xl h-[500px] my-4 hover:scale-105 duration-500">
          <div>
            <img
              src={triple}
              alt=""
              className="w-[150px] h-[100px] mx-auto justify-center px-2"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              As Developer
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="border-b py-2 mx-8 mt-8">500 GB Storage</p>
              <p className="border-b py-2 mx-8">1 Granted User</p>
              <p className="border-b py-2 mx-8">Send upto 2GB</p>
            </div>

            <button className="bg-[#00DF9a] w-[200px] font-medium rounded mt-5 l:{mb-8 px-6 py-3 ml-[100px]} mx-[100px]">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
