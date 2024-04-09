"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Locale } from '@/config/i18n.config';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { Button } from "@/components/ui/button";

export function ContactForm({ params }: { params: { lang: Locale } }) {
  const [state, handleSubmit] = useForm("xdoqalzy");
  const dict = getDictionaryUseClient(params.lang)

  if (state.succeeded) {
    return <p>{dict.site.component.contactForm.alert}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        {dict.site.component.contactForm.email}
      </label>
      <div className='pt-2 pb-5'>
        <input
          id="email"
          type="email"
          name="email"
          className='email p-3 border rounded-xl w-full'
          placeholder={dict.site.component.contactForm.emailPlaceholder}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <label htmlFor="subject" className='pt-5'>{dict.site.component.contactForm.subject}</label>
      <div className='pt-2 pb-5'>
        <input
          id="subject"
          type="subject"
          name="subject"
          className='subject p-3 border rounded-xl w-full'
          placeholder={dict.site.component.contactForm.subjectPlaceholder}
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />

      </div>
      <label htmlFor="message">{dict.site.component.contactForm.message}</label>
      <div className='pt-2'>
        <textarea
          id="message"
          name="message"
          className='border rounded-xl p-3 resize-none w-full'
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

      <div className="text-center pt-12">
          <a type='submit' className='text-white text-2xl font-extrabold'>
            <Button variant={"ghost"} className="hover:text-white" disabled={state.submitting}>
                {dict.site.component.contactForm.submitButton}
            </Button>
          </a>
        </div>

    </form>
  )
}