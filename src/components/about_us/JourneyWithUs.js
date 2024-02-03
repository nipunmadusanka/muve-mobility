import React from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { AiOutlineMergeCells } from "react-icons/ai";
import { AiOutlineUndo } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

function JourneyWithUs() {
  const list = [
    {
      icon: <AiOutlineSelect />,
      title: "Customizable",
    },
    {
      icon: <AiOutlineMergeCells />,
      title: "Fully Optimized",
    },
    {
      icon: <AiOutlineUndo />,
      title: "Keep you updated",
    },
    {
      icon: <AiOutlineCheckCircle />,
      title: "Set you up for success",
    },
    {
      icon: <AiOutlineUserAdd />,
      title: "Support you",
    },
  ];
  return (
    <div className="h-auto md:h-screen bg-[#0D0F1C] w-full p-5 flex justify-center items-center">
      <div className="container flex justify-center mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="container flex justify-center p-5 order-2 sm:order-2 md:order-1">
            <div className="">
              <img
                class="h-auto max-w-full top-0 right-0 object-cover object-center w-full"
                src="/5.jpg"
                alt="image description"
              />
            </div>
          </div>
          <div className="flex justify-center p-5 items-center order-1 sm:order-1 md:order-2">
            <div className="container">
              <div className="grid grid-rows-1 gap-4 text-white">
                <div className="md:text-start text-center">
                  <h5 class="mb-2 text-3xl font-extrabold text-slate-100 ">
                    We tailor software solutions to your exact needs.
                  </h5>
                </div>
                <div className="md:text-start text-center">
                  <p class="font-semibold text-base text-slate-200 dark:text-gray-400">
                    We cultivate partnerships, harness cutting-edge technology,
                    and provide innovative software solutions crafted
                    specifically for your business needs. Our dedicated team is
                    committed to ensuring your success through expertise and a
                    passion for technology.
                  </p>
                </div>
                <div className="sm:text-start text-center mt-4 flex justify-center md:justify-start">
                  <ul className="list-none text-base space-y-1">
                    {list.map((item, i) => (
                      <li className="" key={i}>
                        <div className="flex flex-row space-x-4">
                          <div className="flex justify-center items-center text-lg">
                            {item.icon}
                          </div>
                          <p>{item.title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyWithUs;
