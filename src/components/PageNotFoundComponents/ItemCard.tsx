// @ts-ignore
import Card from "@mui/material/Card";
// @ts-ignore
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
// @ts-ignore
import CardContent from "@mui/material/CardContent";
// @ts-ignore
import CardMedia from "@mui/material/CardMedia";
// @ts-ignore
import Typography from "@mui/material/Typography/Typography";
import dress from "../../assets/dress.png";
import { NavLink } from "react-router-dom";
export default function MediaCard() {
  return (
    <Card sx={{ width: "12.5rem", height: "15.625rem", boxShadow: "unset" }}>
      <CardActionArea component={NavLink} to="/">
        <CardMedia
          image={dress}
          title="green iguana"
          sx={{
            textAlign: "center",
            height: "12.375rem",
          }}
        />
        <CardContent>
          <Typography
            component="h3"
            fontSize={18}
            textAlign="center"
            variant="h3"
          >
            New in
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
