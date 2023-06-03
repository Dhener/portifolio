import "./Banner.css";
import Botao from "../Botao";
import { useRef } from "react";

const Banner = () => {
  const menuButton = useRef();
  const navBar = useRef();
  const header = useRef();

  const efeito = () => {
    let navlinks = document.querySelectorAll("header nav a");
    navlinks.forEach((links) => {
      links.classList.remove("active");
      document.querySelector("header nav a").classList.add("active");
      header.current.style.backgroundColor = "transparent";
      navBar.current.style.top = "-1000px";
      menuButton.current.classList.toggle("bx-x");
      navBar.current.classList.toggle("active");
    });
  };

  function animationMenuIcon() {
    menuButton.current.classList.toggle("bx-x");
    navBar.current.classList.toggle("active");
    if (menuButton.current.classList.contains("bx-x")) {
      header.current.style.backgroundColor = "var(--color-one)";
      navBar.current.style.top = "100%";
    } else {
      header.current.style.backgroundColor = "transparent";
      navBar.current.style.top = "-1000px";
    }
  }

  return (
    <>
      <header ref={header} className="header">
        <a href="#" className="logo">
          D&M.
        </a>
        <div
          onClick={animationMenuIcon}
          className="bx bx-menu"
          id="menu-icon"
          ref={menuButton}
        ></div>
        <nav ref={navBar} className="navbar">
          <a onClick={efeito} href="#home" className="active">
            HOME
          </a>
          <a onClick={efeito} href="#sobre">
            SOBRE NÓS
          </a>
          <a onClick={efeito} href="#portifolio">
            PORTFOLIO
          </a>
          <a onClick={efeito} href="#experiencia">
            EXPERIÊNCIAS
          </a>
          <Botao onClick={efeito} nome="#contato" texto="FALE CONOSCO" />
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-conteudo">
          <h2>Nós somos</h2>
          <h1>
            Desenvolvedores <br></br>De Software <br></br>Full Stack
            <div className="out">
              <div className="in"></div>
            </div>
          </h1>
        </div>
        <Botao nome="#portifolio" texto="Projetos Anteriores" />
      </section>
    </>
  );
};

export default Banner;
