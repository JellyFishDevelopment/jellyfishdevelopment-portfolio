"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { Button } from './ui/button';
import { Forward } from 'lucide-react';

export function ContactForm({ params }: { params: { lang: Locale } }) {
  const [state, handleSubmit] = useForm("xdoqalzy");
  const dict = getDictionaryUseClient(params.lang)

  if (state.succeeded) {
    return <p>{dict.site.component.contactForm.alert}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className='font-bold'>
        {dict.site.component.contactForm.email}
      </label>
      <div className='pt-2 pb-5'>
        <input
          id="email"
          type="email"
          name="email"
          className='email p-2 border border-jelly_light rounded-lg w-full bg-jelly'
          placeholder={dict.site.component.contactForm.emailPlaceholder}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <label htmlFor="subject" className='pt-5 font-bold'>{dict.site.component.contactForm.subject}</label>
      <div className='pt-2 pb-5'>
        <input
          id="subject"
          type="subject"
          name="subject"
          className='subject p-2 border border-jelly_light bg-jelly rounded-lg w-full'
          placeholder={dict.site.component.contactForm.subjectPlaceholder}
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />

      </div>
      <label htmlFor="message" className='font-bold'>{dict.site.component.contactForm.message}</label>
      <div className='pt-2'>
        <textarea
          id="message"
          name="message"
          className='border border-jelly_light rounded-lg p-2 bg-jelly resize-none w-full'
          cols={30}
          rows={7}
          placeholder={dict.site.component.contactForm.messagePlaceholder}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

      </div>

      <a href={`/${params.lang}/projects`}>
      </a>
      <div className='text-center pt-4'>
        <a type='submit' className='text-white'>
          <Button className='w-72 text-lg font-regular'>
            <Forward className='mr-2' strokeWidth={1}/>
            {dict.site.component.contactForm.submitButton}
          </Button>
        </a>
      </div>
    </form>
  )
}