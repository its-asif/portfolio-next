import { Typewriter } from 'nextjs-simple-typewriter'
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import Image from "next/image";



const Header = () => {
  return (
    <div>
        
      <ShootingStars />
      <StarsBackground />
      <div className="min-h-screen bg-base-200 lg:py-10 xl-py-20">
        <div className="flex-col">
            {/* <img src="https://i.ibb.co.com/HCfXbhW/1.webp" 
            className="max-w-xs rounded-full mx-auto z-10"  
            alt='asif hossain photo' /> */}
            <Image
              src="https://i.ibb.co.com/HCfXbhW/1.webp"
              alt="asif hossain photo"
              width={400}
              height={400}
              className="rounded-full object-cover max-w-xs mx-auto z-10"
            />
            <div className='text-center  text-white'>
                <h1 className="mb-5 text-5xl font-bold">
                    Hi, This is <br className='md:hidden' /> <span
                        className=' uppercase'
                        style={{
                            background: 'var(--Primary-Gradient, linear-gradient(116deg, #803dd8 40%, #a74dc8 80%))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '55px',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            lineHeight: '63.357px',
                        }}
                    >Asif Hossain</span>
                </h1>
                    
                <h2 className='flex justify-center my-8'>
                    <p className="mb-5 text-4xl font-bold flex">
                    &nbsp;
                        <Typewriter
                            words={['< A MERN Stack Developer /', '< A Competitive Programmer /', "< Love to work in Interesting Projects /", "< Love to Solve Problems /"]}
                            typeSpeed={60}
                            deleteSpeed={40}
                            loop={0}
                            cursor
                            cursorStyle='>'
                        />
                    </p>
                </h2>
               
                <div className='flex justify-center gap-5'>
                    <div>
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-medium leading-6  text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 h-12 text-lg">   
                            <a href='#contacts'> Get In Touch</a>
                            <svg
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                    </div>

                    <button className="text-lg inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10">
                        <a href="https://drive.google.com/file/d/14frBHZWDyvuSOU8M2lVfmxFddPWWPAIE/view?usp=sharing" target='_blank'>View Resume</a>
                    </button>
                    
                </div>
            </div>
        </div>
      </div>  

    </div>
);
};

export default Header;