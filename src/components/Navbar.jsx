import React, { useEffect } from 'react'
import Copybutton from './ui/copybutton/Copybutton'

const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        <nav className='fixed top-0 w-full z-40 bg-[#0A0A0ACC] backdrop-blur-lg border-b border-white/10 shadow-lg'>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className='font-mono text-xl font-bold text-white'>
                        Shahbaz<span className='text-blue-500'>.Dev</span>
                    </a>

                    {!menuOpen &&
                        <div className={`w-7 h-5 cursor-pointer relative z-40 md:hidden`}
                            onClick={() => setMenuOpen((prev) => !prev)}>
                            &#9776;
                        </div>
                    }

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className='text-gray-300 hove:text-white transition-colors'>Home</a>
                        <a href="#about" className='text-gray-300 hove:text-white transition-colors'>About</a>
                        <a href="#project" className='text-gray-300 hove:text-white transition-colors'>Projects</a>
                        <a href="#contact" className='text-gray-300 hove:text-white transition-colors'>Contact</a>
                        <Copybutton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar