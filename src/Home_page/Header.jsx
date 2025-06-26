import React, { useState } from 'react'
import Logo from '../assets/Images/aceilWhite.svg'
import Pages from './Pages'



export default function Header() {
    const [hamburger, setHamburger]= useState(false)

    const toggleHamburger = () => {
        setHamburger(!hamburger) 
    } 

    const menu= <svg onClick={toggleHamburger} xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20"><path fill="#fff" d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/></svg>
    const cancel= <svg onClick={toggleHamburger} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#fff" fill-rule="evenodd" d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"/></svg>


    return (
        <header className='outside sticky top-0 right-0 bg-bgblur backdrop-blur-[10px]'>
            <nav className='inside between'>
                <img src={Logo} alt="Logo" className='w-[60px] cursor-pointer'/>

                <div className='flex gap-[10px] justify-center items-center cursor-pointer max-[580px]:hidden'>
                    <Pages others='justify-center items-center gap-[10px]'/>
                </div>

                <div className='hidden max-[580px]:block'>
                    {menu}

                    <div className={`border-r-[1px] border-borderColor border-dashed fixed flex flex-col  gap-[25px] top-0 right-0 h-[100vh] w-full max-w-[300px] z-10 bg-background text-mainText p-Header  
                                    ${hamburger ? 'block' : 'hidden'}`}>
                        {cancel}
                        <Pages others='flex-col gap-[20px] active:text-textAsh1 '/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
