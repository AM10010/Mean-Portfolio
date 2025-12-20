import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import {
  FaGithub,
  FaMobile,
  FaVoicemail
} from "react-icons/fa";
import Title from '../layouts/Title';

const ContactLeft = () => {
  return (
    <>
     <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
     <div className="flex justify-center items-center text-center mb-5">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
    <div className='flex content-center w-full justify-center'>
    <div className="w-full lgl:w-[50%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Abanoub Maged</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+0127 943 1436</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mabanoub826@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
           <div className="flex gap-4">
                      <a href="https://github.com/AM10010?tab=repositories" target="blank">
                        <span className="bannerIcon">
                          <FaGithub />
                        </span>
                      </a>
                      <a href="tel:+201279431436" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaMobile />
          </span>
        </a>
         <a href="mailto:mabanoub826@gmail.com" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaVoicemail />
          </span>
        </a>
         <a href="https://www.linkedin.com/in/abanoub-maged-612318240/" target="blank">
                       <span className="bannerIcon">
                         <FaLinkedinIn />
                       </span>
                     </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </>
  );
}


export default ContactLeft