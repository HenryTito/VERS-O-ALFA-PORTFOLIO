import React from "react";
import "./Projetos.css";

const Projetos = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projetos</h2>
      <div className="projects-box">
        <div className="project-card">
          <img
            src="/images/travia.jpg"
            alt="projeto de reconhecimento de tráfego"
          />
          <h3>Sistema de Controle de Tráfego</h3>
          <p>
            Desenvolvimento de um site focado na contagem de veículos em tempo
            real. O sistema registra o fluxo de automóveis em diferentes pontos,
            permitindo o acompanhamento e análise básica do tráfego local.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/vendas.png" alt="" />
          <h3>Sistema de controle de vendas</h3>
          <p>
            Plataforma completa para registro e gerenciamento de vendas,
            desenvolvida em Java, com controle de estoque, cadastro de clientes
            e geração de relatórios em tempo real, otimizando o processo
            comercial de pequenas empresas.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/replica.png" alt="" />
          <h3>Réplica do Spotify com React</h3>
          <p>
            Criação de uma aplicação web interativa inspirada no Spotify,
            utilizando React para renderização dinâmica, gerenciamento de
            estados e simulação de funcionalidades como playlists e busca de
            músicas.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/restful.jpg" alt="" />
          <h3>Criação de REST APIs</h3>
          <p>
          Desenvolvimento de APIs RESTful organizadas e escaláveis, com foco em boas práticas como versionamento, autenticação JWT, estrutura em camadas e integração com bancos de dados relacionais e não relacionais.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/fatecexport.png" alt="Imagem do projeto fatec" />
          <h3>Projeto de Aprendizado FATEC</h3>
          <p>
            Projeto acadêmico desenvolvido com base em dados públicos do
            governo, voltado à filtragem de informações sobre importação e
            exportação. O sistema organiza os dados e os apresenta de forma
            visual por meio de gráficos interativos.
          </p>
        </div>

        <div className="project-card">
          <img src="/images/forecast.png" alt="" />
          <h3>Aplicativo de Previsão do Tempo</h3>
          <p>
          Aplicativo web desenvolvido com JavaScript que exibe a previsão do tempo em tempo real. Utiliza APIs externas para obter dados climáticos, mostrando informações como temperatura, umidade e condições atuais de forma clara e responsiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
