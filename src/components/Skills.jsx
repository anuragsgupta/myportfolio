import React from "react";

const Skills = () => {
  return (
    <section class="bg-white dark:bg-gray-800 py-7 md:py-7 " id="education">
      <div class="container mx-auto px-4 ">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 dark:text-white">
          Skills
        </h2>
        <p class="bg-gray-100 dark:bg-gray-700  rounded-lg py-5 border-l-2 transition-all duration-[1s] hover:border-amber-300 border-cyan-500 mx-auto w-[90%] text-start px-9 text-gray-700 dark:text-gray-300">
          <section class="project-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-4">
            <div class="flex items-center">
              <h3 class="contact-title  text-md font-semibold">Languages:</h3>
              <ul class="contact-link-content ml-2 flex flex-wrap ">
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Python,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Java,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    JavaScript,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">SQL</span>
                </li>
              </ul>
            </div>
            <div class="flex items-center "> 
              <h3 class="contact-title  text-md font-semibold">
                Frameworks & Libraries:
              </h3>
              
              <ul class="contact-link-content ml-2 flex flex-wrap  ">
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    Java Swing,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Pyrogram (Telegram Bot)</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out"></span>
                </li>
              </ul>
            </div>
            <div class="flex items-center">
              <h3 class="contact-title  text-md font-semibold">Databases:</h3>
              <ul class="contact-link-content ml-2 flex flex-wrap ">
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    MongoDB,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    PostgreSQL,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">MySQL,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Redis</span>
                </li>
              </ul>
            </div>
            <div class=" items-center hidden">
              <h3 class="contact-title  text-md">
                Tools & Technologies:
              </h3>
              <ul class="contact-link-content ml-2 flex flex-wrap ">
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Docker,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    Kubernetes,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">gRPC,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    Protobufs,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">REST,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    Websockets,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">WebRTC,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    Apache kafka,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Linux,</span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">
                    Prometheus,
                  </span>
                </li>
                <li class="flex items-center mr-2">
                  <span class="text-sm  hover:text-blue-200 hover:text-[16px] hover:ease-in-out">Grafana</span>
                </li>
              </ul>
            </div>
          </section>
        </p>
      </div>
    </section>
  );
};

export default Skills;
