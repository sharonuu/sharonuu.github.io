import Head from 'next/head';
// import Home1 from "./component/Home1"
import Nav from "./component/Nav"
import my from "../public/images/my.png";
import Image from "next/image";
import Link from "next/link";
import aboutme from "../public/images/about.png";
import Footer from "./component/Footer"
import { useEffect, useState } from "react";




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
        <title>Shuoni Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
      </Head>

      <main className = "bg-white px-10">
        <section id="intro" className = "min-h-screen">
          <Nav />
          
          <div className='py-5 mx-40 w-80 h-80 relative overflow-hidden mt-5 md:h-96 md:w-96 float-right'>
            <Image src={my} />
          </div>
          <div className='text-left p-10 mx-40 relative item-center'>
          <h1 className="heading py-10 text-5xl font-comfortaa">
              Hi There!{" "}
              <span className="wave">👋🏻</span>
          </h1>
          <h2 className='text-5xl py-2 text-yellow-500 font-media font-baloo' data-aos="fadeIn">I&apos;m Shuoni Xu</h2>
          <h3 className='text-2xl py-2 font-light font-comfortaa' data-aos="fadeIn">A full stack developer, designer and photographer.</h3>
          <Link prefetch href="#about" passHref={true}>
            <button className='btn bg-yellow-500 text-white mt-8 rounded-full px-6 py-3 font-baloo' data-aos="fadeIn">
              <span className="bg-theme-green-light">&quot;Who are you?&quot;</span>
            </button>
          </Link>
          </div>
          
          {/* <Aboutme /> */}
          
        </section>

        <section id="about" className='relative w-full py-32'>
        <div className="relative container w-full h-full flex flex-col xl:flex-row items-start xl:items-center space-y-10 xl:space-y-0 xl:space-x-10 justify-center z-50">
                    <div className='float-left mx-10'>
                        <Image src={aboutme} className="rounded-full" />
                    </div>
                    <div className="text-black space-y-10 max-w-lg 2xl:max-w-md rounded-full p-0 md:p-8 2xl:p-0 relative">
                      
                    
                        <h1 className="font-baloo text-6xl" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                        {/* <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['I', "'", 's', ' ', 'm', 'e', ' ', 'h','e','r','e']}
                            idx={15}
                          /> */}
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
                        {/* <a href="https://www.linkedin.com/in/shuoni-xu-5b46821ba/" target={"_blank"} rel="noreferrer" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                            <button className="btn bg-green-500 text-white mt-4" data-aos="fadeIn" data-aos-anchor-placement="center-bottom">
                                <span className="bg-green-300">Great, Now Tell Me More!</span>
                            </button>
                        </a> */}
                    </div>
                </div>
                
        </section>
        <section id="contact" className="relative w-full ">
            <Footer />
        </section>
      </main>
    </div>
  )
}
