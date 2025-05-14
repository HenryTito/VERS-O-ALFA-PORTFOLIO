"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            <span className="highlight-text">Olá, sou </span>
            <br />
            <TypeAnimation
              sequence={[
                "Henry Tito",
                1000,
                "Desenvolvedor front-end",
                1000,
                "Desenvolvedor back-end",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-subtitle">
            Sou um programador especializado em soluções práticas e eficientes.
            Estou pronto para colaborar e transformar ideias em código. Vamos
            começar a trabalhar?
          </p>
          <div className="hero-buttons">
            <a href="mailto:hvst115@gmail.com?subject=Olá, vi seu portfólio!&body=Escreva sua mensagem!">
              <button className="btn-primary">Contate-me</button>
            </a>
            <a href="/arquivos/CURRICULO.pdf" download>
              <button className="btn-secondary">Baixar CV</button>
            </a>
          </div>
        </motion.div>

        <div className="hero-image-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-image-container"
          >
            <Image
              src="/images/semFundo.png"
              alt="minha imagem"
              className="hero-image"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
