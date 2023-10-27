import React from "react";

import './style.css';

import ImgHeader from "../../assets/gardening2.webp";

function Header() {
  return (
    <header className="headerApp">
        <img className="imgHeader" src={ ImgHeader } alt="Header"/>   
        <div className="MenuSuperior">
          <a href="#">Fale Conosco</a>
        </div>
    </header>
  );
}

export default Header;