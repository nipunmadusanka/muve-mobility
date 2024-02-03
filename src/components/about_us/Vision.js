import React from "react";


const Vision = (props) => {
    const { title, desc, children } = props;
  return (
    <div className="border-2 border-black">
      <div className="grid grid-cols-1 sm:grid-cols-5 p-4 sm:p-8">
        <div className="flex justify-center sm:justify-start">
          {children}
        </div>
        <div className="col-span-4">
          <div className="grid grid-rows-1 gap-5">
            <div className="sm:text-start text-center">
              <p className=" text-neutral-950 font-extrabold text-2xl">
                {title}
              </p>
            </div>
            <div className="container text-center sm:text-start">
              <p>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
