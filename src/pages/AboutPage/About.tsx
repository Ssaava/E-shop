import Box from "@mui/material/Box/Box";
import shoe from "../../assets/shoes.png";
import AboutUs from "../../components/AboutUsComponents/AboutUs";
import HeroText from "../../components/ContactUs/HeroText";
import Background from "../../components/HomeComponents/Background";
import OurTeam from "../../components/AboutUsComponents/OurTeam";
const About = () => {
  return (
    <>
      <Background
        sx={{ gridTemplateColumns: "1fr", background: "rgba(0,0,0,0.7)" }}
        bgImg={shoe}
        imgStyles={{ filter: "grayscale(80%)" }}
      />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            marginBlock: "clamp(3rem, 8vw + 2rem, 200px)",
          }}
        >
          <HeroText>About Us</HeroText>
        </Box>
        {/* About us info */}
        <Box sx={{ background: "rgb(245, 247, 249)", paddingBlock: "5rem" }}>
          <AboutUs />
        </Box>
      </Box>

      {/* Our team */}
      <Box>
        <OurTeam />
      </Box>
    </>
  );
};
export default About;
