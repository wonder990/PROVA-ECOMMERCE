"use client";
import YourFormComponent from '@/components/ContactForm'
import React from 'react'
import logo from "../../../../public/logoProvaWhite.png"
import Image from 'next/image';

const Registro = () => {
  return (
    <div className='w-full flex justify-center'>
      <section className='bg-white h-[600px] mt-[100px] flex w-[60%]'>
        <YourFormComponent/>
        <div className='bg-black flex items-center justify-center w-1/2'>
          <Image className='w-auto h-[200px]' src={logo} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Registro