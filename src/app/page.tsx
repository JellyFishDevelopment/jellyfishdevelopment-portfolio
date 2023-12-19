import Image from 'next/image'
import logo from '../../public/Logo_Polvo.svg'
import githublogo from '../../public/svg-tec/githublogo.svg'
import instagramlogo from '../../public/svg-tec/instagram_logo.svg'
import { Texture } from "@/components/Texture";
import { FooterMain } from "@/components/FooterMain"
import sdsWikiProject from "../../public/sds-wiki.png"
import jmSiteProject from "../../public/jm-eletrica.png"
import InfiniteLooper from '@/components/InfiniteLooper'
import LogosTech from '@/components/LogosTech'
import astrologo from '../../public/svg-tec/astrologo.svg'
import tslogo from '../../public/svg-tec/tslogo.svg'
import twlogo from '../../public/svg-tec/twlogo.svg'
import mdlogo from '../../public/svg-tec/markdownlogo.svg'
import reactlogo from '../../public/svg-tec/reactlogo.svg'
import vitelogo from '../../public/svg-tec/vitelogo.svg'
import jslogo from '../../public/svg-tec/jslogo.svg'

export default function Home() {
  return (
    <>
        {/* screen 1 - title */}
        <section className='flex flex-col items-center p-14 font-extrabold'>

          <Image
            src={logo}
            width={100}
            height={100}
            alt="Picture of a JellyFish"
          />

          <h1 className='header-title text-8xl font-extrabold text-center pt-16'>Jelly<span className='Fish'>Fish</span>Development.
          </h1>

          <p className='text-neutral-400 pt-5 font-normal'>Com você, somos capazes de moldar o futuro digital de forma inovadora e envolvente ✨</p>

          <div className='infinite-looper w-11/12'>
            <InfiniteLooper speed={25} direction="left">
              <LogosTech/>
            </InfiniteLooper>
          </div>


          <div className='p-10'>

            <button className='rounded-3xl border-2 px-20 py-5 btn1'>
              <a href="#" className='text-white text-2xl font-extrabold'>Projetos</a>
            </button>

          </div>

        </section>

        {/* screen 2 - projects */}
        <section className='h-screen flex flex-col items-center justify-center font-extrabold'>
          <h3 className="text-5xl mt-20 leading-tight">Projetos<span className='Fish'>.</span></h3>

          <h4 className="text-base text-white text-center font-normal mt-3 mb-8">Nossos últimos projetos realizados</h4>

          <div className='grid grid-cols-2 gap-16'>

            <div className='hover:backdrop-blur-sm hover:backdrop-brightness-150 hover:cursor-pointer ease-in-out duration-300 border p-5 rounded-2xl max-w-xl'>
              <Image 
                className='rounded-lg'
                src={sdsWikiProject}
                height={600}
                width={600}
                alt="sds wiki project"
              />
            <p className='text-2xl p-3'>SDS Wiki</p>

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

            <div className='hover:backdrop-blur-sm hover:backdrop-brightness-150 hover:cursor-pointer ease-in-out duration-300 border p-5 rounded-2xl max-w-xl'>
              <Image 
                className='rounded-lg'
                src={jmSiteProject}
                height={600}
                width={600}
                alt="jm eletrica project"
                />
              <p className='text-2xl p-3'>JM Elétrica</p>
            <p className='font-normal p-3 mb-11'>Site institucional sobre elétrica e soluções em energia, usando API de envio de e-mail, baseado em React.</p>

            <div className='grid grid-cols-7 mt-5'>
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
                    src={tslogo}
                    width={40}
                    height={40}
                    alt="TS logo"
                  />
              </div>

              <div className='transition ease-in-out duration-500 react-logo hover:-translate-y-2'>
                <Image
                  src={jslogo}
                  width={40}
                  height={40}
                  alt="js logo"
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
                  alt="vite logo"
                />
              </div>

            </div>
            </div>
          </div>

          <div className='p-10'>

            <button className='rounded-3xl border-2 px-20 py-5 btn1'>
              <a href="#" className='text-white text-2xl font-extrabold'>Veja mais</a>
            </button>

          </div>
        </section>
        
        {/* screen 3 - work together */}
        <section className='sm:pt-32 2xl:pt-0 flex flex-col items-center justify-center font-extrabold'>
          <div className='lets_work_logo backdrop-blur-sm backdrop-brightness-150 hover:text-primary ease-in-out duration-300 rounded-2xl border w-full 2xl:w-10/12'>
              <div className='m-10'>
                <h1 className='text-3xl'>Vamos trabalhar juntos!</h1>
              </div>
                <div className='m-10 font-normal text-xl grid'>

                <div className='text-left'>
                  <p className='w-7/12 xl:w-9/12 2xl:w-10/12'>Se você possui uma visão, nós oferecemos a ferramenta necessária para transformar suas ideias em realidade. Conecte-se a nós e embarque nessa jornada conjunta.
                  </p>
                </div>
              </div>

              <div className="flex gap-10">
                <div>
                  <button className='contate-nos-btn ease-in-out duration-300 mb-10 ml-10 text-white py-3 px-10 bg-rose-200 rounded-lg'><a href="mailto:jellyfishdevelop@gmail.com?subject=Olá, eu gostaria de entrar em contato com vocês!" className='font-bold text-l font-extrabold'>Contate-nos</a></button>
                </div>

                <div>
                  <a href="https://github.com/JellyFishDevelopment" target="_blank">
                    <Image
                      src={githublogo}
                      width={40}
                      height={40}
                      alt="github logo"
                    />
                  </a>
                </div>

                <div>
                  <a href="https://www.instagram.com/jellyfishdevelopment/" target="_blank">
                    <Image
                      src={instagramlogo}
                      width={40}
                      height={40}
                      alt="instagram logo"
                    />
                  </a>
                </div>
              </div>

          </div>
        </section>

        {/* screen 4 - about */}
        <section className='h-screen flex flex-col items-center justify-center font-extrabold'>

          <div className='hover:backdrop-brightness-150 hover:backdrop-blur-sm ease-in-out duration-300 border rounded-3xl mt-10'>
            <div className='m-10'>
              <h1 className='text-center text-2xl'>Sobre nós</h1>
              <p className='text-center'>Moldando o novo futuro da tecnologia</p>
            </div>

              <div className='m-10 font-normal text-m'>
                <div>
                  <p className='text-center'>Na <b>Jelly<span className='Fish'>Fish</span> Development</b>, somos mais do que uma desenvolvedora de softwares; somos arquitetos digitais dedicados a transformar suas ideias em soluções inovadoras. Com uma abordagem ágil e comprometimento com a excelência, oferecemos serviços de desenvolvimento web e mobile personalizados. Na vanguarda da tecnologia, estamos prontos para levar sua visão ao próximo nível. Conecte-se conosco e embarque na jornada da <span className='Fish'><b>transformação</b></span> digital.</p>
                </div>
              </div>
          </div>

        </section>

        {/* screen 5 - footer */}
        <section className='border-t color-border-footer'>
          <FooterMain/>
        </section>

    <Texture />

    </>
  )
}
