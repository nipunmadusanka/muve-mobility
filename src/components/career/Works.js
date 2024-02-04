import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineAudit } from "react-icons/ai";
import { AiFillSlackCircle } from "react-icons/ai";
import { AiFillCrown } from "react-icons/ai";
import { AiFillCustomerService } from "react-icons/ai";
import { AiFillFund } from "react-icons/ai";




function Works() {
  const data = [
    {
      icon: <AiFillDollarCircle className="font-extrabold text-4xl" />,
      color: true,
      title: "Competitive Compensation",
      desc: "We acknowledge the skills, expertise, and invaluable contributions of our software development professionals. Our company provides competitive salaries in line with industry standards, ensuring that your compensation reflects your qualifications and experience appropriately.",
    },
    {
      icon: <AiFillSmile className="font-extrabold text-4xl" />,
      color: false,
      title: "Health and Wellness",
      desc: "Recognizing the significance of both physical and mental well-being, we provide our employees with access to health insurance plans, wellness programs, and gym memberships, all aimed at fostering their overall health and vitality.",
    },
    {
      icon: <AiFillClockCircle className="font-extrabold text-4xl" />,
      color: false,
      title: "Flexible Work Arrangements",
      desc: "Prioritizing work-life balance, our company provides flexible work arrangements, encompassing options such as remote work, flexible hours, and hybrid work models. This enables our employees to adeptly balance their personal and professional commitments.",
    },
    {
      icon: <AiOutlineAudit className="font-extrabold text-4xl" />,
      color: true,
      title: "Professional Development",
      desc: "Emphasizing a commitment to continuous learning and growth, our company ensures that employees have access to ongoing training programs, workshops, and conferences. This allows them to enhance their skills, staying abreast of the latest industry trends and technologies.",
    },
    {
      icon: <AiFillFund className="font-extrabold text-4xl" />,
      color: true,
      title: "Career Advancement",
      desc: "Our company offers a transparent career growth trajectory for our employees, presenting opportunities for promotion and advancement contingent on their performance and potential. We actively promote internal mobility and provide support to employees in pursuing their career aspirations.",
    },
    {
      icon: <AiFillSlackCircle className="font-extrabold text-4xl" />,
      color: false,
      title: "Collaborative Environment",
      desc: "Creating a collaborative and inclusive work environment, we cultivate an atmosphere where teamwork and innovation flourish. Our employees have the chance to collaborate with skilled professionals, exchange ideas, and contribute to engaging and challenging projects.",
    },
    {
      icon: <AiFillCrown className="font-extrabold text-4xl" />,
      color: false,
      title: "Employee Recognition",
      desc: "We are committed to recognizing and valuing the efforts and achievements of our employees. To this end, we have implemented reward and recognition programs specifically crafted to showcase exceptional performance, dedication, and contributions that significantly contribute to the success of the company.",
    },
    {
      icon: <AiFillCustomerService className="font-extrabold text-4xl" />,
      color: true,
      title: "Social Events and Activities",
      desc: "We arrange social events and team-building activities to nurture a sense of community and camaraderie among our employees. These occasions offer chances for networking, relaxation, and collectively celebrating milestones.",
    },
  ];
  return (
    <div className="h-auto w-full p-5 md:p-8 flex justify-center items-center">
      <div className="flex justify-center container mx-auto">
        <div className="p-15 w-full">
          <div className="bg-[#DDDDDD] flex justify-center items-center rounded-lg">
            <div className="container p-3 md:p-10 flex justify-center mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-3">
                {data.map((item, i) => (
                  <div
                    className={`${
                      item.color && `md:bg-[#FFC700]`
                    } 
                     
                    flex justify-center w-full`}
                    key={i}
                  >
                    <div className="md:container p-3 md:p-10">
                      <div className="grid grid-rows-1 gap-4">
                        <div className="flex justify-center md:justify-start">
                          {item.icon}
                        </div>
                        <div className="flex justify-center md:justify-start text-center md:text-start">
                          <p className="text-3xl font-extrabold">
                            {item.title}
                          </p>
                        </div>
                        <div className="flex justify-center md:justify-start text-center md:text-start">
                          <p className="">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
