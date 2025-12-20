import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaVoicemail,
  FaBook,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiBootstrap, SiLaravel,SiPhp,SiNodedotjs, SiAngular } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Abanoub Maged</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
    As a Full Stack Web Developer, I translate ideas into functional and scalable applications. I focus on writing clean, maintainable code and delivering smooth, intuitive user experiences across the entire stack
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-4 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/AM10010?tab=repositories" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
         <a href="mailto:mabanoub826@gmail.com" target="_blank" rel="noopener noreferrer">
  <span className="bannerIcon">
    <FaVoicemail />
  </span>
</a>

            <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaBook />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/abanoub-maged-612318240/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-3">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
            <span className="bannerIcon">
              <SiLaravel />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
