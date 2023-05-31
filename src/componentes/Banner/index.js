import "./Banner.css";
import Botao from "../Botao";

const Banner = () => {
  const efeito = () => {
    let navlinks = document.querySelectorAll("header nav a");
    navlinks.forEach((links) => {
      links.classList.remove("active");
      document.querySelector("header nav a").classList.add("active");
      header.style.backgroundColor = "transparent";
      navbar.style.top = "-1000px";
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    });
  };

  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector("nav");
  let header = document.querySelector(".header");
  function animationMenuIcon() {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    if (menuIcon.classList.contains("bx-x")) {
      header.style.backgroundColor = "var(--color-one)";
      navbar.style.top = "100%";
    } else {
      header.style.backgroundColor = "transparent";
      navbar.style.top = "-1000px";
    }
  }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          D&M.
        </a>
        <div
          onClick={animationMenuIcon}
          className="bx bx-menu"
          id="menu-icon"
        ></div>
        <nav className="navbar">
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
