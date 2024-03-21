'use client'
import { RegisterOptions, useForm } from 'react-hook-form';
import React from 'react';
import { TW_COMPONENTS } from '@/utilities/tailwindComponentsClasses';


export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>(
    {mode: "all"}
  );
  const EMAIL_REGEX: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  function onSubmit(data: any) {
    console.log(data)
    console.log(errors)
  };

  const registerOptions: { [key: string]: RegisterOptions } = {
    name: { required: true },
    email: { required: true, pattern: EMAIL_REGEX },
    message: { required: true, }
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-2 '>

        <div className='flex flex-col w-full'>
          <label htmlFor="name">Nom / Prénom</label>
          <input id='name'
            
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
            {errors.email.type==='required' 
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

