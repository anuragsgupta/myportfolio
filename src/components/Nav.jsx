/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Nav = () => {
  return (
    <nav class="z-10">
        <ul class="flex flex-row justify-center space-x-6 px-6 py-4 text-indigo-100 bg-gray-900 ">
            <li class=" hover:border-b-2 delay-100 ease-in-out border-blue-300 ">
                <a href="#">Home</a>
            </li>
            <li class=" hover:border-b-2 delay-500 ease-in-out border-blue-300 ">
                <a href="#education" >Education</a>
            </li>
            <li class="hover:border-b-2 delay-500 ease-in-out border-blue-300 ">
                <a href="#projects" >Projects</a>
            </li>
            <li class="hover:border-b-2 delay-500 ease-in-out border-blue-300 ">
                <a href="#contacts" >Contacts</a>
            </li>
            
        </ul>
    </nav>    
);
};


export default Nav;
