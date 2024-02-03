import React from "react";
import BottomFooter from "./footer/BottomFooter";

function Footer() {
  return (
    <div className="h-auto justify-center bg-[#0D0F1C] w-full">
      <div className="flex mx-auto">
        <div className="flex justify-center items-center container mx-auto bg-white border rounded-lg mt-10">
          <div className="text-center justify-center grid grid-rows-1 gap-3 my-auto py-5">
            <div>
              <h5 class="mb-2 font-extrabold text-3xl text-center lg:text-left tracking-tight text-black dark:text-white">
                Let’s have a chat!
              </h5>
            </div>
            <div>
              <button className="rounded-md border font-semibold bg-[#FF6B00] border-[#b5b4ff] hover:bg-[#ffe35a] hover:text-gray-900 p-2 mt-[-14px] transition duration-500 ease-out hover:ease-in">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <BottomFooter />
      </div>
    </div>
  );
}

export default Footer;
