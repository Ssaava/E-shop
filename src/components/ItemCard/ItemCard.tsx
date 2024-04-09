import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 200, height: 250 }}>
      <CardMedia
        sx={{ height: 198 }}
        image="../../../public/dress.png"
        title="green iguana"
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
    </Card>
  );
}
