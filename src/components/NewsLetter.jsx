import React from "react";

export default function NewsLetter() {
  return (
    <div className="bg-black p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-white">
            Sign up to our newspaper and stay up to date.
          </span>
        </div>
        <div className="m-2">
          <input
            type="email"
            className="rounded p-3 mr-2 text-slate-300"
            placeholder="email"
          />
          <button className="bg-[#00df9a] text-white p-3 rounded">
            Get started
          </button>
          <br />
          <p className="text-white">
            We care about the protection of data. Read our <br />
            <a href="" className="text-[#00df9a]">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
