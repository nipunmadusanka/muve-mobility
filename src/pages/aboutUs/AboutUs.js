import React from "react";
import Header from "../../components/home/Header";
import AboutUsTop from "../../components/about_us/AboutUsTop";
import Specialize from "../../components/about_us/Specialize";
import Culture from "../../components/about_us/Culture";
import JourneyWithUs from "../../components/about_us/JourneyWithUs";
import TalktoUs from "../../components/about_us/TalktoUs";

function AboutUs() {
  return (
    <div>
      <Header
        imagePath="./4.jpg"
        text1=""
        text2="Our Company"
        text3="Where possibilities meet technology."
      />
      <AboutUsTop />
      <Specialize />
      <Culture />
      <JourneyWithUs />
      <TalktoUs />
    </div>
  );
}

export default AboutUs;
