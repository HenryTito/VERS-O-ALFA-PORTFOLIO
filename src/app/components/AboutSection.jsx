"use client"
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import './AboutSection.css';

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <ul className="custom-list">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>Python</li>
        <li>React</li>
        <li>MySQL</li>
      </ul>
    )
  },
  {
    title: "Educação",
    id: "educacao",
    content: (
      <ul className="custom-list">
        <li>Colégio Elo Educacional 2013-2024</li>
        <li>Alura</li>
        <li>Hashtag Treinamentos</li>
        <li>Fatec DSM</li>
      </ul>
    )
  },
  {
    title: "Projetos",
    id: "projetos",
    content: (
      <ul className="custom-list">
        <li>Sistema de controle de vendas usando Java</li>
        <li>Frontend para um Software de reconhecimento de tráfego urbano</li>
        <li>Aplicativo de tempo e clima</li>
        <li>Criação de REST APIs</li>
        <li>Réplica do aplicativo Spotify usando React</li>
      </ul>
    )
  },
  {
    title: "Redes sociais",
    id: "redessociais",
    content: (
      <ul className="custom-list2">
        <li>
          <div className="social-link">
            <img src="/images/icons8.png" width={20} height={20} alt="Instagram Logo" />
            <a className='link_texto' href="https://www.instagram.com/htito.og/">Instagram</a>
          </div>
        </li>
        <li>
          <div className="social-link">
            <img src="/images/linked.png" width={20} height={20} alt="LinkedIn Logo" />
            <a className='link_texto' href="https://www.linkedin.com/in/henry-tito-989b4b354/">LinkedIn</a>
          </div>
        </li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Sobre mim</h2>
          <p className="about-text">
            Olá! Me chamo Henry Vilela Silva Tito, tenho 18 anos e sou estudante de Desenvolvimento de Software Multiplataforma na FATEC. Sempre fui apaixonado por tecnologia, e foi na programação que encontrei meu verdadeiro interesse. Gosto de transformar ideias em soluções práticas e criativas, explorando diferentes linguagens e tecnologias. Estou sempre em busca de aprender mais, melhorar minhas habilidades e encarar novos desafios.
          </p>
          <div className="tab-buttons">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="tab-content">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
