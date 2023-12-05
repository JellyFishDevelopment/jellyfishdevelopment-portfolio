import Image from 'next/image'
import logo from '../../public/Logo_Polvo.svg'
import reactlogo from '../../public/svg-tec/reactlogo.svg'
import nextjslogo from '../../public/svg-tec/nextjslogo.svg'
import tslogo from '../../public/svg-tec/tslogo.svg'
import twlogo from '../../public/svg-tec/twlogo.svg'
import jslogo from '../../public/svg-tec/jslogo.svg'
import exlogo from '../../public/svg-tec/exlogo.svg'
import mongodblogo from '../../public/svg-tec/mongodblogo.svg'
import phplogo from '../../public/svg-tec/phplogo.svg'
import postgrelogo from '../../public/svg-tec/postgrelogo.svg'
import mysqllogo from '../../public/svg-tec/mysqllogo.svg'
import pythonlogo from '../../public/svg-tec/pythonlogo.svg'
import dockerlogo from '../../public/svg-tec/dockerlogo.svg'
import githublogo from '../../public/svg-tec/githublogo.svg'
import instagramlogo from '../../public/svg-tec/instagram_logo.svg'
import { Texture } from "@/components/Texture";
import { FooterMain } from "@/components/FooterMain"

export default function Home() {
  return (
    <div>
    <main className="flex flex-col items-center justify-between p-24 font-extrabold">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Picture of a JellyFish"
      />
      <h1 className='header-title text-8xl font-extrabold text-center pt-28'>Jelly<span className='Fish'>Fish</span> Development.</h1>
      <p className='text-zinc-400 text-center font-normal w-7/12 p-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

      <div className='p-10'>
        <button className='botao-projetos-glow absolute text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Projetos</a></button>
        <button className='botao-projetos text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Projetos</a></button>
      </div>

      <h4 className="text-base text-white text-center font-normal mt-8">Desenvolvendo Projetos Inovadores com Tecnologia de Ponta</h4>
      <h2 className="Fish text-6xl leading-tight">Tecnologias</h2>

      <div className='mt-5 grid grid-cols-4 gap-4'>
        <div>
          <Image
            src={reactlogo}
            width={100}
            height={100}
            alt="react logo"
          />
        </div>

        <div>
          <Image
            src={nextjslogo}
            width={100}
            height={100}
            alt="next logo"
          />
        </div>

        <div>
          <Image
            src={tslogo}
            width={100}
            height={100}
            alt="typescript logo"
          />
        </div>

        <div>
          <Image
            src={jslogo}
            width={100}
            height={100}
            alt="javascript logo"
          />
        </div>

        <div>
          <Image
            src={exlogo}
            width={100}
            height={100}
            alt="express logo"
          />
        </div>

        <div>
          <Image
            src={mysqllogo}
            width={100}
            height={100}
            alt="mysql logo"
          />
        </div>

        <div>
          <Image
            src={mongodblogo}
            width={100}
            height={100}
            alt="mongodb logo"
          />
        </div>

        <div>
          <Image
            src={postgrelogo}
            width={100}
            height={100}
            alt="postgre logo"
          />
        </div>

        <div>
          <Image
            src={phplogo}
            width={100}
            height={100}
            alt="php logo"
          />
        </div>

        <div>
          <Image
            src={twlogo}
            width={100}
            height={100}
            alt="tailwind logo"
          />
        </div>

        <div>
          <Image
            src={pythonlogo}
            width={100}
            height={100}
            alt="python logo"
          />
        </div>

        <div>
          <Image
            src={dockerlogo}
            width={100}
            height={100}
            alt="docker logo"
          />
        </div>
      </div>

      <h3 className="text-5xl mt-20 leading-tight">Projetos<span className='Fish'>.</span></h3>

      <h4 className="text-base text-white text-center font-normal mt-3 mb-8">Nossos últimos projetos realizados</h4>

      <div className='grid grid-cols-2 gap-16'>
        <div className='border w-96 h-96 rounded-2xl'>

        </div>

        <div className='border w-12/12 rounded-2xl'>

        </div>
      </div>

      <div className='p-10'>
        <button className='botao-projetos-glow absolute text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Veja mais</a></button>
        <button className='botao-projetos text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Veja mais</a></button>
      </div>

      <div className='border w-full h-96 rounded-2xl'>
          <div className='m-10'>
            <h1>Vamos trabalhar juntos!</h1>
          </div>
            <div className='m-10 font-normal text-sm'>
            <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>

          <div className="flex gap-10">
            <div>
              <button className='mt-10 ml-10 text-black py-3 px-10 bg-white rounded-lg'><a href="#" className='text-sm font-extrabold'>Contate-nos</a></button>
            </div>

            <div>

              <a href="#">
                <Image
                  className="mt-11"
                  src={githublogo}
                  width={40}
                  height={40}
                  alt="github logo"
                />
              </a>
            </div>

            <div>
              <a href="#">
                <Image
                  className="mt-11"
                  src={instagramlogo}
                  width={40}
                  height={40}
                  alt="instagram logo"
                />
              </a>

            </div>
          </div>
      </div>

      {/* SOBRE NÓS */}
      <div className='border w-full h-full rounded-2xl mt-10'>
          <div className='m-10'>
            <h1 className='text-center'>Sobre nós</h1>
          </div>
            <div className='m-10 font-normal text-sm'>
            <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>

       <FooterMain
          
       />

    </main>
    <Texture />
    </div>
  )
}
