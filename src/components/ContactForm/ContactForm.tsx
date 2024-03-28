'use client';
import { RegisterOptions, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));
import styles from './ContactForm.module.scss';
import dynamic from 'next/dynamic';

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

  const { register, reset, handleSubmit, formState: { errors } } = useForm<ContactFormValues>(
    { mode: "all" }
  );
  const EMAIL_REGEX: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const registerOptions: { [key: string]: RegisterOptions } = {
    name: { required: true },
    email: { required: true, pattern: EMAIL_REGEX },
    message: { required: true, }
  };
  const formStatuses = {
    NOTHING: 'no_status',
    SENDING: 'sending',
    SENT: 'sent',
    NOT_SENT: 'not_sent'
  }
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
  const [formStatus, setFormStatus] = useState(formStatuses.NOTHING);
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);

  async function onSubmit(data: ContactFormValues) {
    setFormStatus(formStatuses.SENDING)
    emailjs.sendForm(props.serviceId, props.templateId, '#contactForm')
      .then(() => {
        setFormStatus(formStatuses.SENT)
        setTimeout(() => {
          reset()
          setFormStatus(formStatuses.NOTHING)
          //@ts-ignore
          window.grecaptcha.reset();
        }, 1000)

      })
      .catch((e) => setFormStatus(formStatuses.NOT_SENT));
  };

  function onChange(value: any) {
    setIsCaptchaSuccess(true);
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
    });
    setRecaptchaNeeded(true);
  }, []);

  return (

    <form id='contactForm' className='py-4' onSubmit={handleSubmit(onSubmit)}>

      <div className='flex flex-col md:flex-row gap-2 '>

        <div className='flex flex-col w-full'>
          <label className={styles.required + " text-my-black "} htmlFor="name">Nom / Prénom</label>
          <input id='name'
            required={true} aria-required={true}
            aria-invalid={errors.name ? "true" : "false"}
            className={'formField'}
            type="text" placeholder="Nom / Prénom"
            {...register("name", registerOptions.name)} />
          {errors?.name &&
            <small className={'errorText'}>
              Sans nom, comment te reconnaître ?
            </small>}
        </div>

        <div className='flex flex-col w-full'>
          <label className={styles.required + " text-my-black "} htmlFor="email">Email</label>
          <input id='email' type="email"
            aria-invalid={errors.email ? "true" : "false"}
            className={'formField'}
            placeholder="Email"
            {...register("email", registerOptions.email)} />
          {errors.email
            &&
            <small className={'errorText'}>
              {errors.email.type === 'required'
                ? 'Quelle est ton adresse, noble internaute ?'
                : 'Format d\'email invalide'}
            </small>}
        </div>
      </div>

      <div className='flex flex-col'>
        <label className={styles.required + " text-my-black "} htmlFor="message">Message</label>
        <textarea
          id='message'
          aria-invalid={errors.message ? "true" : "false"}
          className={'formField min-h-[100px]'}
          {...register("message", registerOptions.message)} />
        {errors.message &&
          <small className={'errorText'}>
            Les messages vides volent moins loin que les autres !
          </small>}
      </div>



      {
        recaptchaNeeded &&
        <div className='flex justify-center'>
          <ReCAPTCHA 
            className='my-4'
            onChange={onChange}
            sitekey={props.sitekey} />
        </div>
      }

      <div className='flex flex-col gap-4'>
        <div className='flex justify-center'>
          <input
            role='button'
            value={'Envoyer'}
            disabled={!isCaptchaSuccessful}
            type="submit"
            className={(isCaptchaSuccessful ? 'button' : 'buttonDisabled') + ' ' + ' my-4 '} />
        </div>
        <div className='flex justify-center'>
          {formStatus === formStatuses.SENT &&
            <small className={'alertSuccess'}>Le formulaire a bien été envoyé !</small>
          }
          {formStatus === formStatuses.NOT_SENT &&
            <small className={'alertError'}>Une erreur est survenue. Recharge la page puis essaie à nouveau. Si cela bug encore, contacte-moi sur les réseaux sociaux.</small>
          }
          {formStatus === formStatuses.SENDING &&
            <small className={'alertPending flex justify-center'}>
              Le formulaire voyage sur la toile
              <div className={styles.one}>.</div>
              <div className={styles.two}>.</div>
              <div className={styles.three}>.</div>
            </small>

          }
        </div>
      </div>
    </form>
  )
};



