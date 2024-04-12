import Box from "@mui/material/Box/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating/Rating";
import Typography from "@mui/material/Typography/Typography";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import short from "../../assets/short.png";

export default function ProductCard() {
  const cardSize = () => {
    return {
      md: "clamp(9.5rem, 0.9408rem + 15.1659vw, 15.5rem)",
      sm: "clamp(10.2635625rem, -0.1573rem + 27.7427vw, 15.5rem)",
      xs: "clamp(6.25rem, 1.3127rem + 39.4987vw, 16.1rem)",
    };
  };
  const [ratingValue, setRatingValue] = useState<number>(2);
  window.addEventListener("load", () => setRatingValue(3));
  return (
    <Box>
      <Card
        sx={{
          maxWidth: cardSize(),
          lineHeight: 2,
          boxShadow: "unset",
        }}
      >
        <CardActionArea component={NavLink} to="/">
          <CardContent
            sx={{
              height: cardSize(),
              width: "100%",
              boxShadow: "inset -1px -1px 300px -153px rgba(0,0,0,0.59)",
            }}
          >
            <CardMedia
              image={short}
              title="green iguana"
              sx={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
            />
          </CardContent>
          <CardContent>
            <Typography
              component="h3"
              sx={{ fontSize: "clamp(0.875rem, 0.8346rem + 0.1723vw, 1rem)" }}
            >
              DNK Yellow Shoes
            </Typography>
            <Typography
              component="h4"
              sx={{
                fontSize: "clamp(0.8125rem, 0.7923rem + 0.0861vw, 0.875rem)",
                fontWeight: "bolder",
                color: "grey",
              }}
            >
              Men
            </Typography>
            <Box
              sx={{
                fontSize: "clamp(0.875rem, 0.8346rem + 0.1723vw, 1rem)",
              }}
            >
              <Typography component="span">$150.00</Typography>
              <Typography component="span">$120.00</Typography>
            </Box>
            <Box>
              <Rating name="disabled" value={ratingValue} disabled />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
