"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xdoqalzy");
  if (state.succeeded) {
    return <p>Mensagem enviada!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        E-mail de contato:
      </label>
      <div className='pt-2 pb-5'>
        <input
          id="email"
          type="email" 
          name="email"
          className='email p-3 border rounded-xl w-full'
          placeholder='Seu melhor e-mail para contatarmos 📧'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <label htmlFor="subject" className='pt-5'>Assunto: </label>
      <div className='pt-2 pb-5'>
        <input
          id="subject"
          type="subject" 
          name="subject"
          className='subject p-3 border rounded-xl w-full'
          placeholder='Diga o nome do seu sonho e por onde ele será realizado ☁️'
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
        />

      </div>
      <label htmlFor="message">Nos diga no que nós podemos te ajudar: </label>
      <div className='pt-2'>
        <textarea
          id="message"
          name="message"
          className='border rounded-xl p-3 resize-none w-full'
          cols={30}
          rows={7}
          placeholder='Nos dê informações sobre suas ideias 💡'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

      </div>

      <div className='text-center pt-10'>
        <a type='submit' className='text-white text-2xl font-extrabold'>
          <button disabled={state.submitting} className='rounded-3xl border-2 px-20 py-5 btn1'>
            Enviar
          </button>
        </a>
      </div>
    </form>
  )
}