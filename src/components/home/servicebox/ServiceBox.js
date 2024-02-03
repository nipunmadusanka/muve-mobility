import React from "react";
import { AiFillAccountBook } from "react-icons/ai";

const ServiceBox = (props) => {
  const { title, desc, children } = props;
  console.log(title);
  return (
    <div className="container">
      <div className="max-w-sm flex flex-col p-6 h-full md:h-full my-auto text-center lg:h-full overflow-auto bg-[#0D0F1C] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <div className="w-7 h-7 text-white dark:text-gray-400 mb-3 items-center">
            {children}
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
              {title}
            </h5>
          </a>
        </div>
        <div className="grid justify-center text-center">
          <p className="mb-3 font-normal text-slate-300 dark:text-gray-400">
            {desc}
          </p>
        </div>
        <div className="grid justify-center text-center">
          <a
            href="#"
            className="inline-flex items-center text-[#FF6B00] hover:underline"
          >
            Learn more
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
