import React from "react";

const Header = (props) => {
  const { imagePath, text1, text2, text3 } = props;
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black ">
      <div className="bg-gradient-to-tr from-[#2b2e43] to-[#131629] h-screen w-full">
        <img
          src={imagePath}
          className="top-0 right-0 object-cover object-center w-full h-full mix-blend-overlay"
          alt="Background"
        />
        <div className="absolute z-0 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-lg md:text-xl">{text1}</p>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{text2}</h1>
          <p className="text-lg md:text-xl">{text3}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
