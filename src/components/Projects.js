import React from "react";

const ProjectA = () => {
  return (
    <div class=" bg-gray-100 dark:bg-gray-700  rounded-lg py-5 border-l-2 transition-all duration-[1s] hover:border-amber-300 border-cyan-500 mx-auto w-[90%] text-start px-9 text-gray-700 dark:text-gray-300">
      <p class=" mx-auto w-[90%] text-gray-700 dark:text-gray-300  text-pretty">
        <ul>
          <li className=" list-disc">
            <h3 className="font-semibold text-2xl ">
              College Management Software, <span className=" text-[14px]" >
              <a className="py-2 font-mono hover:text-md hover:animate-pulse hover:transition-transform hover:text-blue-500" href="dl"> GitHub↗️</a>
            </span>
            </h3>
            <ul className="flex flex-row text-sm space-x-2 pt-3">
              <li className=" text-[17px]">Tech Stack: </li>
              <li className="hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Java Swing,</li>
              <li className="hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Postgres</li>
            </ul>
            <ul className=" text-sm space-x-2 space-y-3 py-3">
              <li className=" font-semibold text-xl">Features: </li>
              <li>
                
                <span className=" font-semibold">Student Management: </span>
                  Addmission, Fees, Marks
              </li>
              <li>
                <span className=" font-semibold">Faculty Management: </span>
                Addmission, Salary, Salary payslip
              </li>
              <li>
                <span className=" font-semibold">Upcoming Features:</span> Miragate,
                T.C Generation, Email Notification
              </li>
              <li></li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
  );
};

const ProjectB = () => {
  return (
    <div class="bg-gray-100 dark:bg-gray-700  rounded-lg  py-5 border-l-2 transition-all duration-[1s] hover:border-amber-300 border-cyan-500 mx-auto w-[90%] text-start px-9 text-gray-700 dark:text-gray-300">
      <p class=" mx-auto w-[90%] text-gray-700 dark:text-gray-300  text-pretty">
        <ul>
          <li className=" list-disc">
            <h3 className=" font-semibold   text-2xl ">
              Tomato leaf Disease Detection  <span className=" text-[13px]" >
              <a className="py-2 font-mono hover:text-md hover:animate-pulse hover:transition-transform hover:text-blue-500" href="https://github.com/anuragsgupta/Tomato-Plant-Disease-Detection" target="blank"> GitHub↗️</a>
            </span>
            </h3>
            <ul className="flex flex-wrap text-sm space-x-2 pt-3  ">
              <li className=" font-semibold text-[15px]">Tech Stack: </li>
              <li className="hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Python,</li>
              <li className="hover:text-blue-200 hover:text-[16px] hover:ease-in-out">openCV,</li>
              <li className="hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Tensorflow,</li>
              <li className="hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Deep Learning</li>
            </ul>
            <ul className=" text-sm space-x-2 space-y-2 py-3  ">
              <li className=" font-semibold text-xl">Description: </li>
              <li>
          
                <span className=" font-semibold"></span>
                In This we Used Resnet 50 model to train datasets of tomato leaf from kaggle, model accuracy is 95% in test results and for fontend we flask framework 
              </li>
             
              <li></li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-800 py-2 sm:py-7 " id="projects">
        <div class="container mx-auto px-4 ">
          <h2 class="text-3xl py-5 sm:text-3xl font-semibold text-center mb-4 sm:mb-8 dark:text-white">
            Projects
          </h2>
          <ProjectA />
          <br />
          <ProjectB />
        </div>
      </section>
    </>
  );
};

export default Projects;
