import Box from "@mui/material/Box";
import shoe from "../../assets/shoes.png";
import Background from "../../components/HomeComponents/Background";
import HeroSection from "../../components/HomeComponents/HeroSection";
import ProductCard from "../../components/HomeComponents/ProductCard";
import TextUnderlined from "../../components/TextUnderlined";

const Home = () => {
  return (
    <>
      {/* The Home Page */}
      <Box
        sx={{
          paddingInline: "calc(18% - 2.5rem)",
          width: "100vw",
          margin: "auto 0",
          background:
            "linear-gradient(to top,rgba(82, 91, 23, 0.25), rgba(0,0,0,0.3), rgba(255,255,255,0))",
        }}
      >
        <Background
          sx={{
            backgroundColor: "#166894",
            gridTemplateColumns: { md: "1fr 1fr" },
          }}
          bgImg={shoe}
        />
        <HeroSection />
        {/* items section */}
      </Box>
      <Box
        sx={{
          background: "rgb(245, 247, 249)",
          paddingBlock: "4rem",
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Box>
          <TextUnderlined>Featured Products</TextUnderlined>
          {/* Products go here */}
          <Box
            sx={{ marginBlock: 8, width: "100%", backgroundColor: "F5F7F9" }}
          >
            <Box
              sx={{
                padding: "unset",
                display: "grid",
                gridTemplateColumns: {
                  md: "repeat(5, 1fr)",
                  sm: "repeat(3, 1fr)",
                  xs: "repeat(2, 1fr)",
                },
                gap: { xs: 1, sm: 2 },
              }}
            >
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
