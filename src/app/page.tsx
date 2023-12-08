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
import sdsWikiProject from "../../public/sds-wiki.png"

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
          <button className='botao-projetos-glow absolute text-white hover:bg-gray-900 focus:outline-none focus:rinwg-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Projetos</a></button>
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

        <div className='flex gap-16'>
          <div className='border p-5 h-96 rounded-2xl'>
            <Image 
            src={sdsWikiProject}
            height={300}
            width={300}
            alt="sds wiki project"
            />

          </div>

          <div className='border w-12/12 rounded-2xl'>

          </div>
        </div>

        <div className='p-10'>
          <button className='botao-projetos-glow absolute text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Veja mais</a></button>
          <button className='botao-projetos text-white hover:bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-24 py-5 me-2 mb-2'><a href="#" className='text-2xl font-extrabold'>Veja mais</a></button>
        </div>

        <div className='border w-full max-h-full rounded-2xl'>
            <div className='m-10'>
              <h1 className='text-2xl'>Vamos trabalhar juntos!</h1>
            </div>
              <div className='m-10 font-normal text-m'>
              <div className='text-center'>
                <p>Na <b>Jelly<span className='Fish'>Fish</span> Development</b>, acreditamos no poder da colaboração para criar soluções digitais excepcionais. 
                </p>
                
                <p className='mb-4'>Oferecemos não apenas serviços, mas uma jornada colaborativa. Estamos comprometidos em entender suas necessidades e superar suas expectativas. Seja um projeto de desenvolvimento web, aplicativos móveis personalizados ou consultoria em transformação digital, estamos prontos para enfrentar desafios e alcançar resultados excepcionais.</p>

                <hr />
                <p className='mt-4'>
                Se você tem uma visão, nós temos a ferramenta. Venha conosco transformar suas ideias em realidade.</p>
                <p><span className='Fish'><b>Conecte-se</b></span> conosco e embarque nesta jornada.</p>

              </div>

            </div>

            <div className="flex gap-10">
              <div>
                <button className='mb-10 ml-10 text-black py-3 px-10 bg-white rounded-lg'><a href="mailto:jellyfishdevelop@gmail.com?subject=Olá, eu gostaria de entrar em contato com vocês!" className='text-sm font-extrabold'>Contate-nos</a></button>
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

        {/* SOBRE NÓS */}
        <div className='border w-full h-full rounded-3xl mt-10'>
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
          

        <FooterMain
            
        />

      </main>
    <Texture />
    </div>
  )
}
