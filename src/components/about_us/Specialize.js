import React from "react";

function Specialize() {
  return (
    <div className="md:h-screen h-auto flex justify-center items-center w-full p-5 bg-[#0D0F1C]">
      <div className="container flex justify-center mx-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          <div className="container flex justify-center p-5 order-2 md:order-1">
            <div className="">
              <img
                class="h-auto max-w-full top-0 right-0 object-cover object-center w-full"
                src="/5.jpg"
                alt="image description"
              />
            </div>
          </div>
          <div className="container flex justify-center p-5 order-1 md:order-2">
            <div className="my-auto md:text-start text-center grid grid-rows-1 gap-5 justify-between">
              {/* <h5 class="mb-2 text-xl font-bold text-white uppercase">
                ABOUT US
              </h5> */}
              <h5 class="mb-2 text-3xl font-extrabold text-slate-100 ">
                We tailor software solutions to your exact needs.
              </h5>
              <p class="font-semibold text-base text-slate-200 dark:text-gray-400">
                We cultivate partnerships, harness cutting-edge technology, and
                provide innovative software solutions crafted specifically for
                your business needs. Our dedicated team is committed to ensuring
                your success through expertise and a passion for technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialize;
