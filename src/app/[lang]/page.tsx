"use client";
import Image from "next/image";
import logo from "../../public/jellyfishlogo.svg";
import logo_footer from "../../../public/jellyfish_footer.svg"
import { Texture } from "@/components/Texture";
import InfiniteLooper from '@/components/infinite-looper'
import { motion } from 'framer-motion'
import { ChevronDownIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Eye, Mail } from 'lucide-react';
import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Cards from "@/components/cards";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export default function Home({ params }: { params: { lang: Locale } }) {
  // const dict = getDictionaryServerOnly(params.lang)
  const dict = getDictionaryUseClient(params.lang)
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
  }, []);
  return (
    <>
      {/* screen 1 - title */}
      <section className="flex justify-center flex-col items-center font-extrabold pt-16">

        <h1 className="select-none header-title font-extrabold max-[425px]:text-xl max-[768px]:text-3xl text-8xl text-center pt-16">
          Jelly<span className="Fish">Fish</span><span className="text-4xl">.dev</span>
        </h1>

        <p className="text-neutral-400 pt-5 font-normal max-[768px]:text-sm max-[768px]:text-center">
          {dict.site.page.home.screen1.slogan}
        </p>

        {!isMobile ? (
          <div className="infinite-looper min-w-0 max-w-screen-xl">
            <InfiniteLooper>
            </InfiniteLooper>
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-row gap-4 mt-10">
          <a href={`/${params.lang}/projects`}>
            <Button>{dict.site.page.home.screen1.ourServicesButton}</Button>
          </a>
          <a href="https://github.com/JellyFishDevelopment">
            <Button variant={"outline"} className="hover:text-white">
              <GitHubLogoIcon className="w-4 h-4 mr-2" />
              {dict.site.common.github}
            </Button>
          </a>
        </div>
        <div className="pt-12">
          <a href="#projetos">
            <Button variant={"ghost"} className="hover:text-white">
              {dict.site.page.home.screen1.moreButton}
              <ChevronDownIcon strokeWidth={0.75} className="animate-bounce ml-2" />
            </Button>
          </a>
        </div>

      </section>

      {/* screen 2 - projects */}
      <section id="projetos" className='pt-36 flex flex-col items-center justify-center font-extrabold'>
        <h3 className="text-5xl leading-tight">{dict.site.common.projects}<span className='Fish select-none'>.</span></h3>

        <h4 className="text-base text-muted text-center font-normal mt-3 mb-8">{dict.site.page.home.screen2.lastProjects}</h4>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >

          <div className='grid grid-cols-2'>
          </div>

          {/* Cards */}
          <Cards params={{ lang: params.lang }} />


          <div className='pt-10 pb-32 flex justify-center'>
            <a href={`/${params.lang}/projects`} className='text-white text-2xl font-extrabold ease-in-out duration-300 hover:scale-105'>
              <Button className="w-80">
                <Eye strokeWidth={1} className="mr-2" />
                {dict.site.page.home.screen2.moreButton}
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* screen 3 - about and contact */}
      <div className='flex flex-row'>

        <div className='ml-12 w-5/6 border rounded-bl-3xl rounded-tr-3xl p-10 backdrop-blur-xl'>
          <h1 className='text-2xl font-bold text-center'>{dict.site.page.home.screen3.about.title}</h1>
          <p className='pt-5 ' dangerouslySetInnerHTML={{ __html: dict.site.page.home.screen3.about.body }}></p>

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

          <p className='mt-3 text-center' dangerouslySetInnerHTML={{ __html: dict.site.page.home.screen3.about.footer }}></p>

          <a href="/about" className='font-bold justify-center flex flex-row mt-5'>
            <button
              className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
              {dict.site.page.home.screen3.about.button}
            </button>
          </a>

        </div>

        <div className='w-1/2 rounded-xl p-10'>
        </div>

      </div>



      <div className="mr-12 flex flex-row pt-20 pb-20">
        {!isMobile ? <div className="w-1/2 rounded-xl p-10"></div> : <></>}

        <div className="w-5/6 border max-[768px]:mx-auto max-[768px]:rounded-3xl rounded-tl-3xl rounded-br-3xl p-10 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-center">
            {dict.site.page.home.screen3.workTogether.title}
          </h2>
          <p className="pt-5 pb-5" dangerouslySetInnerHTML={{ __html: dict.site.page.home.screen3.workTogether.body }}></p>

          <p className="mb-5" dangerouslySetInnerHTML={{ __html: dict.site.page.home.screen3.workTogether.footer }}></p>

          <div className="flex max-[768px]:flex-col gap-5">
            <a href="/contact" className="font-bold">
              <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
                <Mail size={16} className="mr-2" />
                {dict.site.page.home.screen3.workTogether.button}
              </button>
            </a>

            <a href="https://github.com/JellyFishDevelopment">
              <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-black rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-gray-950 focus:outline-none">
                <GitHubLogoIcon className="mr-2" />

                {dict.site.common.github}
              </button>
            </a>

            {/* button instagram */}
            <a href="https://www.instagram.com/jellyfishdevelopment/">
              <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-pink-800 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-white hover:bg-pink-900 focus:outline-none">
                <InstagramLogoIcon className="mr-2" />
                {dict.site.common.instagram}
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
            alt="Jellyfish"
          />
        </div>

      </section>

      <Texture />
      <div className="w-full"></div>
    </>
  );
}
