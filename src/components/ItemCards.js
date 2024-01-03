import React from "react";
import { Button } from "@mui/material";
import "../styles/ItemCards.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

function ItemCards(props) {
  return (
    <Card
      sx={{ maxWidth: 800 }}
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.item.image}
        alt="shop"
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#BF1F31",
          color: "#ffffff",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            fontFamily: "workSansExtrabold",
          }}
        >
          {props.item.name}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontFamily: "workSansRegular",
          }}
        >
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#BF1F31",
        }}
      >
        <Button
          size="small"
          onClick={() => window.open(props.item.link, "_blank")}
          variant="outlined"
          style={{
            borderRadius: "50px",
            color: "#ffffff",
            borderColor: "#ffffff",
            fontFamily: "workSansExtrabold",
            padding: "5px 20px 5px 20px",
          }}
        >
          Aller vers le site
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCards;
