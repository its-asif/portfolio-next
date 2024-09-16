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
            Noting Down My Small Achievements
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
            <h4 className=" text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
              ✅ Achieved Leetcode Badge "DCC June 2024" after completing the June LeetCoding Challenge.
            </h4>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
           
            <div 
              className="grid grid-cols-1 gap-4"
            >
              {/* p.hero */}
            <div className="relative group md:h-44 lg:h-60 w-full">
              <Image
                src="https://i.ibb.co.com/4KKR5G2/image.png"
                alt="Programming Hero certificate"
                width={500}
                height={500}
                className="rounded-lg h-full w-full"
              />
              <Link href="https://www.linkedin.com/posts/4sif_certificate-of-achievement-activity-7143318235034136576-kTQa?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">Programming Hero Certificate</span>
              </div>
              </Link>
            </div>

            {/* kodezen team meetings */}
            <div  className="relative group md:h-44 lg:h-60 w-full">
              <Image
                src="https://i.ibb.co.com/prb8M5X/1724941857267.jpg"
                alt="Kodezen meeting"
                width={500}
                height={500}
                className="rounded-lg 
                h-20 md:h-44 lg:h-60 w-full"
              />
              <Link href="https://www.linkedin.com/posts/kodezenteam_kodezen-monthlymeeting-august24-activity-7234930555383918592-x6vj?utm_source=share&utm_medium=member_desktop"  
                target="_blank"
                rel="noopener noreferrer"
              >
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold p-10 text-center">Kodezen Team August 2024 Monthly Meeting Highlights</span>
              </div>
            </Link>
            </div>
          </div>
            
            {/* Leetcode 50 */}
            <div className="relative group row-span-2 w-full h-[490px]">
            <Image
              src="https://i.ibb.co.com/94m8jdW/1720977176092.jpg"
              alt="Leetcode 50 days badge"
              width={500}
              height={500}
              className="rounded-lg row-span-2 w-full h-[490px] object-cover object-center"
            />
            <Link href="https://www.linkedin.com/posts/4sif_leetcode-dsa-problemsolving-activity-7218301460197859328-D9w6?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Leetcode 50 Days Badge</span>
            </div>
            </Link>
          </div>

          {/* CF pupil */}
          <div className="relative group w-full col-span-2">
             <Image
              src="https://i.ibb.co.com/4fxjtjH/1679511098388.jpg"
              alt="Codeforces pupil ranking"
              width={800}
              height={500}
              className="rounded-lg 
              object-cover
              object-right
              h-auto w-full"
            />
            <Link href="https://www.linkedin.com/posts/4sif_competitiveprogramming-codeforces-problemsolving-activity-7044380120840601600-WmNd?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Codeforces Pupil Ranking</span>
            </div>
            </Link>
          </div>
          </div>
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
