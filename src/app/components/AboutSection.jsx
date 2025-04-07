"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { Content } from 'next/font/google'


const TAB_DATA = [
    {
        title: "Habilidades",
        id: "habilidades",
        content: (
            <ul>
                <div className='list-disc'>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Python</li>
                <li>React</li>
                <li>MySQL</li>
                </div>
            </ul>
        )
    },
    {
        title: "Educação",
        id: "educacao",
        content: (
            <ul>
                <div className='list-disc'>
                <li>Colégio Elo Educacional 2013-2024</li>
                <li>Alura</li>
                <li>Hashtag Treinamentos</li>
                <li>Fatec DSM</li>
                </div>
            </ul>
        )
    },
    {
        title: "Projetos",
        id: "projetos",
        content: (
            <ul>
                <div className='list-disc'>
                <li>Sistema de controle de vendas usando Java</li>
                <li>Frontend para um Software de reconhecimento de tráfego urbando</li>
                <li>Aplicativo de tempo e clima usando</li>
                <li>Criação de rest API'S</li>
                </div>
            </ul>
        )
    },
    {
        title: "Redes sociais",
        id: "redessociais",
        content: (
            <ul>
                
                <li>
                <div className="flex items-center space-x-2 text-white text-lg">
                    <Image
                        src={'/images/icons8.png'}
                        width={20}
                        height={20}
                        alt='Instagram Logo'
                        
                    
                    
                    />
                    <a href='https://www.instagram.com/htito.og/'>Instagram</a>
                    </div>
                    </li>
                    
                    <li>
                <div className="flex items-center space-x-2 text-white text-lg">
                    <Image
                        src={'/images/linked.png'}
                        width={20}
                        height={20}
                        alt='LinkedIn Logo'
                        
                    
                    
                    />
                    <a href='https://www.linkedin.com/in/henry-tito-989b4b354/'>LinkedIn</a>
                    </div>
                    </li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("habilidades")
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
          });
    }
  return (
    <section className=  "text-white mt-32"  id="about">
    <div className='md:grid md:grid-cols-2 gap-8
     items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2  className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
            <p className="text-base lg:text-lg ">Olá! Me chamo Henry Vilela Silva Tito, tenho 18 anos e sou estudante de Desenvolvimento de Software Multiplataforma na FATEC. Sempre fui apaixonado por tecnologia, e foi na programação que encontrei meu verdadeiro interesse.
            Gosto de transformar ideias em soluções práticas e criativas, explorando diferentes linguagens e tecnologias. Estou sempre em busca de aprender mais, melhorar minhas habilidades e encarar novos desafios. </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton
                selectTab={() => handleTabChange("habilidades")}
                active={tab === "habilidades"}
                >
                    {" "}
                    Habilidades{" "}

                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("educacao")}
                active={tab === "educacao"}
                >
                    {" "}
                    Educação{" "}

                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("projetos")}
                active={tab === "projetos"}
                >
                    {" "}
                    Projetos{" "}

                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("redessociais")}
                active={tab === "redessociais"}
                >
                    {" "}
                    Redes sociais{" "}

                </TabButton>
               
            </div>
            <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection