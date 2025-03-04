import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import { projectsData } from '../../jsonfiles/Data'

const Projects = () => {
    return (
        <section id='project' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Featured Projects</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {projectsData?.map((items, index) => {
                            return (
                                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    <h3 className='text-xl font-bold mb-2'>{items?.title}</h3>
                                    <p className='text-gray-400 mb-4'>{items.description}</p>
                                    <h4 className='font-bold mb-2'> 💻 Technologies</h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {items.tech?.map((tech, key) => {
                                            return (
                                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                                    {tech}
                                                </span>
                                            )
                                        })}
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <a href={items.link} target='blank' className='text-blue-400 hover:text-blue-300'>View Projects &rarr;</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Projects