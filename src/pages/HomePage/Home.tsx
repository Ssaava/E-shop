import Box from "@mui/material/Box";
import HeroSection from "../../components/HomeComponents/HeroSection";
import Background from "../../components/HomeComponents/Background";
const Home = () => {
  return (
    <>
      {/* The Home Page */}
      <Box
        sx={{
          paddingInline: "calc(18% - 2.5rem)",
          width: "100vw",
          margin: "auto 0",
          // height: "max(50vw, 100vh - 117.317px)",
        }}
      >
        <Background />
        <HeroSection />
        {/* items section */}
      </Box>
      <Box
        sx={{
          background: "white",
          paddingBlock: "4rem",
          paddingInline: "calc(18% - 2.5rem)",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        items
      </Box>
    </>
  );
};

export default Home;
