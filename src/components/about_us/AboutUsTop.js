import React from "react";

function AboutUsTop() {
  return (
    <div className="h-auto md:h-screen flex justify-center w-full p-5">
      <div className="flex container justify-center items-center">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 mx-auto">
          <div className="container p-5 flex justify-center">
            <div className="my-auto md:text-start text-center grid grid-rows-1 gap-5 justify-between">
              <h5 class="mb-2 text-xl font-bold text-gray-900 uppercase">
                ABOUT US
              </h5>
              <h5 class="mb-2 text-3xl font-extrabold text-gray-900 ">
                We excel in creating customized software solutions to suit your
                specific needs.
              </h5>
              <p class="font-semibold text-base text-gray-700 dark:text-gray-400">
                At Muve Mobility, we specialize in crafting tailored software
                solutions perfectly aligned with your distinct business needs.
                Empowering you to achieve your goals and stay ahead in a
                competitive market is our priority.
              </p>
            </div>
          </div>
          <div className="container p-5 flex justify-center">
            <img
              class="h-auto max-w-full top-0 right-0 object-cover object-center w-full mix-blend-overlay"
              src="/5.jpg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsTop;
