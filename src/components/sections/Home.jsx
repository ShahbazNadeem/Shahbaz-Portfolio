import React from 'react'

const Home = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center relative'>
            <div className="text-center z-10 px-4">
                <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right'>
                    Hi, I'am Shahbaz
                </h1>
                <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                    I’m a full-stack developer who loves crafting clean, scalable web
                    applications. My goal is to build solutions that offer both
                    exceptional performance and a delightful user experience.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Contact
                    </a>

                </div>
            </div>

        </section>
    )
}

export default Home