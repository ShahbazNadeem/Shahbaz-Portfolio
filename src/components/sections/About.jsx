import React from 'react'
import { RevealOnScroll } from './../RevealOnScroll';

const About = () => {
    const frontendSkills = [
        "React js",
        "Next js",
        "Vite",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "Bootstrap",
    ];
    const backendSkills = ["Node.js", "MongoDB", "Express js", "JavaScript", "TypeScript",];
    const databaseManagementSkills = [" MySQL", "MongoDB"];
    const APIIntegration = ["RESTful APIs", " REST", "FastAPI"];
    const AIIntegration = ["Open AI", "Claude", "Gemini", "ChatGPT", "Llama"];
    const VersionControl = ["Git", "GitHub"];
    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>

                    <div className="rounded-xl p-8 border-white/10 border-[2px] hover:-translate-y-1 transition-all">
                        <p className='text-gray-300 mb-6'>Passionate developer with expertise in building scalable web applications and creating innovative solutions.</p>
                        <p className='text-gray-300 mb-6'>
                            ✅ 4+ years of experience <br />
                            ✅ Excelling in delivering Fortune 500-scale projects<br />
                            👌🏻 100 % Successfully delivered projects<br /><br />

                            Hi there! I'm a Senior Full Stack developer with over 4+ years of experience, I've collaborated with different companies. My expertise spans standalone and API-driven web applications and token-based RestFul API servers. Whether it's cutting-edge technologies or tailored project needs, I have the skills and knowledge to deliver.<br /><br />

                            Tech-stack:<br />
                            ⁃ Front-End Development: React.js, Vue.js, JavaScript, TypeScript, Tailwind CSS, HTML<br />
                            ⁃ Back-End Development: Node.js, Express.js, Next.js, Python, Django, Firebase,<br />
                            ⁃ Database Management: MySQL, MongoDB<br />
                            ⁃ API Integration: RESTful APIs, REST, FastAPI<br />
                            ⁃ AI Integration: Open AI, Claude, Gemini, ChatGPT, Llama<br />
                            ⁃ Version Control: Git, GitHub<br /><br />

                            My Approach<br />
                            I believe in clean, maintainable code and seamless user experiences. I deliver fast, with clear communication to help your business grow online.<br /><br />

                            Let's connect and talk about what you need — I’m ready to turn your vision into reality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm :bg-blue-500/20  transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm :bg-blue-500/20  transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Database Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databaseManagementSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm :bg-blue-500/20  transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Database Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    {APIIntegration.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm :bg-blue-500/20  transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Database Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    {AIIntegration.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm :bg-blue-500/20  transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Database Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    {VersionControl.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm :bg-blue-500/20  transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border-[2px] hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul>
                                <li>
                                    <strong> B.S. in Computer Science </strong> - Lahore Garrison University
                                    (2021-2025).
                                </li>
                                <li>
                                    <strong>Intermediate in Computer Science </strong> - Aspire College
                                    (2016-2018).
                                </li>
                                <li>
                                    <strong>Relevant Coursework</strong> - Web Development,  ...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border-[2px] hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        React JS Developer at TechZilla Global (Nov 2024 - Present)
                                    </h4>
                                    <p>
                                        Developing and maintaining web applications Applications .
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        React JS Developer at Excellence Coding Solutions (Dec 2023 - Mar 2024)
                                    </h4>
                                    <p>
                                        Developed web applications and slightly working on Node JS.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Intern at Era Flip Tech (July 2023 - Oct 2023)
                                    </h4>
                                    <p>
                                        Assisted in building front-end components and integration
                                        REST APIs
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default About