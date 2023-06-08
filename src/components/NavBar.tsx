"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { Roboto, Kanit } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faNavicon  } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  label: string;
  icon: any;
  route: string;
}

interface NavBarProps {
  dataNav: NavItem[];
}

export const NavBar = ({dataNav} : NavBarProps) => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <header className={` relative z-40 flex flex-col md:flex-row items-center justify-between px-[30px] md:px-0 md:justify-around w-full py-[5px] bg-[#000000] opacity-90`}>
      <nav className="flex flex-col md:flex-row justify-around md:justify-between w-full md:w-[55%]">
        <div className='flex justify-between'>
          <Link href="/">
            <Image 
              className='w-[90px] md:w-[110px] h-full hover:scale-110 transition-[0.5s]' 
              src="/../public/logoProva.png" 
              alt=""
              width={200}
              height={100} 
            />
          </Link>
          <button className='md:hidden' onClick={()=>setToggleNav(!toggleNav)}>
            <FontAwesomeIcon className='text-[#ff2d2d] text-[30px]' icon={faNavicon} />
          </button>
        </div>
        <ul className={`${toggleNav ? "h-[200px]" : "h-0"} overflow-hidden md:overflow-visible duration-300 md:h-auto md:px-[30px] md:flex flex-col md:flex-row items-center justify-center md:justify-evenly md:gap-3 w-full md:w-[45%]`}>
          {dataNav.map((element,index)=>(
            <li key={index} className="w-full">
              <Link className='w-full py-[20px] text-white flex items-center justify-center gap-1 hover:scale-110 transition-[0.8s]' href={element.route}>
                <FontAwesomeIcon className='text-[#ff2d2d] w-[25px]' icon={element.icon} />
                {element.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${toggleNav ? "block" : "hidden"} md:flex items-center`}>
        <a className="text-white text-[15px] w-full py-[20px] md:text-[20px] gap-3 flex items-center hover:scale-110 transition-[0.5s]" href="">
          <FontAwesomeIcon className='text-[#ff2d2d] text-[18px]' icon={faPhone} />+591 73835363</a>
      </div>
    </header>
  )
}
