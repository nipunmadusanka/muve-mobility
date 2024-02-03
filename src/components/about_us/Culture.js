import React from "react";
import Vision from "./Vision";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";
import { AiOutlineSlack } from "react-icons/ai";

function Culture() {
  return (
    <div className="h-auto md:h-screen w-auto flex justify-center p-5">
      <div className="justify-center items-center mx-auto w-auto flex">
        <div className="container">
          <div className="flex">
            <div className="container text-center grid grid-rows-1 gap-2">
              <h5 class="mb-2 text-xl font-bold text-gray-900 ">OUR CULTURE</h5>
              <h5 class="mb-2 text-3xl font-extrabold text-gray-900 ">
                Why we do, what we do
              </h5>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <Vision
                title="Vision"
                desc="Our goal is to become the leading 
worldwide provider of software 
solutions, enabling organizations 
globally to attain excellence 
through our transparent and mutually 
advantageous approach."
              >
                <AiFillEye className="text-4xl" />
              </Vision>
              <Vision
                title="Purpose"
                desc="Building and utilizing synergistic 
relationships to deliver innovative 
solutions through the effective 
application of technology."
              >
                {" "}
                <AiOutlineSlack className="text-4xl" />
              </Vision>
              <Vision
                title="Mission"
                desc="Facilitating organizational growth by 
thoroughly understanding unique 
requirements and providing customized 
solutions that propel business 
advancement. Our ambition is to be 
recognized as the most trusted and 
esteemed IT partner, driven by an 
unwavering commitment to excellence."
              >
                {" "}
                <AiOutlineAim className="text-4xl" />
              </Vision>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture;
