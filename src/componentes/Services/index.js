import React from "react";
import './style.css';

import Presentation from "../../assets/presentation.jpg";
import Business from "../../assets/business.jpg";
import Computer from "../../assets/computer.jpg";

function Services() {
  return (
    <div className="services">
        <h1>Nossos Serviços</h1>
        <p>Potencialize sua rotina com nossos serviços versáteis: suporte técnico, soluções de TI, assistência administrativa e 
           elaboração de planilhas personalizadas para o seu negócio ou uso pessoal.</p>

        <div className="cards">
            <div className="boxCard">
                <img className="imagemCard" src={ Presentation } alt="Presentation" />
                <div className="textCard">Planilhas Personalizadas</div>            
            </div>
            <div className="boxCard">
                <img className="imagemCard" src={ Business } alt="Business" />
                <div className="textCard">Suporte administrativo</div>            
            </div>
            <div className="boxCard">
                <img className="imagemCard" src={ Computer } alt="Computer" />
                <div className="textCard">Suporte de TI</div>            
            </div>
        </div>
    </div>
  );
}

export default Services;