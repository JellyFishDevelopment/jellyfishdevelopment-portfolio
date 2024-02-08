"use client";
import Image from "next/image";
import logo from "../../public/jellyfishlogo.svg";
import logo_footer from "../../public/jellyfish_footer.svg"
import { Texture } from "@/components/Texture";
import { FooterMain } from "@/components/FooterMain"
import sdsWikiProject from "../../public/sds-wiki.png"
import jmSiteProject from "../../public/jm-eletrica.png"
import lucianaProject from "../../public/luciana-advogada.png";
import InfiniteLooper from '@/components/InfiniteLooper'
import LogosTech from '@/components/LogosTech'
import astrologo from '../../public/svg-tec/astrologo.svg'
import tslogo from '../../public/svg-tec/tslogo.svg'
import twlogo from '../../public/svg-tec/twlogo.svg'
import mdlogo from '../../public/svg-tec/markdownlogo.svg'
import reactlogo from '../../public/svg-tec/reactlogo.svg'
import phplogo from '../../public/svg-tec/phplogo.svg'
import vitelogo from '../../public/svg-tec/vitelogo.svg'
import jslogo from '../../public/svg-tec/jslogo.svg'
import nextjslogo from '../../public/svg-tec/nextjslogo.svg'
import { motion } from 'framer-motion'

import Spotlight, { SpotlightCard } from "@/components/Spotlight";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    // window.addEventListener("resize", handleResize);

    // return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* screen 1 - title */}
      <section className="flex justify-center flex-col items-center font-extrabold pt-16">

      <a href="#">
        <Image 
          src={logo}
          width="80"
          alt="sds wiki project"
        />
      </a>

        <h1 className="header-title font-extrabold max-[425px]:text-xl max-[768px]:text-3xl text-8xl text-center pt-16">
          Jelly<span className="Fish select-none">Fish</span><span className="text-4xl">.dev</span>
        </h1>

        <p className="text-neutral-400 pt-5 font-normal max-[768px]:text-sm max-[768px]:text-center">
          Com você, somos capazes de moldar o futuro digital de forma inovadora
          e envolvente ✨
        </p>

        {!isMobile ? (
          <div className="infinite-looper w-11/12">
            <InfiniteLooper>
            </InfiniteLooper>
          </div>
        ) : (
          <></>
        )}

          <div className='p-10'>
            <a href="/projects" className='text-white text-2xl font-extrabold'>
              <button className='rounded-3xl border-2 px-20 py-5 btn1'>
                Projetos
              </button>
            </a>
          </div>

        </section>

        {/* screen 2 - projects */}
        <section className='pt-36 flex flex-col items-center justify-center font-extrabold'>
          <h3 className="text-5xl leading-tight">Projetos<span className='Fish select-none'>.</span></h3>

          <h4 className="text-base text-white text-center font-normal mt-3 mb-8">Nossos últimos projetos realizados</h4>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
          
          <div className='grid grid-cols-2'>
          </div>
          
          {/* Card #1 */}
          <Spotlight className="grid gap-4 lg:grid-cols-3 items-start group">
          <SpotlightCard>
            <div className="relative h-full p-6 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full text-left">
                <Image 
                  className='rounded-lg'
                  src={sdsWikiProject}
                  height={600}
                  width={600}
                  alt="sds wiki project"
                />
                {/* Text */}
                <div >
                  <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">SDS Wiki</h2>
                 <p className='font-normal p-3'>Site dinâmico e minimalista de busca e documentação sobre Software Defined Storage baseado em Astro, utilizando arquivos em markdown.</p>

            <div className='grid grid-cols-7 mt-5'>
              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={astrologo}
                  width={40}
                  height={40}
                  alt="astro logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={reactlogo}
                  width={40}
                  height={40}
                  alt="markdown logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                    src={tslogo}
                    width={40}
                    height={40}
                    alt="TS logo"
                  />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={twlogo}
                  width={40}
                  height={40}
                  alt="TailWind logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={mdlogo}
                  width={40}
                  height={40}
                  alt="markdown logo"
                />
              </div>

            </div>

                </div>
              </div>
            </div>
          </SpotlightCard>
          
          {/* Card #2 */}
          <SpotlightCard>
            <div className="relative h-full p-6 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full text-left">
                <Image 
                  className='rounded-lg w-full'
                  src={jmSiteProject}
                  height={600}
                  width={600}
                  alt="sds wiki project"
                />
                {/* Text */}
                <div >
                  <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">JM Elétrica</h2>
                 <p className='font-normal p-3'>Site institucional sobre elétrica e soluções em energia, usando API de envio de e-mail, baseado em React.</p>

            <div className='grid grid-cols-7 mt-10'>
              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={reactlogo}
                  width={40}
                  height={40}
                  alt="astro logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={tslogo}
                  width={40}
                  height={40}
                  alt="markdown logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                    src={jslogo}
                    width={40}
                    height={40}
                    alt="TS logo"
                  />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={twlogo}
                  width={40}
                  height={40}
                  alt="TailWind logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={vitelogo}
                  width={40}
                  height={40}
                  alt="markdown logo"
                />
              </div>

            </div>

                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card #3 */}
          <SpotlightCard>
            <div className="relative h-full p-6 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full text-left">
                <Image 
                  className='rounded-lg w-full'
                  src={lucianaProject}
                  height={600}
                  width={600}
                  alt="luciana advocacia"
                />
                {/* Text */}
                <div >
                  <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">Luciana Advocacia</h2>
                 <p className='font-normal p-3'>Site estático desenvolvido para assessoria e consultoria de advocacia jurídica.</p>

              <div className='grid grid-cols-7 mt-14'>
              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><g fill="#ffffff" clip-path="url(#akarIconsHtmlFill0)"><path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z"></path><path fill-rule="evenodd" d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z" clip-rule="evenodd"></path></g><defs></defs></g></svg>
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z"></path><path fill="#ffffff" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd"></path></svg>
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={jslogo}
                  width={40}
                  height={40}
                  alt="react logo"
                />
              </div>

            </div>


                </div>
              </div>
            </div>
          </SpotlightCard>
          </Spotlight>

          </motion.div>

          <div className='pt-10 pb-32'>
            <a href="/projects" className='text-white text-2xl font-extrabold'>
              <button className='rounded-3xl border-2 px-20 py-5 btn1'>
                Veja mais
              </button>
            </a>
          </div>
        </section>
        
        {/* screen 3 - about and contact */}

        <div className='flex flex-row'>

        <div className='w-5/6 border rounded-bl-3xl rounded-tr-3xl p-10 backdrop-blur-xl'>
            <h1 className='text-2xl font-bold text-center'>Sobre nós</h1>
            <p className='pt-5 '>Na <b>Jelly<span className='Fish select-none'>Fish</span> Development</b>, somos mais do que uma desenvolvedora de softwares; somos arquitetos digitais dedicados a transformar suas ideias em soluções inovadoras. <br /><br />Com uma abordagem ágil e comprometimento com a excelência, oferecemos serviços de desenvolvimento <b>mobile, desktop e web personalizados</b> especialmente para você.</p>

            <div className='flex flex-row gap-10 items-center justify-center font-extrabold'>


          {/* svgs celular, desktop e web */}
            <span className='Fish select-none'><p className='font-light text-5xl mt-3 select-none'>{'{'}</p></span>
            <div className='mt-5'>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20"><path fill="#ffffff" d="M15 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.6 15.388H4.4V18a.6.6 0 0 0 .6.6h10a.6.6 0 0 0 .6-.6zM10 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5-14.6H5a.6.6 0 0 0-.6.6v11.988h11.2V2a.6.6 0 0 0-.6-.6"></path></svg>
            </div>
            
            <div className='mt-5'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#ffffff" d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
            </div>
  
            <div className='mt-5'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16"><ellipse cx="3.72" cy="4.02" fill="#ffffff" rx=".67" ry=".62"></ellipse><path fill="#ffffff" d="M6.29 4.65A.65.65 0 0 0 7 4a.67.67 0 0 0-1.38 0a.65.65 0 0 0 .67.65"></path><ellipse cx="8.87" cy="4.02" fill="#ffffff" rx=".67" ry=".63"></ellipse><path fill="#ffffff" d="M14.25 1.5H1.75A1.25 1.25 0 0 0 .5 2.75v10.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V2.75a1.25 1.25 0 0 0-1.25-1.25M1.75 2.75h12.5v2.5H1.75zm0 10.5V6.5h12.5v6.75z"></path></svg>
            </div>

            <span className='Fish select-none'><p className='font-light text-5xl mt-3 select-none'>{'}'}</p></span>
            
            </div>

            <p className='mt-3 text-center'><br></br> Estamos prontos para levar sua visão ao <b><span className='Fish select-none'> próximo nível</span></b> 🚀</p>

            <a href="/about" className='font-bold justify-center flex flex-row mt-5'>
                <button
                  className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
                  Conheça quem somos
                </button>
              </a>

          </div>

          <div className='w-1/2 rounded-xl p-10'>
          </div>
          
        </div>



        <div className="flex flex-row pt-20 pb-20">
          {!isMobile ? <div className="w-1/2 rounded-xl p-10"></div> : <></>}

          <div className="w-5/6 border max-[768px]:mx-auto max-[768px]:rounded-3xl rounded-tl-3xl rounded-br-3xl p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-center">
              Vamos trabalhar juntos
            </h2>
            <p className="pt-5 pb-5">
              Nós acreditamos no poder da colaboração para criar soluções
              digitais revolucionárias 🌟
              <br></br>Se você tem uma visão, nós temos a ferramenta pra te
              levar além. Venha transformar seus em realidade.{" "}
            </p>

            <p className="mb-5">
              <b>
                <span className="Fish select-none">Conecte-se</span>
              </b>{" "}
              agora conosco e embarque nesta jornada
            </p>

            <div className="flex max-[768px]:flex-col gap-5">
              <a href="/contact" className="font-bold">
                <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
                  Contate-nos
                </button>
              </a>

              <a href="https://github.com/JellyFishDevelopment">
                <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-black rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-gray-950 focus:outline-none">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ffffff"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    ></path>
                  </svg>
                  Github
                </button>
              </a>

              {/* button instagram */}
              <a href="https://www.instagram.com/jellyfishdevelopment/">
                <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-pink-800 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-pink-900 focus:outline-none">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                  >
                    <g fill="none">
                      <rect
                        width="256"
                        height="256"
                        fill="url(#skillIconsInstagram0)"
                        rx="60"
                      ></rect>
                      <rect
                        width="256"
                        height="256"
                        fill="url(#skillIconsInstagram1)"
                        rx="60"
                      ></rect>
                      <path
                        fill="#fff"
                        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                      ></path>
                      <defs>
                        <radialGradient
                          id="skillIconsInstagram0"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FD5"></stop>
                          <stop offset=".1" stop-color="#FD5"></stop>
                          <stop offset=".5" stop-color="#FF543E"></stop>
                          <stop offset="1" stop-color="#C837AB"></stop>
                        </radialGradient>
                        <radialGradient
                          id="skillIconsInstagram1"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3771C8"></stop>
                          <stop offset=".128" stop-color="#3771C8"></stop>
                          <stop
                            offset="1"
                            stop-color="#60F"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                      </defs>
                    </g>
                  </svg>
                  Instagram
                </button>
              </a>
            </div>
          </div>
        </div>

      {/* screen 4 - footer */}
      <section className="absolute left-0 w-full color-border-footer bg-black footer-section">

        <div className="flex justify-center footer-section">
          <Image 
            className="absolute bottom-0 z-[-100]"
            src={logo_footer}
            width="750"
            height="750"
            alt="sds wiki project"
          />
        </div>

        <div className="border-t border bg-black">
          <FooterMain />
        </div>
        
      </section>

      <Texture />
      <div className="w-full"></div>
    </>
  );
}
