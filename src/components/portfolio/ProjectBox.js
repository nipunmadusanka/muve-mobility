import React from "react";
import { AiOutlineExport } from "react-icons/ai";

const ProjectBox = (props) => {
  const { heading, title, link, bgimage } = props;
  return (
    <div className="container ">
      <div className="bg-[#0D0F1C]/40 hover:bg-[#0D0F1C]/80 ease-in-out hover:translate-y-1 transition hover:scale-110 hover:duration-75">
        <div className="w-full relative">
          <img
            className="top-0 left-0 w-full object-cover max-h-64 mix-blend-overlay"
            src={bgimage}
            alt="/"
          />
          <div className="bg-black/30 absolute top-0 left-0 w-full" />
          <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-center space-y-4">
              <p className="font-semibold text-base">{heading}</p>
              <p className="font-bold text-xl">{title}</p>
              <div className="flex justify-center">
                <a href={link} className="">
                  <AiOutlineExport className="text-xl font-extrabold" />
                </a>
              </div>
            </div>
            {/* <p className="tex-red-700">I am Morgan Freeman</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
