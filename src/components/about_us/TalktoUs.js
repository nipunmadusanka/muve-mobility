import React from "react";

function TalktoUs() {
  return (
    <div className="h-auto w-full p-5 flex justify-center items-center">
      <div className="container flex justify-center mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center py-16">
          <div className="flex container justify-center items-center p-5">
            <div className="sm:text-start text-center">
              <h5 class="mb-2 text-4xl font-extrabold text-black">
                Discover Our Story and Expertise
              </h5>
            </div>
          </div>
          <div className="flex container justify-center items-center p-5">
            <div className="grid grid-rows-1 gap-8">
              <div className="sm:text-start text-center">
                <h5 class="text-2xl font-bold text-black ">
                  Know more about us
                </h5>
              </div>
              <div className="sm:text-start text-center">
                <p class="font-semibold text-base text-black dark:text-gray-400">
                  Explore further into our journey, capabilities, and client
                  success stories to acquire a comprehensive understanding of
                  how we can empower your business.
                </p>
              </div>
              <div className="flex justify-center items-center sm:justify-start">
                <button className="rounded-md text-white border bg-[#FF6B00] border-[#b5b4ff] hover:bg-[#ffe35a] hover:text-gray-900 p-2 mt-[-14px] transition duration-500 ease-out hover:ease-in">
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalktoUs;
