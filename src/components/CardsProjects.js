import React from "react";
import "../styles/CardsProjects.css";
import "../fonts/Fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";
import {
  faHeadset,
  faLandmark,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";

function CardsProjects() {
  //create a const despite the fact that we could use a fetch and a real database to give owner more flexibility and control. Due to financial cut, we will use a const for now.
  const cardsData = [
    {
      id: 1,
      icon: faYoutube,
      title: "Ici Japon Corp Youtube Channel",
      content: "Ici Japon dans la vraie vie",
      image: "/IJC_youtube.png",
      link: "https://www.youtube.com/@IciJaponCorp",
    },
    {
      id: 6,
      icon: faYoutube,
      title: "Tev Ici Japon Youtube Channel",
      content: "Entrepreneur et vidéaste vivant au Japon depuis 2011.",
      image: "/Tev_icijaponyoutube.png",
      link: "https://www.youtube.com/@IciJapon",
    },
    {
      id: 7,
      icon: faYoutube,
      title: "Tev et Louis Youtube Channel",
      content: "Notre travail est uniquement de se faire plaisir",
      image: "/Tev&Louis_youtube.png",
      link: "https://www.youtube.com/@TevLouis",
    },
    {
      id: 2,
      icon: faTwitch,
      title: "Ici Japon Corp twitch Channel",
      content: "Parler de tout et de rien sur un ton léger",
      image: "/twitch_logo.png",
      link: "https://www.twitch.tv/icijaponcorp",
    },
    {
      id: 4,
      icon: faLandmark,
      title: "Projet Odyssée",
      content:
        " Le premier musée du jeu vidéo en France, abritant la plus grande collection de consoles au monde !",
      image: "/Odyssee_logo.jpg",
      link: "https://www.kisskissbankbank.com/fr/projects/odyssee",
    },
    {
      id: 5,
      icon: faHotel,
      title: "Ici Japon Village",
      content:
        "Profiter de la ville Tokyoïte dans un environnement imaginé par Tev et sa femme Akiko.",
      image: "/ijv_logo.png",
      link: "https://keikaku.fr/ici-japon-village",
    },
    {
      id: 3,
      icon: faHeadset,
      title: "IJC E-SPORT",
      content:
        "@icijaponcorp présente sur Smash, Trackmania, Dofus, League of Legends & Rocket League.",
      image: "/ijc_esport.gif",
      link: "https://twitter.com/icijaponesport",
    },
  ];

  const generateCards = () => {
    return cardsData.map((card) => (
      <React.Fragment key={card.id}>
        <input
          type="radio"
          name="slide"
          id={`c${card.id}`}
          defaultChecked={card.id === 1 ? true : false}
        />
        <label
          htmlFor={`c${card.id}`}
          className="card"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon
                icon={card.icon}
                style={{ color: "#ffffff" }}
                size="xl"
              />
            </div>
            <div className="description">
              <h4>{card.title}</h4>
              <p>{card.content}</p>
            </div>
            <Button
              variant="outlined"
              size="small"
              style={{
                fontSize: "12px",
                color: "#ffffff",
                borderColor: "#ffffff",
                backgroundColor: "transparent",
                padding: "5px",
                height: "50px",
                margin: "auto",
                backdropFilter: "blur(10px)",
              }}
              onClick={() => window.open(card.link, "_blank")}
            >
              DECOUVRIR
            </Button>
          </div>
        </label>
      </React.Fragment>
    ));
  };

  return (
    <div className="wrapper">
      <div className="container">{generateCards()}</div>
    </div>
  );
}

export default CardsProjects;
