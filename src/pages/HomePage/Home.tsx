import Box from "@mui/material/Box";
import HeroSection from "../../components/HeroSection/HeroSection";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#166894",
          width: "100vw",
          height: "100vh",
          position: { xs: "absolute", md: "fixed" },
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
          width: "100vw",
          background: "red",
          margin: "auto 0",
          display: "grid",
          gridTemplateColumns: { md: "1.5fr 1fr" },
        }}
      >
        <Box
          sx={{
            color: "white",
            paddingInline: { xs: "5%", md: "10%" },
            background: "green",
            // height: "max(50vw, 100vh - 117.317px)",
          }}
        >
          <HeroSection />
        </Box>
      </Box>

      <Box>height</Box>
    </>
  );
};

export default Home;
