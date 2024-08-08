import React from "react";
import Nav from "./Nav";
import Projects from "./Projects";
import { AboutEduction } from "./Education";
import Hero from "./Hero";
import Skills from "./Skills";
// import {projectA} from "./Projects";


const Body = () => {
  return (
    <>
      <Hero/>
      <Nav />
      {/* <projectA/> */}
      <AboutMe />
      <Skills/>
      <Projects/>
      <AboutEduction />
    </>
  );
};

// import React from 'react'





export const AboutMe = () => {
  return (
    <section class="bg-white dark:bg-gray-800 py-5 sm:py-7 pt-9" id="education">
        <div class="container mx-auto px-4 " >
        <h2 class="text-2xl text-gray-800 sm:text-3xl font-bold text-center mb-4 sm:mb-8 dark:text-white">
          About Me
        </h2>
        <p class="bg-gray-100 dark:bg-gray-700  rounded-lg py-5 shadow-lg border-l-2 hover:border-cyan-500 mx-auto w-[90%] text-start px-9 text-gray-700 dark:text-gray-300">
          
          

I am a dedicated and motivated Computer Science Engineering student, having completed my diploma and currently pursuing my B.Tech in the 2nd year. My passion lies in backend development, where I thrive on solving complex problems and optimizing systems. I am actively seeking an internship opportunity to apply my skills and gain hands-on experience in real-world projects.
<br/>
<br/>
I am a quick learner, always eager to dive into new technologies and challenges. My strong work ethic drives me to continuously improve and expand my knowledge in the ever-evolving tech landscape.
        </p>
      </div>
    </section>
  );
};



export default Body;
