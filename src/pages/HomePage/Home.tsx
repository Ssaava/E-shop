import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#166894",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          margin: 0,
        }}
      >
        {/* <Typography
          component="img"
          src={woman}
          sx={{
            width: 400,
            display: "block",
            objectFit: "cover",
            marginLeft: "auto",
          }}
        /> */}
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: { md: "1.5fr 1fr" },
        }}
      >
        <Box
          sx={{
            background: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingInline: { xs: "5%", md: "10%" },
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 72, fontWeight: "bold" }}>
            Raining Offers For Hot Summer!
          </Typography>
          <Typography>25% Off On All Products</Typography>
          <Box>
            <Button>SHOP NOW</Button>
            <Button>Find More</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
