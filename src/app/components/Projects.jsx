import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="detailed-section">
        <h2 className="titulo-projeto">Imagens dos projetos</h2>
        <div className="projeto-container">
          <div className="projeto-imagem img1">
            <img
              src="/images/travia.jpg"
              alt="projeto de reconhecimento de tráfego"
              className="imagem1"
            />
          </div>
          <div className="projeto-imagem img2">
            <img src="/images/vendas.png" alt="sistema de vendas" />
          </div>
          <div className="projeto-imagem">
            <img src="/images/replica.png" alt="replicaSpotify" />
          </div>
          <div className="projeto-imagem">
            <img src="/images/restful.jpg" alt="Exemplo de uma das api's" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
