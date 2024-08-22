import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// @ts-ignore
import Box from "@mui/material/Box/Box";
// @ts-ignore
import Card from "@mui/material/Card";
// @ts-ignore
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link/Link";
import Rating from "@mui/material/Rating/Rating";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Typography from "@mui/material/Typography/Typography";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import short from "../../assets/short.png";

export default function ProductCard() {
  const [iconDisplay, setIconDisplay] = useState<string>("0rem");
  const [ratingValue, setRatingValue] = useState<number>(2);
  window.addEventListener("load", () => setRatingValue(3));

  const handleIconDisplay = (value: string) => setIconDisplay(value);

  const handleIconHide = (value: string) => setIconDisplay(value);
  const cardSize = () => {
    return {
      md: "clamp(9.5rem, 0.9408rem + 15.1659vw, 15.5rem)",
      sm: "clamp(10.2635625rem, -0.1573rem + 27.7427vw, 15.5rem)",
      xs: "clamp(6.25rem, 1.3127rem + 39.4987vw, 16.1rem)",
    };
  };

  const IconButtonStyles = () => {
    return {
      position: "absolute",
      top: "1em",
      right: "1em",
      backgroundColor: "rgb(255, 255, 255)",
      boxShadow: "0 0 2px  0 rgba(0,0,0,0.5)",
      height: iconDisplay,
      width: iconDisplay,
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
      overflow: "hidden",
    };
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Card
        sx={{
          maxWidth: cardSize(),
          lineHeight: 2,
          boxShadow: "unset",
        }}
      >
        <CardActionArea disableRipple sx={{ cursor: "unset" }}>
          <Link
            component={NavLink}
            to="/product"
            onMouseEnter={() => handleIconDisplay("2rem")}
            onMouseLeave={() => handleIconHide("0rem")}
          >
            <CardContent
              sx={{
                height: cardSize(),
                width: "100%",
                boxShadow: "inset -1px -1px 300px -153px rgba(0,0,0,0.59)",
              }}
            >
              <Link component={NavLink} sx={IconButtonStyles()} to="checkout">
                <Tooltip title="Add to Cart">
                  <ShoppingBasketIcon />
                </Tooltip>
              </Link>
              <CardMedia
                image={short}
                title="item bought"
                sx={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
            </CardContent>
          </Link>
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
            <Box>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(0.875rem, 0.8548rem + 0.0861vw, 0.9375rem)",
                  marginRight: "5px",
                  color: "grey",
                }}
              >
                $150.00
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(0.875rem, 0.8548rem + 0.0861vw, 0.9375rem)",
                }}
              >
                $120.00
              </Typography>
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
