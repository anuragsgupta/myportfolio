import React from "react";

// export default Education
export const AboutEduction = () => {
  return (
    <section class="transition-all duration-[1s] hover:border-amber-300 border-cyan-500 dark:bg-gray-800 py-7 sm:py-7 " id="education">
      <div class="container mx-auto px-4 ">
        <h2 class="text-2xl py-5 sm:text-3xl font-bold text-center  mb-4 sm:mb-8 dark:text-white">
          Education
        </h2>
        <About10thEduction />
        <br />
        <AboutDiplomaEduction />
      </div>
    </section>
  );
};

export const About10thEduction = () => {
  return (
<div class="bg-gray-100 dark:bg-gray-700  rounded-lg py-5 shadow-lg border-l-2 transition-all duration-[1s] hover:border-amber-300 border-cyan-500 mx-auto w-[90%] text-start px-9 text-gray-700 dark:text-gray-300 animate-border
  ">
<ul className=" list-disc">
        <li className="py-5 text-xl md  ">
          <span className="text-2xl font-semibold ">Class 10th</span>
          <br />
          <ul className="text-sm   py-3 list-disc px-3 space-y-3">
            <li className="hover:text-white hover:text-[16px] hover:ease-in-out">
              From Govt. Excellence Higher Secondary School Chinndwara
            </li>
            <li className="hover:text-white hover:text-[16px] hover:ease-in-out">
              Distinct in Maths and Science
            </li>
            <li className="hover:text-white hover:text-[16px] hover:ease-in-out">
              With 74%
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export const AboutDiplomaEduction = () => {
  return (
    <div class="bg-gray-100 dark:bg-gray-700  rounded-lg py-5 shadow-lg border-l-2 transition-all duration-500 hover:border-amber-300 border-cyan-500 mx-auto w-[90%] text-start px-9 text-gray-700 dark:text-gray-300">
      <ul>
        <li className="py-5 text-xl md  ">
          <span className="text-2xl font-semibold ">
            Computer Science & Engineering Diploma
          </span>
          <br />
          <ul className="text-sm   py-3 list-disc px-3 space-y-3">
            <li className="hover:text-white hover:text-[16px] hover:ease-in-out">
              From Govt. Polytechnic College Sironj
            </li>
            <li className="hover:text-white hover:text-[16px] hover:ease-in-out">
              Pass With Honours
            </li>
            <li className="hover:text-white hover:text-[16px] hover:ease-in-out">
              CGPA 8.5
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AboutEduction;
