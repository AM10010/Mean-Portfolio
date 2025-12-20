import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Engineering"
            subTitle="University of Helwan (2018 - 2023)"
            result="Good"
          />
          <ResumeCard
            title="Diploma Mean Stack Development"
            subTitle="NTI (NOV 2024 - DEC 2025)"
            result="90%"
            des="The MEAN Stack Diploma is a practical full-stack training program focused on building modern web applications using MongoDB, Express.js, Angular, and Node.js."
          />
          <ResumeCard
            title="Diploma Full Stack Development"
            subTitle="Kingstar Secondary School (2024 - 2025)"
            result="90%"
            des="The Full Stack React-PHP program focuses on building modern web applications using React for the frontend and PHP , Laravel for the backend"
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
