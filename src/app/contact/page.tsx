import Image from 'next/image'
import logo from '../../../public/jellyfishlogo.svg'
import { Texture } from "@/components/texture";
import { ContactForm } from '@/components/contact-form';

export default function Page() {
  return (
    <>
      {/* screen 1 - title */}
      <section className='flex flex-col items-center font-extrabold pt-10'>

        <a href="#">
          <Image
            src={logo}
            width="80"
            alt="logo"
          />
        </a>


        <h1 className='header-title text-6xl font-extrabold text-center pt-10'>Contato<span className='Fish select-none'>.</span></h1>

        <p className="text-neutral-400 pt-5 font-normal">
          entre em contato agora para te ajudarmos a <strong>acontecer</strong>{" "}
          ❇️
        </p>
      </section>

      <div className='flex justify-center py-10'>
        <section className='card-idealizadores px-20 py-10 border rounded-3xl w-4/6'>
          <ContactForm />
        </section>

      </div>
      <Texture />
    </>
  )
}