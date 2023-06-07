"use client";
import { useEffect, useState } from 'react';
import { getImageUrl } from '@/utils/getImageURL';
import { Lobster, Noto_Serif } from 'next/font/google'
import logo from "/public/logoProvaWhite.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone  } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import './globals.css';

const fontNav = Lobster({ weight: "400", subsets: ["latin"]  })
const fontTitle = Noto_Serif({ weight: "400", subsets: ["latin"]  })

export default function Home() {
  const [bgImage, setBgImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevImage) => (prevImage + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bgImageUrl = getImageUrl(bgImage);

  return (
    <main className={`absolute top-0 z-10 h-screen bg-image overflow-y-scroll`} style={{ backgroundImage: `url(${bgImageUrl})` }}>
      <section className='flex justify-center items-center bg-black/20 h-full'>
        <article className='flex flex-col rounded-full h-[700px] w-[700px] mt-[100px]  p-[100px] text-center items-center justify-center text-white bg-black/60'>
          <h1 className={`${fontNav.className} text-[30px] flex items-center flex-col`}><Image className='animate-bounce w-[350px]' src={logo} alt='logo'></Image> Bienvenido a nuestra pizzería</h1>
          <p className='text-[18px]'>Descubre nuestras exquisitas pizzas artesanales, preparadas con los mejores ingredientes.</p>
          <p className='text-[18px]'> ¡Deliciosos quesos fundidos, sabrosas salsas y una amplia variedad de coberturas te esperan!</p>
          <p className='text-[18px]'>¡Ordénala hoy mismo!</p>
        </article>
      </section>
      <section className='bg-[#969696]/90 h-screen w-full flex items-center justify-center'>
        <div className='bg-[#969696] w-[70%] flex justify-between gap-1'>
          <section className={`${fontTitle.className} bg-white w-1/2 p-[50px] text-center font-serif`}>
            <h3 className="text-[#c99830] text-[50px] font-bold">Horario y Ubicación</h3>
            <p className='text-[#3f3f3f] border-b-4 py-[20px] text-[25px] font-normal'>Lunes a Domingo: 12:00-16:00 / 19:00-0:00</p>
            <div className='flex flex-col tracking-wider gap-2 font-semibold text-[#969696] p-[30px] font-sans text-[15px]'>
              <p>Calles Caro y 6 de agosto</p>
              <p><FontAwesomeIcon  className='w-[20px]' icon={faPhone} />+591 73835363</p>
              <p>prova@pizzeria.es</p>
            </div>
          </section>
          <section className='w-1/2 h-[700px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d948.8075521393677!2d-67.10736754387034!3d-17.96802352481247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1685753388283!5m2!1ses-419!2sbo" width="100%" height="100%" loading="lazy"></iframe>
          </section>
          </div>
      </section>
    </main>
  );
}

