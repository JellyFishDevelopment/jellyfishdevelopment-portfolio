import Image from 'next/image'
import logo from '../../public/Logo_Polvo.svg'
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
    </main>
    <Texture />
    </div>
  )
}
