import Box from "@mui/material/Box/Box";
import shoe from "../assets/shoes.png";
import AboutUs from "../components/AboutUsComponents/AboutUs.tsx";
import HeroText from "../components/ContactPageComponents/HeroText.tsx";
import Background from "../components/HomeComponents/Background.tsx";
import OurTeam from "../components/AboutUsComponents/OurTeam.tsx";
import {useOutletContext} from "react-router-dom";
import {useEffect} from "react";
const About = () => {
    // @ts-ignore
    const [setBgHeader] = useOutletContext();
    useEffect(() => {
        setBgHeader("");
        return
    }, []);
  return (
    <>
      <Background
        sx={{
          gridTemplateColumns: "1fr",
          background: "#166894",
        }}
        bgImg={shoe}
      />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            paddingBlock: "clamp(3rem, 8vw + 2rem, 200px)",
            background:
              "linear-gradient(to top,rgba(82, 91, 23, 0.25), rgba(0,0,0,0.3), rgba(255,255,255,0))",
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
