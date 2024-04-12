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
import Grid from "@mui/material/Grid/Grid";
export default function ProductCard() {
  const [ratingValue, setRatingValue] = useState<number>(2);
  window.addEventListener("load", () => setRatingValue(3));
  return (
    <Grid item md={2.4} sm={4} xs={6}>
      <Card
        sx={{
          maxWidth: "15.5rem",
          lineHeight: 2,
          boxShadow: "unset",
        }}
      >
        <CardActionArea component={NavLink} to="/">
          <CardContent
            sx={{
              height: "15.5rem",
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
            <Typography component="h3" fontSize={18} variant="h3">
              DNK Yellow Shoes
            </Typography>
            <Typography component="h4" fontSize={14} variant="h3">
              Men
            </Typography>
            <Box>
              <Typography component="span" fontSize={18} variant="h3">
                $150.00
              </Typography>
              <Typography component="span" fontSize={18} variant="h3">
                $120.00
              </Typography>
            </Box>
            <Box>
              <Rating name="disabled" value={ratingValue} disabled />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
