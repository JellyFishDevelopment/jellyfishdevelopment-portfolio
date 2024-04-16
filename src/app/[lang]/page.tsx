"use client";
import { Texture } from "@/components/texture";
import InfiniteLooper from "@/components/infinite-looper";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Eye, Mail } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Cards from "@/components/cards";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { AboutSection } from "@/components/about-section";

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
          Jelly<span className="Fish">Fish</span>
          <span className="text-4xl">.dev</span>
        </h1>

        <p className="text-neutral-400 pt-5 font-normal max-[768px]:text-sm max-[768px]:text-center">
          {dict.site.page.home.screen1.slogan}
        </p>

        {!isMobile ? (
          <div className="infinite-looper min-w-0 max-w-5xl">
            <InfiniteLooper></InfiniteLooper>
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
              Conheça mais do nosso trabalho
              <ChevronDownIcon
                strokeWidth={0.75}
                className="animate-bounce ml-2"
              />
            </Button>
          </a>
        </div>

      </section>

      {/* screen 2 - projects */}
      <section
        id="projetos"
        className="pt-36 flex flex-col items-center justify-center font-extrabold"
      >
        <h3 className="text-5xl leading-tight">
          {dict.site.common.projects}<span className="Fish select-none">.</span>
        </h3>

        <h4 className="text-base text-muted text-center font-normal mt-3 mb-8">{dict.site.page.home.screen2.lastProjects}</h4>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-2"></div>

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
      <AboutSection params={{ lang: params.lang }}/>

      <div className="mr-12 mt-32 flex flex-col pb-20 text-center w-full bg-gradient-to-t from-black to-transparent">
        {!isMobile ? <div className="w-1/2 rounded-xl p-10"></div> : <></>}

        <h1 className="text-7xl font-bold text-center">
          {dict.site.page.home.screen3.workTogether.title}
        </h1>
        <p className="pt-5 pb-5 text-xl" dangerouslySetInnerHTML={{__html: dict.site.page.home.screen3.workTogether.body}}></p>


        <p className="mb-5 text-xl"  dangerouslySetInnerHTML={{__html: dict.site.page.home.screen3.workTogether.footer}}></p>

        <div className="flex max-[768px]:flex-col gap-5 text-center justify-center">
          <a href={`/${params.lang}/contact`} className="font-bold">
            <button className="ease-in-out duration-300 hover:scale-105 flex items-center bg-white rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 focus:outline-none">
              <Mail size={16} className="mr-2" />
              {dict.site.page.home.screen3.workTogether.button}
            </button>
          </a>
        </div>
      </div>
      <Texture />
      <div className="w-full"></div>
    </>
  );
}
