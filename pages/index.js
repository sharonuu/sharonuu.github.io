import Head from 'next/head';
// import Home1 from "./component/Home1"
import Nav from "./component/Nav"
import my from "../public/images/my.png";
import Image from "next/image";
import Link from "next/link";
import aboutme from "../public/images/about.png";
import Footer from "./component/Footer"
import { useEffect, useState } from "react";

const Projects = () => {
  const ProjectList = [
      {
          href: "https://github.com/sharonuu/EasyQ",
          type: "UI/UX & Fullstack Development",
          // image: "/images/projects/BRITONPlacementTest.webp",
          title: "EasyQ",
          description: "Online office hour queueing system",
          technical: ["Vue.js", "HTML", "CSS", "BootStrap"]
      },
      {
          href: "https://github.com/sharonuu/shortcuts",
          type: "UI/UX & Backend Development",
          // image: "/images/projects/BRITONPlacementTest.webp",
          title: "Shortcuts for Volvo Cars",
          description: "DIY functional module integreted with car system",
          technical: "Vue.js, HTML, CSS, Flask, MySQL, Python",
      },
      {
        href: "/",
        type: "UI/UX & Full stack Development",
        // image: "/images/projects/BRITONPlacementTest.webp",
        title: "E-refrigerator",
        description: "A personal food bank platform to record food, and send alerts automatically when the food is to exceed the time limit",
      },
      {
        href: "https://github.com/sharonuu/sharonuu.github.io",
        type: "UI/UX & Full Stack Development",
        // image: "/images/projects/BRITONPlacementTest.webp",
        title: "Shuoni's Planet 1.0",
        description: "Personal website",
    },
    {
      href: "https://github.com/sharonuu/Jina_FrontEnd",
      type: "UI/UX & Frontend Development",
      // image: "/images/projects/BRITONPlacementTest.webp",
      title: "Jina",
      description: "Upload model plantform",
    },
    {
      href: "https://github.com/sharonuu/minesweeping",
      type: "UI/UX & Full stack Development",
      // image: "/images/projects/BRITONPlacementTest.webp",
      title: "Mine Sweeping",
      description: "Windows GUI Game",
    },
    ]
    return (
      <section className="relative w-full mt-8 rounded-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 z-50 gap-8">
          {ProjectList.map((data, index) => (
              <a
                  className="relative scroll-snap-none w-full h-124 bg-cover rounded-full flex-shrink-0 cursor-pointer hover:opacity-70 duration-200"
                  style={{ backgroundImage: `url(${data.image})`, animationDelay: `10s` }}
                  key={index}
                  href={data.href}
                  target="_blank"
                  rel="noreferrer">
                  <section className="w-full h-full bg-yellow-500 opacity-50 absolute left-0 top-0 rounded-lg z-10" />

                  <section className="w-full h-full relative z-20 p-7 flex flex-col justify-between">
                      <div className="flex flex-row justify-between items-center">
                          <p className="rounded-lg text-xs font-somatic px-5 py-2 bg-black bg-opacity-50 text-white tracking-widest">{data.type}</p>

                          <div className="rounded-lg text-lg font-somatic p-2 bg-black bg-opacity-50 text-white tracking-wider">
                              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.586 12.793L7 14.207L13.707 7.49997L7 0.792969L5.586 2.20697L9.879 6.49997H0.292999V8.49997H9.879L5.586 12.793Z" fill="white" />
                              </svg>
                          </div>
                      </div>

                      <div className="space-y-1 text-white">
                          <h1 className="font-baloo text-4xl">{data.title}</h1>
                          <p className="font-comforta text-sm tracking-wider">{data.description}</p>
                      </div>
                      {/* <p className='rounded-lg font-somatic text-white'>{data.technical}</p>
                      {item = data.technical.map((key, index) => 
                      <p className='rounded-lg'>item</p>
                      )} */}
                      {/* <p className='rounded-lg text-xs font-somatic px-5 py-2 bg-black bg-opacity-50 text-white tracking-widest' >{data.technical}</p> */}
                  </section>
                  
              </a>
          ))}
      </section>
  );
  }


export default function Home() {
  const [isOpen, setOpenState] = useState(false);

    useEffect(() => {
        const section = document.getElementById("about");

        window.addEventListener("scroll", () => {
            if (section && window.pageYOffset >= section.offsetHeight - section.offsetTop - 50) {
                setOpenState(true);
            } else {
                setOpenState(false);
            }
        });
    });

  return (
    <div>
      <Head>
        <title>Shuoni&apos;s Planet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo5.png"/>
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
      </Head>

      <main className = "bg-white px-10">
        <section id="intro" className = "min-h-screen relative w-full ">
          <Nav />
          <div className='relative container w-full h-auto flex items-center z-[999] pt-14'>
            
          
            <div className='text-left relative item-center container'>
              <h1 className="heading py-10 text-4xl font-comfortaa">
                  Hi There!{" "}
                  <span className="wave">👋🏻</span>
              </h1>
              <h2 className='text-6xl py-2 text-yellow-500 font-baloo' data-aos="bounce">I&apos;m Shuoni Xu</h2>
              <h3 className='text-2xl py-2 font-light font-comfortaa' data-aos="fadeIn">A full stack developer, designer and photographer.</h3>
              <Link prefetch href="#about" passHref={true}>
                <button className='btn bg-yellow-600 text-white mt-8  font-baloo' data-aos="fadeIn">
                  <span className="bg-yellow-400 ">&quot;Who are you?&quot;</span>
                </button>
              </Link>
              
            </div>
            <div className='w-auto h-full relative overflow-hidden mt-5 ml-10 pl-10 float-right'>
                <Image src={my} />
            </div>
             
          </div>

          
          
          
          
          {/* <Aboutme /> */}
          
        </section>

        <section id="about" className='relative w-full py-32'>
        <div className="relative container w-full h-full flex flex-col xl:flex-row items-start xl:items-center space-y-10 xl:space-y-0 xl:space-x-10 justify-center z-50">
                    <div className='float-left mx-10'>
                        <Image src={aboutme} className="rounded-full" />
                    </div>
                    <div className="text-black space-y-10 max-w-lg 2xl:max-w-md rounded-full p-0 md:p-8 2xl:p-0 relative">
                      
                    
                        <h1 className="font-baloo text-6xl" data-aos="bounceInDown">
                            It&apos;s me here
                        </h1>
                        <p className="font-comfortaa text-base font-regular leading-7" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            I&apos;m Shuoni, you can also call me Sharon. Borned and raised in China and currently live in Ontario, Canada.
                            
                            <br />
                            <br />
                            I am an Electrical and Computer Engineering student at University of Waterloo. 
                            Some of my interests include: web development, UI/UX design, the blockchain, automatic drive and many others. I&apos;m also pretty into photography, espically street photogrpahy.
                            
                            {/* <br /> */}
                            <br />
                           
                        </p>
                        <Link prefetch href="#projects" passHref={true}>
                          <button className='btn bg-blue-600 text-white mt-8  font-baloo' data-aos="fadeIn">
                            <span className="bg-blue-400 ">Wann learn me more</span>
                          </button>
                        </Link>

                        {/* <a href="https://www.linkedin.com/in/shuoni-xu-5b46821ba/" target={"_blank"} rel="noreferrer" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            <button className="btn bg-green-500 text-white mt-4" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                                <span className="bg-green-300">Great, Now Tell Me More!</span>
                            </button>
                        </a> */}
                    </div>
                </div>
                
        </section>
        <section id="projects" className="relative w-full from-blue-200 to-blue-400 py-10">
          <div className="relative container w-full h-full">
                <section className="flex flex-row justify-between items-end">
                    <div className="text-blue-300 max-w-sm">
                        <h1 className="font-baloo text-7xl" data-aos="zoom-in">
                            My Projects
                        </h1>
                        <h3 className="font-somatic text-2xl leading-8 pt-2" data-aos="zoom-in" data-aos-delay="200">
                            Coming soon....
                        </h3>

                        <Link prefetch href="#contact" passHref={true}>
                            <button className="btn bg-pink-500 text-white mt-8" data-aos="zoom-in" data-aos-delay="400">
                                <span className="bg-pink-300">&quot;Contact me, if interested&quot;</span>
                            </button>
                        </Link>
                    </div>
            
                </section>
                <section className="relative z-50">
                    <Projects />
                </section>
          </div>
        </section>
        <section id="contact" className="relative w-full ">
            <Footer />
        </section>
      </main>
    </div>
  )
}
