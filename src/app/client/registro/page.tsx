"use client";
import YourFormComponent from '@/components/ContactForm'
import React from 'react'
import BgPizza from "../../../../public/HD-wallpaper-pizza-neon-dark.jpg"
import Image from 'next/image';
import { useauthContext } from '@/context/authContext';

const Registro = () => {
  const { value, updateValue } = useauthContext();

  return (
    <div className='w-full flex justify-center mt-[80px]'>
      <section className='shadow-2xl bg-white h-auto flex w-auto'>
        <YourFormComponent/>
        {value}
        <div className='bg-black flex items-center justify-center w-[470px]'>
          <Image className='w-full h-auto' src={BgPizza} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Registro