import React from "react";

function Career() {
  return (
    <div className="md:h-screen h-auto flex justify-center items-center w-full p-5">
      <div className="container flex justify-center mx-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
          <div className="container flex justify-center p-5 order-2 md:order-1">
            <div className="">
              <img
                class="h-auto max-w-full top-0 right-0 object-cover object-center w-full"
                src="/6.jpg"
                alt="image description"
              />
            </div>
          </div>
          <div className="container flex justify-center p-5 order-1 md:order-2">
            <div className="my-auto md:text-start text-center grid grid-rows-1 gap-5 justify-between">
              {/* <h5 class="mb-2 text-xl font-bold text-white uppercase">
              ABOUT US
            </h5> */}
              <h5 class="mb-2 text-3xl font-extrabold ">
                Meet our driven, passionate team
              </h5>
              <p class="font-semibold text-base">
                At our company, we place great importance on creating a
                welcoming and professional environment where every team member
                feels valued and supported. Your presence is highly anticipated,
                as we believe that your skills and expertise will contribute
                significantly to our collective success.
              </p>
              <p class="font-semibold text-base ">
                Please be assured that we have arranged your workspace to cater
                to your requirements, ensuring a comfortable and productive
                environment. Our team is poised to support you with any
                necessary equipment, resources, or information you may need to
                start your tasks seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
