import React from "react";

const OurBenefits = (props) => {
  const {title, desc } = props;
  return (
    <div class="flex flex-col items-center border shadow md:flex-row md:max-w-xl ">
      <img class="object-cover rounded-t-lg w-8" src="/1.png" alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal text-center md:text-start">
        <h5 class="mb-2 md:text-2xl text-xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p class="mb-3 font-normal text-white">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default OurBenefits;
