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
        <p className='paragrafo-hard'>Hard skills:</p>
        <li><a>Node.js</a>
          <img className='icon' src="/images/node.png" width={20} height={19} alt="imagemnode" />
        </li>
        
        <li>JavaScript
          <img className="icon" src="/images/javascript.png" width={20} height={19} alt="javascript imagem" />
        </li>
        <li>C#
          <img className='icon' src="/images/csharp.png" width={20} height={19} alt="c# imagem" />
        </li>
        <li>Python
          <img className='icon' src="/images/python.png" width={20} height={19} alt="python imagem" />
        </li>
        <li>React
          <img className='icon' src="/images/react.png"width={20} height={19} alt="react imagem" />
        </li>
        <li>MySQL
          <img className='icon' src="/images/mysql.png" width={20} height={19} alt="mysql imagem" />
        </li>
        <li>Figma
          <img className='icon' src="/images/figma.png"  width={20} height={19} alt="figma imagem" />
        </li>
        <li>Docker
          <img className='icon' src="/images/docker.png"  width={20} height={19} alt="docker imagem" />
        </li>

        <p className='paragrafo-soft'>Soft skills:</p>
        <li>Trabalho em equipe
          <img className='icon' src="/images/teamwork.png" alt="trabalho em equipe" width={20} height={19} />
        </li>
        <li>Comunicação eficaz
          <img className='icon' src="/images/com.png" alt="imagem comunicação" width={20} height={19} />
        </li>
        <li>Resolução de problemas
          <img className='icon' src="/images/problems.png" alt="imagem problema" width={20} height={19} />
        </li>
        <li>Adaptabilidade
          <img className='icon' src="/images/adaptable2.png" alt="adaptabilidade imagem" width={20} height={19} />
        </li>
        <li>Proatividade
          <img className='icon' src="/images/solution2.png" alt="" width={20} height={19} />
        </li>
        <li>Empatia
          <img className='icon' src="/images/empathy.png" alt="" width={20} height={19} />
        </li>
      </ul>
    )
  },
  {
    title: "Educação",
    id: "educacao",
    content: (
      <ul className="custom-list">
        <li className='about'>Colégio Elo Educacional 2013-2024</li>
        <li className='about'>Imersão Backend | Alura |<br></br>
 Trabalhos com banco de dados (mySQL, PostgreSQL, MongoDB) .
 <br></br>Programação orientada a objetos.
 Criação de Rest API’S
</li>
<li className='about'>Curso de desenvolvimento Web | Alura |<br />
 Aprofundamento em JavaScript DOM, React, REST API, Node JS.<br></br>
 Desenvolvimento de aplicações web e programação orientada a objetos.</li>
        <li className='about'>Imersão Backend | Hashtag treinamentos|<br></br>
 Projetos de automatização de cadastros utilizando python com a biblioteca pyautogui, Pandas e openpyxl
</li>
        <li>Desenvolvimento de Software Multiplataforma | FATEC | (cursando)</li>
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
        <li>Projeto para filtragem de dados de exportação e importação de municípios FATEC</li>
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
          Olá! Me chamo Henry Vilela Silva Tito, tenho 18 anos e sou estudante de Desenvolvimento de Software Multiplataforma na FATEC. Sempre gostei muito da área de tecnologia, e foi na programação que encontrei meu verdadeiro interesse. Gosto de transformar ideias em soluções práticas e criativas, explorando diferentes linguagens, ferramentas e tecnologias.
          Sou uma pessoa curiosa e determinada, sempre buscando aprender mais, melhorar minhas habilidades e enfrentar novos desafios. Fora do universo tech, gosto de jogar bola, aproveitar o tempo com amigos e me manter ativo. Me considero prestativo, comunicativo e proativo, sempre disposto a colaborar, aprender e contribuir com o time.


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
