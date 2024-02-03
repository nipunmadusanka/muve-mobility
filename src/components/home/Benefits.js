import React from "react";
import OurBenefits from "./benefits/OurBenefits";
import PartnerBox from "./partnerbox/PartnerBox";

function Benefits() {
  return (
    <div className="justify-center w-full p-5 overflow-hidden bg-[#0D0F1C]">
      <div className="flex w-full md:p-20 p-4 mx-auto">
        <div className="container flex items-start">
          <h5 class="mb-2 font-extrabold lg:text-[40px] text-[30px] text-center lg:text-left tracking-tight text-white dark:text-white">
            Benefits of Partnering with Us
          </h5>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto">
        <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-2">
          <OurBenefits
            title="Complete User Research Expertise."
            desc="
          Utilize our expertise in full-stack development, DevOps, 
          and containerization to build scalable, high-
          performance applications that lead your industry.
          "
          />
          <OurBenefits
            title="Optimized Code Engineering."
            desc="
            Utilize our expertise in full-stack development, DevOps, 
            and containerization to build scalable, high-
            performance applications that lead your industry.
          "
          />
          <OurBenefits
            title="Excellence in Agile Development."
            desc="Utilize our expertise in full-stack development, DevOps, 
            and containerization to build scalable, high-
            performance applications that lead your industry."
          />
          <OurBenefits
            title="Resilient Software Architecture."
            desc="Utilize our expertise in full-stack development, DevOps, 
            and containerization to build scalable, high-
            performance applications that lead your industry."
          />
        </div>
      </div>

      <div className="flex w-full md:p-20 p-4 mx-auto">
        <div className="container flex items-start">
          <h5 class="mb-2 font-extrabold lg:text-[40px] text-[30px] text-center lg:text-left tracking-tight text-white dark:text-white">
            Partnering with Us
          </h5>
        </div>
        {/* <div className="justify-end">
          <div className="container flex">
            <h5 class="mb-2 text-orange-500">
              View All
            </h5>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center w-full p-5">
        <div className="container flex justify-center">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 ">
            <PartnerBox bgColor="#426691" />
            <PartnerBox bgColor="#FF8B8B" />
            <PartnerBox bgColor="#426691" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
