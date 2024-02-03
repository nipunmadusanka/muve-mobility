import React from "react";
import Header from "../../components/home/Header";
import Services from "../../components/home/Services";
import Benefits from "../../components/home/Benefits";
import OurService from "../../components/home/OurService";

function Home() {
  return (
    <div>
      <Header
        imagePath="./1.jpg"
        text1="The Place Where"
        text2="Ideas Come To Life"
        text3="Exploring the latest technology to match your innovative ideas and business requirements."
      />
      <Services />
      <Benefits />
      <OurService />
    </div>
  );
}

export default Home;
