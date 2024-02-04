import React from "react";
import ProjectBox from "./ProjectBox";

function Project() {
  return (
    <div className="flex justify-center p-5 w-full h-auto ">
      <div className="flex justify-center mx-auto items-center">
        <div className="container">
          <div className="flex">
            <div className="p-8 container flex justify-center">
              <p className="text-ceneter text-3xl font-extrabold">
                Featured Works
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="container p-4">
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <ProjectBox
                  heading="Category"
                  title="Mobile App"
                  link="#"
                  bgimage="./9.jpg"
                />
                <ProjectBox
                  heading="Category"
                  title="Mobile App"
                  link="#"
                  bgimage="./9.jpg"
                />
                <ProjectBox
                  heading="Category"
                  title="Mobile App"
                  link="#"
                  bgimage="./9.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
