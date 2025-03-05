import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RevealOnScroll } from './../RevealOnScroll';
import { MagneticSocialLinksDemo } from '../ui/MagneticSocialLink';

const Contact = () => {


    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3of8qbv', 'template_k21177h', form.current, {
                publicKey: '_f0VkvxBETP7w2sgt',
            })
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };
    return (
        <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className="flex flex-col items-center justify-center mb-9">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Find me here</h2>
                    <MagneticSocialLinksDemo />
                </div>
                <div className="px-4 w-90 sm:w-120">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Get In Touch</h2>
                    <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                        <input
                            type="text"
                            id='name'
                            name="user_name"
                            value={formData.name}
                            required
                            className='w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                            placeholder='Name'
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />

                        <input
                            type="email"
                            id='email'
                            name="user_email"
                            value={formData.email}
                            required
                            className='w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                            placeholder='example@gmail.com'
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />

                        <textarea
                            id='message'
                            name="message"
                            rows={5}
                            value={formData.message}
                            required
                            className='w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                            placeholder='Your Message Here ...'
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />


                        <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>Send Message</button>
                    </form>

                </div>

            </RevealOnScroll>
        </section>
    )
}

export default Contact