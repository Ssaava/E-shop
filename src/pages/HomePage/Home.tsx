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
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingInline: { xs: "5%", md: "10%" },
          }}
        >
          <Typography sx={{ fontSize: { xs: 54, md: 72 }, fontWeight: "bold" }}>
            Raining Offers For Hot Summer!
          </Typography>
          <Typography sx={{ fontSize: 18, marginBlock: 4 }}>
            25% Off On All Products
          </Typography>
          <Box>
            <Button
              color={"primary"}
              variant="contained"
              sx={{
                borderRadius: "unset",
                fontSize: 20,
                marginRight: 2,
                boxShadow: "unset",
              }}
            >
              SHOP NOW
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "unset",
                fontSize: 20,
                boxShadow: "unset",
                border: "1px solid white",
                color: "white",
              }}
            >
              Find More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
