import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer">
  <h1 className="texto">Henry Tito</h1>

  <div className="divicons">
    <ul>
      <li>
        <a href="mailto:hvst115@gmail.com?subject=Olá, vi seu portfólio!&body=Escreva sua mensagem!">
          <img src="/images/gmail.png" alt="icone gmail" className="social-icon" />
        </a>
      </li>
      <li>
        <a href="https://wa.me/5512991358590?text=Olá,%20gostaria%20de%20falar%20com%20você!" target="_blank">
          <img src="/images/zapzap.png" alt="Fale comigo no WhatsApp" className="social-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/htito.og/" target="_blank">
          <img src="/images/icons8.png" alt="instagram icone" className="social-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/henry-tito-989b4b354/" target="_blank">
          <img src="/images/linked.png" alt="linkedin icone" className="social-icon" />
        </a>
      </li>
    </ul>
  </div>

  <h1 className="texto">Todos direitos reservados.</h1>
</section>
  )
}

export default Footer