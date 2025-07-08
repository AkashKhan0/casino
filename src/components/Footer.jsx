import React from "react";

import { Link } from "react-router-dom";
import ftrbg from "../assets/ftr_bg.mp4";
import ShinyText from "./mini_components/ShinyText";

const Footer = () => {

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div>
      <div className="w-full relative footer h-fit px-2 md:px-5 lg:px-10 py-5 bg-[#020202da]">
        <div className="absolute top-0 left-0 w-full h-full object-cover ftr_bg_vdo">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={ftrbg}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Paginas</div>
            <div className="f_ttl_p">
              <Link to="/">Inicio</Link>
            </div>
            <div className="f_ttl_p">
              <Link to={isLoggedIn ? "/poker" : "/login"}>Poker</Link>
            </div>
            <div className="f_ttl_p">
              <Link to={isLoggedIn ? "/casino" : "/login"}>Casino</Link>
            </div>
            <div className="f_ttl_p">
              <Link to={isLoggedIn ? "/livecasino" : "/login"}>Casino en vivo</Link>
            </div>
            <div className="f_ttl_p">
              <Link to={isLoggedIn ? "/sports" : "/login"}>Deportes</Link>
            </div>
            <div className="f_ttl_p">
              <Link to={isLoggedIn ? "/help" : "/login"}>Ayudas</Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Políticas del Sitio</div>
            <div className="f_ttl_p">
              <Link to="/moneylaundering">Contra el Lavado de Dinero</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/termcondition">Términos y Condiciones</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/privecypolicy">Políticas de Privacidad</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/validation">Validación y Aceptación de Apuestas</Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Información Adicional</div>
            <div className="f_ttl_p">
              <Link to="/sportsrule">Reglas Deportivas</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/gamerule">Reglas del Juego</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/glossary">Glosario de Apuestas</Link>
            </div>
            <div className="f_ttl_p">
              <Link to="/responsiblegaming">Juego Responsable</Link>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start lg:items-start">
            <div className="f_ttl">Aguante</div>

            <div className="f_ttl_p">
              <Link to="/whoweare">Quiénes Somos</Link>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="w-full flex flex-col items-center">
            <div className="f_ttl2">Aguante</div>
            <div className="f_ttl2_p text-center">
              Somos un sitio oficial de apuestas deportivas, tragamonedas, poker y casino online. Nuestra plataforma cuenta con rigurosas normas de seguridad para proteger tus datos y brindarte una navegación confiable. Viví la mejor experiencia de juego online desde donde quieras y cuando quieras. Bienvenido a Play.bet.ar.
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="f_ttl2">Monedero Compatible</div>
            <div className="f_ttl2_p text-center">
              Podés jugar solo si eres adulto. El juego puede causar adicción patológica. 18+
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#fcbd0041] my-5"></div>
        <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-between gap-2">
          <div className="social_icn flex gap-5">
            <ShinyText/>
          </div>
          <div className="copyrights f_ttl2_p text-center">
            © 2025 Aplus advertising LTD. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
