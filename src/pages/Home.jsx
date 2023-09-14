import logo from "../assets/img/logo.png";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiProtonmail } from "react-icons/si";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import { RiCloseLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import gericht from "../assets/img/gericht.png";
import gpt3 from "../assets/img/gpt3.png";
import hoobank from "../assets/img/hoobank.png";
import kratosPetshop from "../assets/img/kratospetshop.png";
import promptopia from "../assets/img/promptopia.png";
import { useState } from "react";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <header class="header">
        <div class="header__content">
          <div class="header__logo-container">
            <div class="header__logo-img-cont border border-blue-500">
              <img
                src={logo}
                alt="Ram Maheshwari Logo Image"
                class="header__logo-img"
              />
            </div>
            <span class="header__logo-sub">Kaio Brenner</span>
          </div>
          <div class="header__main">
            <ul class="header__links">
              <li class="header__link-wrapper">
                <a href="#" class="header__link">
                  Home
                </a>
              </li>
              <li class="header__link-wrapper">
                <a href="#about" class="header__link">
                  Sobre
                </a>
              </li>
              <li class="header__link-wrapper">
                <a href="#projects" class="header__link">
                  Projetos
                </a>
              </li>
              <li class="header__link-wrapper">
                <a href="#contact" class="header__link">
                  Contato
                </a>
              </li>
            </ul>
            <div class="header__main-ham-menu-cont">
              <div
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                  console.log(toggleMenu);
                }}
              >
                {toggleMenu ? (
                  <RiCloseLine className="text-5xl"></RiCloseLine>
                ) : (
                  <RxHamburgerMenu className="text-5xl"></RxHamburgerMenu>
                )}
              </div>
            </div>
          </div>
        </div>
        {toggleMenu && (
          <div className="header__sm-menu header__sm-menu--active">
            <div class="header__sm-menu-content">
              <ul class="header__sm-menu-links">
                <li class="header__sm-menu-link">
                  <a href="#"> Home </a>
                </li>
                <li class="header__sm-menu-link">
                  <a href="#about"> Sobre </a>
                </li>
                <li class="header__sm-menu-link">
                  <a href="#projects"> Projetos </a>
                </li>
                <li class="header__sm-menu-link">
                  <a href="#contact"> Contato </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      <section class="home-hero">
        <div class="home-hero__content">
          <h1 class="heading-primary">
            Olá, Meu nome é <br /> Kaio Brenner
          </h1>
          <div class="home-hero__info">
            <p class="text-primary">
              <strong>Programador Web</strong> focado no{" "}
              <strong>Frontend</strong> e determinado em desenvolver sistemas de
              alta qualidade
            </p>
          </div>
          <div class="home-hero__cta">
            <a href="./#projects" class="btn btn--bg">
              Projetos
            </a>
          </div>
        </div>
        <div class="home-hero__socials">
          <div class="justify-center items-center">
            <a
              href="https://www.linkedin.com/in/kaiobrenner/"
              target="_blank"
              class="home-hero__social-icon-link text-[24px]"
            >
              <BsLinkedin></BsLinkedin>
            </a>
          </div>
          <div class="justify-center items-center">
            <a
              href="https://github.com/KaioBrenner"
              target="_blank"
              class="home-hero__social-icon-link text-[24px]"
            >
              <BsGithub></BsGithub>
            </a>
          </div>
          <div class="justify-center items-center">
            <a
              href="mailto:kaiobrenner460@protonmail.com"
              target="_blank"
              class="home-hero__social-icon-link text-[24px]"
            >
              <SiProtonmail></SiProtonmail>
            </a>
          </div>
          <div class="justify-center items-center">
            <a
              href="https://www.instagram.com/okaiobrenner/"
              target="_blank"
              class="home-hero__social-icon-link text-[24px]"
            >
              <BsInstagram></BsInstagram>
            </a>
          </div>
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
      <section id="about" class="about sec-pad">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main">Sobre Mim</span>
            <span class="heading-sec__sub">
              Nesta seção você encontrará mais informações sobre mim e minhas
              habilidades
            </span>
          </h2>
          <div class="about__content">
            <div class="about__content-main">
              <h3 class="about__content-title">Conheça-me!</h3>
              <div class="about__content-details">
                <p class="about__content-details-para">
                  Sou um programador <strong>Front-end</strong> e possuo
                  experiência no desenvolvimento de
                  <strong> aplicações web</strong> e estou em busca da minha
                  primeira oportunidade como desenvolvedor.
                </p>
                {/* <p class="about__content-details-para">
                  Nesta área tenho conhecimento nas seguintes tecnologias:
                  HTML5, CSS3, JavaScript, React, Node.js, Bootstrap,
                  TailwindCSS, MongoDB, MySQL, Python, Flask e JQuery, e
                  atualmente estou aprendendo TypeScript, Redux e pretendo em
                  breve começar a estudar Next.js.
                </p> */}
                <p class="about__content-details-para">
                  Estou sempre a criar <strong>aplicações web</strong> com as
                  tecnologias ao lado. E além do desenvolvimento profissional,
                  procuro constantemente me aperfeiçoar no âmbito pessoal
                  buscando sempre um{" "}
                  <strong>novo aprendizado dia após dia</strong>.
                </p>
              </div>
              <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">
                Contato
              </a>
            </div>
            <div class="about__content-skills">
              <h3 class="about__content-title">Minhas Habilidades</h3>
              <div class="skills">
                <div class="skills__skill">React</div>
                <div class="skills__skill">Next.js</div>
                <div class="skills__skill">MongoDB</div>
                <div class="skills__skill">OAuth</div>
                <div class="skills__skill">Node.js</div>
                <div class="skills__skill">JavaScript</div>
                <div class="skills__skill">GIT</div>
                <div class="skills__skill">Github</div>
                <div class="skills__skill">Bootstrap</div>
                <div class="skills__skill">TailwindCSS</div>
                <div class="skills__skill">HTML5</div>
                <div class="skills__skill">CSS3</div>
                <div class="skills__skill">Design Responsivo</div>
                <div class="skills__skill">MySQL</div>
                <div class="skills__skill">Python</div>
                <div class="skills__skill">Flask</div>
                <div class="skills__skill">SEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" class="projects sec-pad">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-bg">
            <span class="heading-sec__main">Projetos</span>
            <span class="heading-sec__sub">
              Algumas das principais aplicações web que desenvolvi
            </span>
          </h2>
          <div class="projects__content">
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={promptopia}
                  className="h-max"
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">Promptopia</h3>
                <p class="projects__row-content-desc">
                  Site desenvolvido para divugação de Prompts, com autenticação
                  via OAuth e utilizando Next.js e React.js moderno.
                </p>
                <div className="flex flex-wrap">
                  <div class="skills__skill">React</div>
                  <div class="skills__skill">Next.js</div>
                  <div class="skills__skill">MongoDB</div>
                  <div class="skills__skill">OAuth</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">TailwindCSS</div>
                  <div class="skills__skill">HTML5</div>
                  <div class="skills__skill">CSS3</div>
                </div>
                <a
                  class="btn btn--theme dynamicBgClr py-6 px-12 text-2xl"
                  href="https://promptopia-kaiobrenner.vercel.app/"
                  target="_blank"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={gericht}
                  className="h-max"
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">Gericht Restaurant</h3>
                <p class="projects__row-content-desc">
                  Modelo de website desenvolvido para suprir as necessidades de
                  um restaurante e servir como um cartão de visita para angariar
                  novos clientes para o estabelecimento com páginas de menu,
                  chefs, contato e etc.
                </p>
                <div className="flex flex-wrap">
                  <div class="skills__skill">HTML5</div>
                  <div class="skills__skill">CSS3</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">React</div>
                </div>
                <a
                  class="btn btn--theme dynamicBgClr py-6 px-12 text-2xl"
                  href="https://kaiobrenner.github.io/gericht-restaurant/"
                  target="_blank"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={gpt3}
                  className="h-max"
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">GPT3</h3>
                <p class="projects__row-content-desc">
                  Landing Page feita para mostrar o que é o GPT3
                </p>
                <div className="flex flex-wrap">
                  <div class="skills__skill">HTML5</div>
                  <div class="skills__skill">CSS3</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">React</div>
                </div>
                <a
                  class="btn btn--theme dynamicBgClr py-6 px-12 text-2xl"
                  href="https://kaiobrenner.github.io/gpt3/"
                  target="_blank"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={kratosPetshop}
                  className="h-max border border-black projects__row-img"
                  alt="Software Screenshot"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">
                  Kratos Petshop <br />
                  (Em desenvolvimento)
                </h3>
                <p class="projects__row-content-desc">
                  Projeto do meu TCC de 06/23 que é focado em gerenciamento de
                  Petshops especializados em banho e tosa. Com o feedback
                  bastante positivo dos docentes, eu e minha equipe decidimos
                  levar em frente o projeto.
                </p>
                <div className="flex flex-wrap">
                  <div class="skills__skill">HTML5</div>
                  <div class="skills__skill">CSS3</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">React</div>
                  <div class="skills__skill">Node.js</div>
                  <div class="skills__skill">TailwindCSS</div>
                  <div class="skills__skill">MongoDB</div>
                </div>
                <a
                  class="btn dynamicBgClr py-6 px-12 text-2xl cursor-default"
                  href="#"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact sec-pad dynamicBg">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main heading-sec__main--lt">Contato</span>
            <span class="heading-sec__sub heading-sec__sub--lt">
              Nesta seção fique à vontade para me enviar uma mensagem
            </span>
          </h2>
          <div class="contact__form-container">
            <form
              action="https://api.staticforms.xyz/submit"
              class="contact__form"
              onSubmit={() => {
                alert("Email enviado com sucesso, em breve eu te responderei!");
              }}
              method="post"
            >
              <div class="contact__form-field">
                <label class="contact__form-label" for="name">
                  Nome
                </label>
                <input
                  required
                  placeholder="Escreva o seu nome"
                  type="text"
                  class="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Escreva o seu email"
                  type="text"
                  class="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div class="contact__form-field">
                <label class="contact__form-label" for="message">
                  Mensagem
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  class="contact__form-input"
                  placeholder="Escreva uma mensagem"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn--theme contact__btn">
                ENVIAR
              </button>
              <input
                type="hidden"
                name="accessKey"
                value="e8b5a988-6b92-4b06-8d9d-f6abec8e53e0"
              ></input>
              <input
                type="hidden"
                name="redirectTo"
                value="https://kaiobrenner.vercel.app/"
              ></input>
            </form>
          </div>
        </div>
      </section>
      <footer class="main-footer">
        <div class="main-container">
          <div class="main-footer__upper flex gap-4">
            <div class="main-footer__row main-footer__row-1">
              <h2 class="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div class="main-footer__social-cont flex gap-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/kaiobrenner/"
                  className="text-[24px]"
                >
                  <BsLinkedin></BsLinkedin>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/KaioBrenner"
                  className="text-[24px]"
                >
                  <BsGithub></BsGithub>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:kaiobrenner460@protonmail.com"
                  className="text-[24px]"
                >
                  <SiProtonmail></SiProtonmail>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/okaiobrenner/"
                  className="text-[24px]"
                >
                  <BsInstagram></BsInstagram>
                </a>
              </div>
            </div>
            <div class="main-footer__row main-footer__row-2">
              <h4 class="heading heading-sm text-lt">Kaio Brenner</h4>
              <p class="main-footer__short-desc">
                Programador Web focado no Frontend e determinado em desenvolver
                sistemas de alta qualidade
              </p>
            </div>
          </div>
          <div class="main-footer__lower">
            &copy; Copyright 2023. Made by
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kaiobrenner/"
            >
              Kaio Brenner
            </a>
          </div>
        </div>
      </footer>
      <script src="../index.js"></script>
    </div>
  );
};

export default Home;
