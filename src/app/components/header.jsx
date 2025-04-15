import React from 'react'
import './nav.css';

const header = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <div className="menu" id="navbar">
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">Sobre</a></li>
          <li><a href="#projects" className="nav-link">Projetos</a></li>
          <li><a href="https://www.linkedin.com/in/henry-tito-989b4b354/" className="linked">Linkedin</a></li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default header