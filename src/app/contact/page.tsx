import Image from 'next/image'
import logo from '../../../public/Logo_Polvo.svg'
import { Texture } from "@/components/Texture";
import { FooterMain } from "@/components/FooterMain"

export default function Page() {
  return (
    <>
      {/* screen 1 - title */}
      <section className='flex flex-col items-center font-extrabold pt-16'>

        <Image
          src={logo}
          width={100}
          height={100}
          alt="Picture of a JellyFish"
        />

        <h1 className='header-title text-6xl font-extrabold text-center pt-16'>Contato<span className='Fish'>.</span></h1>
        <h1 className='font-normal w-auto text-slate-200'>Alguma descrição super séria.</h1>
      </section>

      <div className='flex justify-center py-12'>
        <section className='bg-black px-20 py-10 border rounded-3xl w-4/6'>
          {/* Formulário de E-mail */}
          <div className='email-form'>
            <form action="#" method='POST' className='flex flex-col'>
              <label>Seu e-mail de contato:</label>
              <input type="text" className='bg-black p-3 border rounded-xl' placeholder='Digite seu e-mail aqui.'/>
            </form>
          </div>

          {/* Formulário de Assunto*/}
          <div className='assunto-form'>
            <form action="#" method='POST' className='flex flex-col'>
              <label className='pt-5'>Assunto:</label>
              <input type="text" className='bg-black p-3 border rounded-xl' placeholder='Digite o assunto aqui.'/>
            </form>
          </div>

          {/* Formulário de Texto*/}
          <div className='texto-form'>
            <form action="#" method='POST' className='flex flex-col'>
              <label className='pt-5'>Texto:</label>
              <textarea className='border rounded-xl bg-black p-3' id="" cols={30} rows={10} placeholder='Digite o texto aqui.'></textarea>
            </form>
          </div>
          <div className='text-center pt-10'>
            <button className='rounded-3xl border-2 px-20 py-5 btn1'>
              <a href="#" className='text-white text-2xl font-extrabold'>Enviar</a>
            </button>
          </div>
        </section>

      </div>
      <Texture />
      {/* screen 4 - footer */}
      <section className='border-t color-border-footer'>
        <FooterMain/>
      </section>
    </>
  )
}