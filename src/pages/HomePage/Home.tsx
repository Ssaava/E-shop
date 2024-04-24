import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Background from "../../components/HomeComponents/Background";
import HeroSection from "../../components/HomeComponents/HeroSection";
import ProductCard from "../../components/HomeComponents/ProductCard";

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
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              paddingBlock: "clamp(1rem, 8vw - 6rem, 2rem)",
              position: "relative",
              fontSize: "clamp(2rem, -1.6875rem + 8vw, 3rem)",
              "&:after": {
                content: `" "`,
                position: "absolute",
                bottom: "0",
                width: "clamp(5rem, 4.3451rem + 5.2395vw, 9.375rem)",
                height: "2px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "blue",
              },
            }}
          >
            Featured Products
          </Typography>
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
