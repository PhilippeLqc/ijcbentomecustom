import React, { useRef, useState, useEffect } from "react";
import "../styles/HomePage.css";
import "../fonts/Fonts.css";
import { Button, Avatar } from "@mui/material";
import Projects from "./Projects";
import Store from "./Store";

const SectionButton = ({ onClick, children }) => (
  <Button
    variant="outlined"
    style={{
      fontSize: "12px",
      color: "#ffffff",
      borderColor: "#ffffff",
      backgroundColor: "transparent",
      padding: "0px 50px 0px 50px",
      height: "50px",
      margin: "5px",
      backdropFilter: "blur(10px)",
      borderRadius: "50px",
      fontFamily: "workSansExtraBold",
    }}
    onClick={onClick}
  >
    {children}
  </Button>
);

function HomePage() {
  const projectsRef = useRef(null);
  const presentationRef = useRef(null);
  const storeRef = useRef(null);

  const SectionHeader = ({ title, image, alt }) => (
    <div className="presentation" ref={presentationRef}>
      <h1>{title}</h1>
      <div className="Avatar">
        <Avatar alt={alt} src={image} sx={{ width: 180, height: "auto" }} />
        <h4>{alt}</h4>
        <article>
          "Depuis 20 ans, mon objectif est de découvrir de nouvelles choses, de
          vivre le plus d'expériences possibles et de partager tout cela avec
          vous. <br /> Comme le poulpe de notre logo, Ici Japon Corp a 8
          domaines d'activités différents, et même si vous nous connaissez bien,
          je suis sûr que vous ne les trouverez pas."
        </article>
      </div>
    </div>
  );

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projectsClick = () => scrollToRef(projectsRef);
  const presentationClick = () => scrollToRef(presentationRef);
  const storeClick = () => scrollToRef(storeRef);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage du listener d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="HomePageMain">
      <div className="LandingPage">
        <header>
          <img src="/ijc_logo.svg" alt="Logo" className="imglogo" />
        </header>
        {windowWidth <= 900 ? (
          <img src="/ijc_logo_smartphone.png" alt="Logo" className="imgtitle" />
        ) : (
          <img src="/ici_japon_corp.png" alt="Title" className="imgtitle" />
        )}
        <SectionButton onClick={presentationClick}>DECOUVRIR</SectionButton>
      </div>
      <div className="presentation">
        <SectionHeader
          title="Qui est IJC ?"
          image="/Tev_avatar.png"
          alt="Tev Ici Japon"
        />
        <SectionButton onClick={projectsClick}>MEDIAS & PROJETS</SectionButton>
      </div>
      <div className="projects" ref={projectsRef}>
        <Projects />
        <SectionButton onClick={storeClick}>
          STORE & MERCHANDISING
        </SectionButton>
      </div>
      <div className="store" ref={storeRef}>
        <Store />
        <footer>
          <p>
            © I do not own content. All credits to Ici Japon Corp. Made with
            love.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
