import React from "react";
import Carousel from "react-material-ui-carousel";
import "../styles/Cards.css";
import ItemCards from "./ItemCards";

function Cards() {
  const items = [
    {
      name: "Tous Imparfaits",
      description: "Marque de vêtement éthique et responsable",
      image: "/tous_imparfait.png",
      link: "https://tousimparfaits.com/",
    },
    {
      name: "Tokyo Loots",
      description:
        "Site de vente dédié aux jeux rétro et à la pop culture japonaise !",
      image: "/tokyo_loots.png",
      link: "https://www.tokyoloots.com/",
    },
    {
      name: "Tokyo Cards",
      description: "Boutique en ligne dédiée aux cartes TCG japonaises !",
      image: "/tokyo_cards.png",
      link: "https://tokyocards.com/",
    },
    {
      name: "Onamae Sama",
      description:
        "Site de création de shikishi réalisé à la main et personnel par un artisan local",
      image: "/onamaesama.png",
      link: "https://onamaesama.com/",
    },
  ];

  return (
    <Carousel
      className="cards"
      navButtonsAlwaysVisible={true}
      stopAutoPlayOnHover={true}
      animation="fade"
      fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "transparent",
          borderRadius: 0,
          color: "white",
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: "-41px",
          top: "unset",
        },
      }}
    >
      {items.map((item, i) => (
        <ItemCards key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Cards;
