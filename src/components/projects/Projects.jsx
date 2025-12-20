import React from 'react'
import Title from '../layouts/Title'
import {projecttenC, projecttenB,projecttenA,projectOne, projectTwo, projectThree, projectFour, projectten , projectFive , projectSix,projectSeven,projecteight, projectnine} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AM Restaurant"
          des=" Web-based restaurant management system that allows users to
              order food online, manage reservations, and view the menu."
          src={projectOne}
            git="https://github.com/AM10010/Restaurant-App"
            // repo=""
            Tech="JavaScript , React JS , Bootstrap , Laravel , MySQL , PHP"
        />
        <ProjectsCard
          title="A-TECH"
          des="  A-Tech is a modern, responsive web application built with
                  Angular. It allows users to explore features,"
          src={projectTwo}
          Tech="Angular JS ,TypeScript and Bootstrap"
          git="https://github.com/AM10010/A-Tech"
          repo="https://am10010.github.io/A-Tech/"
        />
        <ProjectsCard
          title="Trendora"
          des=" A full-stack e-commerce platform that offers a seamless shopping
              experience with user authentication, product management"
          src={projectThree}
          Tech="Angular JS, TypeScript, MongoDB, Express JS, Node JS, and Bootstrap"
          git="https://github.com/AM10010/Mean-Stack-"
          // repo=""
        />
        <ProjectsCard
          title="Movies App"
          des=" A web application that allows users to browse, search, and view
              information about movies."
          src={projectFour}
          Tech="Html,CSS,Bootstrap,JavaScript,React JS"
          git="https://github.com/AM10010/Movies-App"
          repo="https://movies-app-jdhm.vercel.app/"
        />
        <ProjectsCard
          title="Weather React App"
          des=" A weather application that provides real-time weather information
              for any location worldwide."
          src={projectFive}
          Tech="Html,CSS,Bootstrap,JavaScript,React JS"
          git="https://github.com/AM10010/react-weather-app"
          repo="https://am10010.github.io/react-weather-app/"

        />
        <ProjectsCard
          title="Exclusive Website"
          des="A responsive website template designed for businesses to showcase
              their services and portfolio."
          Tech="HTML, CSS, Bootstrap, JavaScript, React JS"
          git="https://github.com/AM10010/React-E-Commerce"
          repo="https://react-e-commerce-am.netlify.app/"
          src={projectSix}
        />
        <ProjectsCard
          title="Online Shop Website"
          des="A responsive website template designed for businesses to showcase
              their services and portfolio."
          Tech="HTML, CSS, Bootstrap, JavaScript, React JS"
          git="https://github.com/AM10010/Web-master-e-commerce"
          repo="https://am10010.github.io/Web-master-e-commerce/"
          src={projectSeven}
        />
        <ProjectsCard
          title="Web Master E-Commerce"
          des="A responsive website template designed for businesses to showcase
              their services and portfolio."
          Tech="HTML, CSS, Bootstrap, JavaScript"
          git="https://github.com/AM10010/E-Commerce-Web-Masters"
          repo="https://am10010.github.io/E-Commerce-Web-Masters/"
          src={projecteight}
        />
        <ProjectsCard
          title="Calculator App"
          des=" is a simple, web-based calculator for basic arithmetic operations. It features a clean, responsive design"
          Tech="HTML, CSS, Bootstrap, JavaScript"
          git="https://github.com/AM10010/calculator"
          repo="https://am10010.github.io/calculator/"
          src={projectnine}
        />
        <ProjectsCard
          title="Todo-List App"
          des="A simple To-Do List app that allows users to add, edit, and delete tasks."
          Tech="HTML, CSS, JavaScript"
          git="https://github.com/AM10010/web-maters-todoList"
          repo="https://am10010.github.io/web-maters-todoList/"
          src={projectten}
        />
        <ProjectsCard
          title="Landing page for solar company"
          des="A simple landing page for a solar company that showcases their products and services."
          Tech="HTML, CSS"
          git="https://github.com/AM10010/web-masters-landing-page"
          repo="https://am10010.github.io/web-masters-landing-page/"
          src={projecttenA}
        />
        <ProjectsCard
          title="Landing page for Viva Decor"
          des=" A simple landing page for Viva Decor that showcases their products and services."
          Tech="HTML, CSS, Bootstrap"
          git="https://github.com/AM10010/web-masters-landing-page-2"
          repo="https://am10010.github.io/web-masters-landing-page-2/"
          src={projecttenB}
        />
        <ProjectsCard
          title="Image Slider"
          des=" A dynamic image slider created allowing users to browse images seamlessly"
          Tech="HTML, CSS, Bootstrap ,JavaScript"
          git="https://github.com/AM10010/web-masters-slider"
          repo="https://am10010.github.io/web-masters-slider/"
          src={projecttenC}
        />
      </div>
    </section>
  );
}

export default Projects