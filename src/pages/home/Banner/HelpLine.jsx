import React from "react";
import { AiFillCar, AiOutlineFieldTime } from "react-icons/ai";
import { FaPencilRuler } from "react-icons/fa";
const HelpLine = () => {
  return (
    <section className="py-6 dark:bg-gray-800 -mt-36">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid mx-auto gap-32 grid-cols-1  lg:grid-cols-3 sm:grid-cols-2">
          <div className="card w-60 bg-white mt-6 h-60 flex justify-center items-center  rounded-full shadow-xl">
            <div className="flex-col px-2 flex justify-center items-center w">
              <h2 className="text-8xl">
                <AiOutlineFieldTime className="text-[#455a64]" />
              </h2>
              <p className="font-semibold">Book Online</p>
            </div>
          </div>
          <div className="card w-60 -mt-12 bg-[#455a64] text-white h-60 flex justify-center items-center  rounded-full shadow-xl">
            <div className="flex-col px-2 flex justify-center items-center w">
              <h2 className="text-8xl">
                <AiFillCar />
              </h2>
              <p className="font-semibold">We Drive</p>
            </div>
          </div>
          <div className="card mt-4 w-60 bg-white h-60 flex justify-center items-center  rounded-full shadow-xl">
            <div className="flex-col px-2 flex justify-center items-center w">
              <h2 className="text-7xl">
                <FaPencilRuler className="text-[#455a64]" />
              </h2>
              <p className="font-semibold mt-1">Solve Problem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpLine;
