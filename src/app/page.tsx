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
import { Texture } from "@/components/Texture";

export default function Home() {
  return (
    <div>
    <main className="flex flex-col items-center justify-between p-24 font-extrabold">
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Picture of a Squid"
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

          <div className="flex">
            <div>
              <button className='m-10 text-black py-3 px-10 bg-white rounded-lg'><a href="#" className='text-sm font-extrabold'>Contate-nos</a></button>
            </div>

            <div>
              <a href="#"><svg className="mt-11"xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg></a>
            </div>

            <div>
              <a href="#"><svg className="ml-9 mt-11" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path></svg></a>

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


    </main>
    <Texture />
    </div>
  )
}
