import React from "react";
import laptop from "../assets/img/laptop.jpg";

export default function Experts() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2 ">
      <div className="col-span-1 md:w-[80%]">
        <img src={laptop} alt="Sorry for error" className="inline" />
      </div>
      <div
        className=" col-span-1
        flex
        flex-col
        justify-center"
      >
        <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="my-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          dolore, ipsum cum voluptates nesciunt ratione. Iure fugit, ducimus
          officiis distinctio ex numquam itaque laboriosam autem ab aperiam quis
          rem? Assumenda laboriosam, temporibus ducimus odit explicabo
          dignissimos qui quia architecto, ad aspernatur sed? Natus nostrum
          totam repellendus ipsum alias? Quasi, ut!
        </p>
        <button className="w-[30%] bg-black text-[#00df9a] p-3 rounded">
          Get started
        </button>
      </div>
    </div>
  );
}
