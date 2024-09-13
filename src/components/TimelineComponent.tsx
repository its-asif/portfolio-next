import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";
import Link from "next/link";
import { TextRevealCard } from "./ui/text-reveal-card";

export function TimelineComponent() {

  const data = [
    {
      title: "Experience",
      content: (
        <div
          className="flex flex-col items-left justify-left  gap-10"
        >
          {/* Kodezen */}
          <div className="flex items-left justify-left ">
            <Link href="https://kodezen.com/"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <img
                  className="rounded-full md:w-12 md:h-auto" 
                  src="https://i.ibb.co.com/JphsfcD/images.jpg" 
                  alt="Kodezen logo"
              />
            </Link>
              
              <div className="space-y-0.5 font-medium dark:text-white rtl:text-right ms-3">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">React Developer - Intern</h1>
                <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-300">Kodezen</h2>
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300">
                  Jul 2024 - Present
                </h3>
                
                <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-md">
                  <li>Developed WordPress plugins using React.js.</li>
                  <li>Worked with JavaScript and PHP to implement functionality.</li>
                  <li>Collaborated remotely with the team to deliver features.</li>
                </ul>

                {/* tech */}

                <div className="flex items-center gap-2 mt-2 text-lg  text-gray-500 dark:text-gray-300">
                  <span className="font-bold">Tech:</span>
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                
                </div>
              </div>
          </div>   

          {/* ROBX AI */}
          <div className="flex items-left justify-left ">
            <Link href="https://robx.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
                className="rounded-full w-10 h-auto md:w-12 md:h-auto" 
                src="https://i.ibb.co.com/mcrKfYP/1687805534944.jpg" 
                alt="ROBX logo"
            />
            </Link>
              
              <div className="space-y-0.5 font-medium dark:text-white rtl:text-right ms-3">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">MERN Developer - Intern</h1>
                <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-300">ROBX AI</h2>
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300">
                  Apr 2024 - Jun 2024 · 2 months
                </h3>
                
                <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-md">
                  <li>Developed user-friendly websites using React.js & TailwindCSS</li>
                  <li> Worked on backend using Express.js & Node.js</li>
                  <li>Implemented database using MySQL & Sequelize ORM</li>
                </ul>

                {/* tech */}
                <div className="flex items-center gap-2 mt-2 text-lg  text-gray-500 dark:text-gray-300">
                  <span className="font-bold">Tech:</span>
                  <span>React.js</span>
                  <span>Express.js</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                  <span>Sequelize</span>
                  <span>TailwindCSS</span>
                </div>
              </div>
          </div>   
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div
          className="flex flex-col items-left justify-left  gap-10 mt-4"
        >
          {/* FEC */}
          <div className="flex items-left justify-left ">
            <div>
              <img
                  className="rounded-full md:w-12 md:h-auto" 
                  src="https://i.ibb.co.com/1q9dL15/faridpur-engineering-college-fec-logo.jpg" 
                  alt="faridpur-engineering-college-fec-logo" 
              />
            </div>
              
            <div className="space-y-0.5 font-medium dark:text-white rtl:text-right ms-3">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Faridpur Engineering College</h1>
              <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-300">B.Sc. in Computer Science and Engineering</h2>
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300">
                2022 - (appox.) 2026
              </h3>
              
            </div>
          </div>  
          {/* G.Lab */}
          <div className="flex items-left justify-left ">
            <div>
              <img
                  className="rounded-full md:w-12 md:h-auto" 
                  src="https://i.ibb.co.com/ZmCHsRQ/government-laboratory-high-school-dhaka-logo.jpg" 
                  alt="government-laboratory-high-school-dhaka-logo" 
              />
            </div>
              
            <div className="space-y-0.5 font-medium dark:text-white rtl:text-right ms-3">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Government Laboratory High School</h1>
              <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-300">HSC in Science Group</h2>
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300">
                2017 - (appox.) 2019
              </h3>
              
            </div>
          </div>  
          {/* AK scl */}
          <div className="flex items-left justify-left ">
            <div>
              <img
                  className="rounded-full md:w-12 md:h-auto" 
                  src="https://i.ibb.co.com/SmbhmfT/1630646597668.jpg" 
                  alt="AK High School logo"
              />
            </div>
              
            <div className="space-y-0.5 font-medium dark:text-white rtl:text-right ms-3">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">A.K. High School</h1>
              <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-300">SSC in Science Group</h2>
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300">
                2007 - 2017
              </h3>
              
            </div>
          </div>  
        </div>
      ),
    },
    {
      title: "Programming Achievements",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
            {/* how to say : noting down my small achievements */}
          </h3>
          <div className="mb-8 flex flex-col gap-2">
            <h4 className=" text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
              ✅ Reached pupil ( 1246 rating ) on Codeforces
            </h4>
            <h4 className=" text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
              ✅ Achieved the "50 Days Badge 2024" on LeetCode, awarded to the Top 6.9% of LeetCoders.
            </h4>
            <h4 className=" text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
              ✅ Participated National Collegiate Programming Contest (NCPC) 2023 onsite contest
            </h4>
            <h4 className="text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
              ✅ Completed Web Development Course on Programming Hero
            </h4>
            
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
  ];
  return (
    <div className="w-full dark">
      <div
        className="flex items-center justify-center "
      >
        <TextRevealCard
          text="Changelog"
          revealText="My Journey"
        />
      </div>
      <Timeline data={data} />
    </div>
  );
}
