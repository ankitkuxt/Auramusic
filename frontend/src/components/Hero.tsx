import React from 'react'
import { FiSearch } from "react-icons/fi";
import Sidebar from './ui/Sidebar';
import Home from '@/app/main/page';
import Player from './ui/Player';
import ToasterProvider from '@/providers/ToasterProvider';
import ModalProvider from '@/providers/ModalProvider';

interface HeroProps {
  children: React.ReactNode;

}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className='h-[625px] flex flex-row bg-black'>
    <ToasterProvider />
    <ModalProvider/>
      <Sidebar>
      {children}
      </Sidebar>
      <div className='flex flex-col w-[1210px] h-[620px]'>
        <Home />
        <Player />
      </div>
      
    </div>
  )
}

export default Hero