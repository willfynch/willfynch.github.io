'use client'
import { RegisterOptions, useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { TW_COMPONENTS } from '@/utilities/tailwindComponentsClasses';
import emailjs from '@emailjs/browser'
//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
export interface ContactFormProps {
  publicKey: string;
  serviceId: string;
  templateId: string;
  sitekey: string;
}
export default function ContactForm(props: ContactFormProps) {

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>(
    { mode: "all" }
  );
  const EMAIL_REGEX: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const recaptchaRef:any = React.createRef();
  const registerOptions: { [key: string]: RegisterOptions } = {
    name: { required: true },
    email: { required: true, pattern: EMAIL_REGEX },
    message: { required: true, }
  };

  async function onSubmit(data:ContactFormValues) {
    try {
      recaptchaRef.current.reset();
      const token = await recaptchaRef.current.executeAsync();
      if(token){
        const apiQuery:any = await fetch(`/api/captcha?response=${token}`)
        const {success} = await apiQuery.json();
        if(success){
          sendFormData(data)
        }else{
          console.log('failed')
        }
        
      }else{
        console.log('no token')
      }
    }catch(error){
        console.log(error)
    }
  };

  const onChange = () => {
    // on captcha change
  }

  const asyncScriptOnLoad = () => {
    console.log('Google recaptcha loaded just fine')
  }

  function sendFormData(data: ContactFormValues) {
    const payload = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    console.log(payload)
    emailjs.sendForm(props.serviceId, props.templateId, '#contactForm')
      .then(() => console.log('ok'))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    emailjs.init({
      publicKey: props.publicKey,
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 20000,
      },
    })
  }, [])

  return (
    <form id='contactForm' className='my-20' onSubmit={handleSubmit(onSubmit)}>

      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        onChange={onChange}
        asyncScriptOnLoad={asyncScriptOnLoad}
        sitekey={props.sitekey}
      />


      <div className='flex flex-col md:flex-row gap-2 '>

        <div className='flex flex-col w-full'>
          <label htmlFor="name">Nom / Prénom</label>
          <input id='name'
            required={true} aria-required={true}
            aria-invalid={errors.name ? "true" : "false"}
            className={TW_COMPONENTS['formField']}
            type="text" placeholder="Nom / Prénom"
            {...register("name", registerOptions.name)} />
          {errors?.name &&
            <small className={TW_COMPONENTS['errorText']}>
              Sans nom, comment te reconnaître ?
            </small>}
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor="email">Email</label>
          <input type="email"

            aria-invalid={errors.email ? "true" : "false"}
            className={TW_COMPONENTS['formField']}
            placeholder="Email"
            {...register("email", registerOptions.email)} />
          {errors.email
            &&
            <small className={TW_COMPONENTS['errorText']}>
              {errors.email.type === 'required'
                ? 'Quelle est ton adresse, noble internaute ?'
                : 'Format d\'email invalide'}
            </small>}
        </div>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="message">Message</label>
        <textarea

          aria-invalid={errors.message ? "true" : "false"}
          className={TW_COMPONENTS['formField'] + ' ' + 'h-[300px]'}
          {...register("message", registerOptions.message)} />
        {errors.message &&
          <small className={TW_COMPONENTS['errorText']}>
            Les messages vides volent moins loin que les autres !
          </small>}
      </div>



      <input type="submit" className={TW_COMPONENTS['buttonBrown'] + ' my-4 '} />
    </form>
  );
};

