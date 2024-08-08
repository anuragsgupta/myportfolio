import React from 'react'
import me from "../resources/me.jpeg";

const Hero = () => {
  return (
    <section class=" bg-blue-100 dark:bg-blue-900  sm:py-20  bg-hero-pattern ">
      {/* <div class="container mx-auto px-4 "> */}
      <div class=" h-2/4 w-full p-1 bg-secondary rounded-md flex  justify-center items-center sm:w-full ">
        <div class="h-full w-full  rounded-md  flex justify-center items-center sm:3/4   ">
          <div class="h-80 w-90 px-12  sm:h-full sm:w-3/4 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray flex justify-between items-center sm:px-32">
            <div class="py-8 flex flex-col justify-center items-center gap-5">
              <div className='flex flex-row-reverse'>
              <h1 class=" sm:block text-3xl font-bold text-white py-3 px-3">
              <span className='block sm:hover:animate-bounce '>Hi, </span>  I am Anurag 
              </h1>
              <img
                alt="name"
                src={me}
                className="rounded-full transition-all hover:grayscale w-20 h-20    justify-center "
              />
              </div>
              <p class=" sm:block text-2xl font-semibold text-gray-200">
                 I am Student <br/> 
                 19,he/him
              </p>
            </div>
            <div class="flex justify-center flex-col    sm:flex h-80 w-90  sm:justify-center sm:flex-col "> 
              <div className=' '>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Hero