import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 248, height: 402 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="../../../public/dress.png"
        title="green iguana"
      />
      <CardContent>
        <CardHeader
          subheaderTypographyProps={{
            sx: {
              "& .MuiCardHeader-title": {
                fontSize: "100px",
              },
            },
          }}
          title="DNK YELLOW SHOES"
          subheader="Men"
        />
      </CardContent>
    </Card>
  );
}
