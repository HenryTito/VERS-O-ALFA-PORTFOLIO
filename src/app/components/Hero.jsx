"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 xl:px-16">
            <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text:4xl sm:text-5xl lg:text-6xl font-sans">
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-900'>Olá, sou {" "}</span>
                   <br></br>
                   <TypeAnimation
                     sequence={[
                    'Henry Tito',
                    1000,
                    'Desenvolvedor front-end',
                    1000,
                    'Desenvolvedor back-end',
                    1000
                     ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />

                    </h1>
                <p className='text-[#ADB7BE] mb-6 text-lg lg:text-xl'>
               Sou um programador especializado em soluções práticas e eficientes. Estou pronto para colaborar e transformar ideias em código. Vamos começar a trabalhar?
                 </p>
                 <div>
                 <a href="mailto:hvst115@gmail.com?subject=Olá, vi seu portfólio!&body=Escreva sua mensagem!">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-2xl mr-4 bg-gradient-to-br ffrom-blue-500 to-white hover:bg-slate-200 text-black'>Contate-me</button>
                    </a>
                     <a href='/arquivos/CURRICULO.PDF' download>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-2xl bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                        Baixar CV
                    </button>
                    </a>
                 </div>
            </motion.div>
            <div className='col-span-5 flex justify-center sm:justify-end'>
                <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 className= 'rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
                <Image
                    src='/images/semFundo.png'
                    alt='minha imagem'
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
                    width={300}
                    height={300}      
                />
                </motion.div>
            </div>
        </div>
        </section>
  )
}

export default Hero;