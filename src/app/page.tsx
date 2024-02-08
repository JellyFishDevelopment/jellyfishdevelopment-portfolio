"use client";
import Image from "next/image";
import logo from "../../public/Logo_Polvo.svg";
import { Texture } from "@/components/Texture";
import { FooterMain } from "@/components/FooterMain"
import sdsWikiProject from "../../public/sds-wiki.png"
import jmSiteProject from "../../public/jm-eletrica.png"
import synapticsProject from "../../public/synaptics-magine.png"
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
      <section className="flex  justify-center flex-col items-center font-extrabold pt-16">
        
      <svg xmlns="http://www.w3.org/2000/svg" width="100" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="100" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#ffffff" d="M 152.847656 43.097656 C 142.019531 45.9375 125.691406 53.925781 114.6875 61.558594 C 104.035156 68.835938 86.820312 87.472656 79.542969 99.71875 C 64.457031 124.746094 58.953125 158.46875 68.007812 171.78125 C 73.863281 180.476562 82.027344 185.269531 101.550781 191.304688 C 114.152344 195.207031 118.945312 197.515625 118.945312 199.644531 C 118.945312 201.066406 114.6875 215.621094 109.363281 231.773438 C 97.648438 267.449219 94.984375 281.113281 96.40625 300.105469 C 97.648438 315.191406 102.617188 334.007812 107.410156 341.285156 C 110.605469 346.253906 118.058594 347.140625 119.65625 342.703125 C 120.1875 341.105469 118.414062 332.410156 115.394531 323.179688 C 112.554688 314.128906 109.714844 303.480469 109.007812 299.75 C 107.410156 289.8125 111.847656 269.753906 123.917969 232.660156 C 133.855469 201.777344 134.210938 200.886719 139.179688 200.355469 C 147.699219 199.289062 156.21875 201.597656 156.21875 204.792969 C 156.21875 206.390625 152.667969 218.460938 148.410156 231.773438 C 137.582031 264.785156 134.210938 282.535156 135.453125 300.105469 C 136.871094 322.824219 145.746094 343.945312 154.265625 345.1875 C 160.300781 346.078125 160.65625 341.105469 155.15625 326.375 C 150.71875 314.128906 150.183594 310.402344 150.183594 291.410156 L 150.007812 270.109375 L 161.542969 236.386719 L 173.082031 202.664062 L 180.359375 202.128906 C 184.261719 201.777344 189.589844 202.484375 192.074219 203.375 L 196.6875 205.148438 L 186.75 234.96875 L 176.632812 264.785156 L 176.632812 291.410156 C 176.632812 312.53125 177.339844 319.984375 179.824219 327.261719 C 183.730469 338.621094 189.054688 345.542969 193.671875 345.542969 C 199.351562 345.542969 199.527344 340.574219 194.378906 325.308594 C 186.925781 303.300781 186.75 288.746094 193.136719 263.898438 C 196.15625 252.714844 201.65625 234.789062 205.386719 223.960938 C 213.015625 202.308594 215.148438 200 228.636719 200 C 238.042969 200 238.042969 201.066406 229.703125 224.140625 C 211.773438 274.015625 210 306.851562 223.667969 337.914062 C 226.328125 344.125 227.925781 345.542969 231.652344 345.542969 C 234.140625 345.542969 236.625 344.300781 237.332031 342.703125 C 237.867188 341.285156 236.089844 332.765625 233.429688 324.066406 C 224.023438 293.363281 224.910156 285.375 244.078125 225.738281 L 253.664062 195.386719 L 265.910156 192.191406 C 281.707031 188.109375 298.035156 179.058594 303.183594 171.601562 C 310.816406 160.242188 306.554688 131.132812 293.421875 104.332031 C 283.660156 84.453125 261.648438 62.800781 241.414062 53.039062 C 233.074219 48.953125 221.535156 44.339844 215.679688 42.921875 C 202.011719 39.546875 165.980469 39.546875 152.847656 43.097656 Z M 181.246094 139.652344 C 194.203125 143.203125 200.59375 155.449219 200.59375 176.570312 C 200.59375 191.660156 198.640625 195.03125 191.71875 192.722656 C 184.617188 190.0625 177.875 181.71875 176.632812 173.730469 C 176.097656 170.183594 174.144531 161.308594 172.195312 154.03125 C 167.757812 136.992188 168.289062 136.105469 181.246094 139.652344 Z M 229.167969 145.511719 C 235.382812 149.0625 239.820312 160.421875 240.882812 174.441406 L 241.949219 187.578125 L 233.785156 187.578125 C 223.132812 187.578125 217.988281 181.71875 214.96875 166.101562 C 213.726562 159.886719 211.597656 152.078125 210.175781 148.707031 C 208.226562 144.269531 208.226562 142.316406 209.644531 141.429688 C 211.953125 139.832031 224.199219 142.316406 229.167969 145.511719 Z M 153.558594 148.527344 C 158.703125 153.320312 161.542969 164.503906 161.542969 179.234375 C 161.542969 192.722656 159.945312 193.964844 149.476562 189.351562 C 140.957031 185.445312 139.890625 183.492188 134.921875 162.015625 C 132.082031 149.414062 131.726562 145.867188 133.5 144.625 C 137.226562 142.136719 149.121094 144.445312 153.558594 148.527344 Z M 265.554688 154.207031 C 276.027344 161.128906 277.800781 167.699219 271.410156 174.441406 C 267.152344 179.058594 260.230469 180.121094 257.921875 176.394531 C 255.792969 173.199219 250.644531 150.480469 251.710938 149.414062 C 253.664062 147.464844 257.390625 148.707031 265.554688 154.207031 Z M 117.882812 159.355469 C 121.785156 162.90625 124.269531 182.785156 121.078125 184.738281 C 118.238281 186.332031 97.113281 174.621094 95.695312 170.539062 C 93.03125 162.726562 102.972656 152.609375 110.960938 154.917969 C 112.910156 155.449219 116.105469 157.402344 117.882812 159.355469 Z M 117.882812 159.355469 " fill-opacity="1" fill-rule="nonzero"/></svg>

        <h1 className="header-title font-extrabold max-[425px]:text-xl max-[768px]:text-3xl text-8xl text-center pt-16">
          Jelly<span className="Fish ">Fish</span><span className="text-4xl">.dev</span>
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
          <h3 className="text-5xl leading-tight">Projetos<span className='Fish'>.</span></h3>

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
                  src={synapticsProject}
                  height={600}
                  width={600}
                  alt="synapitcs project"
                />
                {/* Text */}
                <div >
                  <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">Synaptics Machine</h2>
                 <p className='font-normal p-3'>Site dinâmico de uma solução robusta de CRM e B2B, projetada para otimizar vendas complexas integrando análise avançada de dados.</p>

              <div className='grid grid-cols-7 mt-4'>
              <div className='transition ease-in-out duration-500 p-1 react-logo hover:-translate-y-2'>
                <Image
                    src={nextjslogo}
                    width={40}
                    height={40}
                    alt="nextjs logo"
                  />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={tslogo}
                  width={40}
                  height={40}
                  alt="Type logo"
                />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={reactlogo}
                  width={40}
                  height={40}
                  alt="react logo"
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

        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
        <div className='w-5/6 border rounded-bl-3xl rounded-tr-3xl p-10'>
            <h1 className='text-2xl font-bold text-center'>Sobre nós</h1>
            <p className='pt-5 '>Na <b>Jelly<span className='Fish'>Fish</span> Development</b>, somos mais do que uma desenvolvedora de softwares; somos arquitetos digitais dedicados a transformar suas ideias em soluções inovadoras. <br /><br />Com uma abordagem ágil e comprometimento com a excelência, oferecemos serviços de desenvolvimento <b>mobile, desktop e web personalizados</b> especialmente para você.</p>

            <div className='flex flex-row gap-10 items-center justify-center font-extrabold'>

            <span className='Fish'><p className='font-light text-5xl mt-3 select-none'>{'{'}</p></span>
            <div className='mt-5'>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20"><path fill="#ffffff" d="M15 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.6 15.388H4.4V18a.6.6 0 0 0 .6.6h10a.6.6 0 0 0 .6-.6zM10 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5-14.6H5a.6.6 0 0 0-.6.6v11.988h11.2V2a.6.6 0 0 0-.6-.6"></path></svg>
            </div>
            
            <div className='mt-5'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#ffffff" d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></path></svg>
            </div>
  
            <div className='mt-5'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 16 16"><ellipse cx="3.72" cy="4.02" fill="#ffffff" rx=".67" ry=".62"></ellipse><path fill="#ffffff" d="M6.29 4.65A.65.65 0 0 0 7 4a.67.67 0 0 0-1.38 0a.65.65 0 0 0 .67.65"></path><ellipse cx="8.87" cy="4.02" fill="#ffffff" rx=".67" ry=".63"></ellipse><path fill="#ffffff" d="M14.25 1.5H1.75A1.25 1.25 0 0 0 .5 2.75v10.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25V2.75a1.25 1.25 0 0 0-1.25-1.25M1.75 2.75h12.5v2.5H1.75zm0 10.5V6.5h12.5v6.75z"></path></svg>
            </div>

            <span className='Fish'><p className='font-light text-5xl mt-3 select-none'>{'}'}</p></span>
            
            </div>

            <p className='mt-3 text-center'><br></br> Estamos prontos para levar sua visão ao <b><span className='Fish'> próximo nível</span></b> 🚀</p>

            <a href="/about" className='font-bold justify-center flex flex-row mt-5'>
                <button
                  className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
                  Conheça quem somos
                </button>
              </a>

          </div>

          

          <div className='w-1/2 rounded-xl p-10'>
          </div>
          </motion.div>
        </div>


      <motion.div
        initial={{
          opacity: 0,
          x: isMobile ? 0 : 90,
          y: isMobile ? 90 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex flex-row pb-20">
          {!isMobile ? <div className="w-1/2 rounded-xl p-10"></div> : <></>}

          <div className="w-5/6 border max-[768px]:mx-auto max-[768px]:rounded-3xl rounded-tl-3xl rounded-br-3xl p-10">
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
                <span className="Fish">Conecte-se</span>
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
                    width="20"
                    height="20"
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
      </motion.div>

      {/* screen 4 - footer */}
      <section className="border-t color-border-footer">
        <FooterMain />
      </section>

      <Texture />
      <div className="w-full"></div>
    </>
  );
}
