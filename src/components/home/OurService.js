import React from "react";

function OurService() {
  return (
    <div className="h-auto md:h-screen flex justify-center w-full p-5">
      <div className="flex container justify-center items-center">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 mx-auto">
          <div className="container p-5 flex justify-center">
            <div className="my-auto md:text-start text-center">
              <h5 class="mb-2 text-xl font-bold text-gray-900 ">OUR SERVICE</h5>
              <h5 class="mb-2 text-3xl font-extrabold text-gray-900 ">
              Tailored managed IT solutions for your business.
              </h5>
              <p class="font-semibold text-base text-gray-700 dark:text-gray-400">
              We offer managed IT services that are specifically designed to meet the needs of your company. Our knowledgeable staff works closely with you to understand business objectives and obstacles so that we can develop specialized plans and implement effective IT solutions. We guarantee the improvement of your IT environment with our comprehensive strategy, which includes software solutions, cloud services, network security, and ongoing support.
              </p>
            </div>
          </div>
          <div className="container p-5 flex justify-center">
            <img
              class="h-auto max-w-full top-0 right-0 object-cover object-center w-full mix-blend-overlay"
              src="/2.jpg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
