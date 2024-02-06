'use client'
import Image from 'next/image'
import logo from '../../public/Logo_Polvo.svg'
import { Texture } from "@/components/Texture";
import { FooterMain } from "@/components/FooterMain"
import sdsWikiProject from "../../public/sds-wiki.png"
import jmSiteProject from "../../public/jm-eletrica.png"
import lucianaProject from "../../public/luciana-advogada.png"
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

import Spotlight, { SpotlightCard } from '@/components/Spotlight';

export default function Home() {
  
  return (
    <>
        {/* screen 1 - title */}
        <section className='flex flex-col items-center font-extrabold pt-16'>

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" zoomAndPan="magnify" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="e62f4d81d7"><path d="M 73.304688 122.160156 L 301.691406 122.160156 L 301.691406 356.613281 L 73.304688 356.613281 Z M 73.304688 122.160156 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#e62f4d81d7)"><a href="/"><path fill="#ffffff" d="M 96.425781 288.050781 C 90.867188 239.042969 158.914062 225.574219 153.441406 172.839844 C 148.59375 193.914062 127.097656 203.214844 108.820312 214.273438 C 103.144531 217.707031 97.421875 221.523438 92.636719 226.148438 C 87.554688 231.058594 83.527344 236.878906 81.75 244.101562 C 78.101562 258.90625 85.546875 274.386719 96.425781 288.050781 Z M 278.566406 288.050781 C 284.125 239.042969 216.078125 225.574219 221.554688 172.839844 C 226.402344 193.914062 247.894531 203.214844 266.175781 214.273438 C 271.847656 217.707031 277.570312 221.523438 282.355469 226.148438 C 287.441406 231.058594 291.464844 236.878906 293.246094 244.101562 C 296.890625 258.90625 289.445312 274.386719 278.566406 288.050781 Z M 186.003906 356.59375 C 160.691406 355.886719 139.121094 336.039062 136.519531 310.84375 C 135.15625 297.609375 138.816406 283.816406 144.441406 270.1875 C 154.441406 245.953125 169.320312 222.195312 167.695312 196.8125 C 157.097656 241.929688 94.839844 248.683594 101.144531 297.207031 C 87.71875 287.023438 77.417969 272.582031 74.296875 257.484375 C 70.972656 241.417969 76.089844 227.09375 88.1875 216.121094 C 97.296875 207.859375 109.058594 202.109375 119.238281 194.695312 C 131.691406 185.625 141.238281 173.84375 139.164062 150.710938 C 138.820312 146.839844 138.804688 144.636719 140.625 141.109375 C 146.109375 130.488281 164.296875 122.617188 186.078125 122.285156 C 187.023438 122.273438 187.96875 122.273438 188.917969 122.285156 C 210.695312 122.617188 228.886719 130.488281 234.367188 141.109375 C 236.191406 144.636719 236.175781 146.839844 235.828125 150.710938 C 233.753906 173.84375 243.304688 185.625 255.753906 194.695312 C 265.933594 202.109375 277.699219 207.859375 286.808594 216.121094 C 298.90625 227.09375 304.019531 241.417969 300.695312 257.484375 C 297.574219 272.582031 287.273438 287.023438 273.851562 297.207031 C 280.152344 248.683594 217.898438 241.929688 207.296875 196.8125 C 205.675781 222.195312 220.550781 245.953125 230.550781 270.1875 C 236.179688 283.816406 239.839844 297.609375 238.472656 310.84375 C 235.875 336.039062 214.300781 355.886719 188.992188 356.59375 C 187.996094 356.621094 187 356.621094 186.003906 356.59375 Z M 187.496094 196.828125 C 186.425781 237.300781 149.261719 274.597656 146.347656 309.945312 C 144.441406 333.03125 163.519531 353.222656 186.054688 354.054688 C 187.015625 354.089844 187.976562 354.089844 188.9375 354.054688 C 211.476562 353.222656 230.550781 333.03125 228.648438 309.945312 C 225.730469 274.597656 188.570312 237.300781 187.496094 196.828125 " fill-opacity="1" fill-rule="evenodd"/> </a></g><a href="/"><path fill="#ffffff" d="M 192.167969 101.207031 C 229.480469 102.480469 259.003906 118.925781 259.003906 139.027344 C 259.003906 147.007812 254.347656 154.410156 246.402344 160.515625 C 258.671875 157.605469 268.46875 152.699219 275.144531 145.871094 C 288.574219 132.136719 286.695312 113.324219 280.035156 96.851562 C 274.808594 83.933594 266.300781 71.695312 257.859375 62.761719 C 215.941406 18.394531 159.054688 18.394531 117.136719 62.761719 C 108.695312 71.695312 100.1875 83.933594 94.960938 96.851562 C 88.300781 113.324219 86.421875 132.136719 99.847656 145.871094 C 106.523438 152.699219 116.324219 157.605469 128.59375 160.515625 C 120.648438 154.410156 115.988281 147.007812 115.988281 139.027344 C 115.988281 118.925781 145.511719 102.480469 182.828125 101.207031 C 185.9375 101.097656 189.054688 101.097656 192.167969 101.207031 " fill-opacity="1" fill-rule="evenodd"/></a></svg>

          <h1 className='header-title text-8xl font-extrabold text-center pt-16'>Jelly<span className='Fish'>Fish</span>Development.</h1>

          <p className='text-neutral-400 pt-5 font-normal'>Com você, somos capazes de moldar o futuro digital de forma inovadora e envolvente ✨</p>

          <div className='infinite-looper w-11/12'>
            <InfiniteLooper speed={25} direction="left">
              <LogosTech/>
            </InfiniteLooper>
          </div>

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
          </div>

          <div className='w-1/2 rounded-xl p-10'>
          </div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
        <div className='flex flex-row pb-20'>
          <div className='w-1/2 rounded-xl p-10' >
          
          </div>

          <div className='w-5/6 border rounded-tl-3xl rounded-br-3xl p-10'>
            <h2 className='text-2xl font-bold text-center'>Vamos trabalhar juntos</h2>
            <p className='pt-5 pb-5'>Nós acreditamos no poder da colaboração para criar soluções digitais revolucionárias 🌟 
            <br></br>Se você tem uma visão, nós temos a ferramenta pra te levar além. Venha transformar seus em realidade. </p>
            
            <p className="mb-5"><b><span className='Fish'>Conecte-se</span></b> agora conosco e embarque nesta jornada</p>

              <div className='flex gap-5'>
                
              <a href="/contact" className='font-bold'>
                <button
                  className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
                  Contate-nos
                </button>
              </a>

                <a href="https://github.com/JellyFishDevelopment">
                  <button
                    className="ease-in-out duration-300 hover:scale-105 flex items-center bg-black rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-gray-950 focus:outline-none">
                      <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                      Github
                  </button>
                </a>

                {/* button instagram */}
                <a href="https://www.instagram.com/jellyfishdevelopment/">
                  <button
                    className="ease-in-out duration-300 hover:scale-105 flex items-center bg-pink-800 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-pink-900 focus:outline-none">
                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"></rect><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"></stop><stop offset=".1" stop-color="#FD5"></stop><stop offset=".5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"></stop><stop offset=".128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#60F" stop-opacity="0"></stop></radialGradient></defs></g></svg>
                    Instagram
                  </button>
                </a>
              </div>
          </div>
        </div>
        </motion.div>

        {/* screen 4 - footer */}
        <section className='border-t color-border-footer'>
          <FooterMain/>
        </section>

    <Texture />
    </>
  )
}
