import React from "react";
import ServiceBox from "./servicebox/ServiceBox";
import { BiDesktop } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { BiCloud } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

function Services() {
  const data = [
    {
      title: "Full-Stack Web Development​",
      desc: "Building complete web apps, from front-end to back-end logic",
      icon: <BiDesktop className="text-4xl text-white" />,
    },
    {
      title: "Cloud Enablement Services​",
      desc: "Building complete web apps, from front-end to back-end logic",
      icon: <BiCloud className="text-4xl text-white" />,
    },
    {
      title: "Mobile App Development",
      desc: "Building complete web apps, from front-end to back-end logic",
      icon: <BiMobile className="text-4xl text-white" />,
    },
    {
      title: "UI / UX Design​​",
      desc: "Building complete web apps, from front-end to back-end logic",
      icon: <BiDesktop className="text-4xl text-white" />,
    },
    {
      title: "Social Media Management",
      desc: "Building complete web apps, from front-end to back-end logic",
      icon: <FaFacebook className="text-4xl text-white" />,
    },
    {
      title: "Maintenance & Support​​​",
      desc: "Building complete web apps, from front-end to back-end logic",
      icon: <FaCog className="text-4xl text-white" />,
    },
  ];
  return (
    <div id="services" className="flex justify-center w-full md:h-screen h-auto p-5">
      <div className="container flex items-center justify-center">
        <div className="grid items-center grid-cols-1 gap-3 text-black lg:gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-3">
          {data.map((data, i) => (
            <ServiceBox key={i} title={data.title} desc={data.desc}>
              {data.icon}
            </ServiceBox>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
