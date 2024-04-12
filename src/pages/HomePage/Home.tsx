import Box from "@mui/material/Box";
import HeroSection from "../../components/HomeComponents/HeroSection";
import Background from "../../components/HomeComponents/Background";
import { Grid, Typography } from "@mui/material";
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
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              paddingBlock: "clamp(1rem, 8vw - 6rem, 2rem)",
              borderBottom: "2px solid blue",
              fontSize: "clamp(2rem, -1.6875rem + 8vw, 3rem)",
            }}
          >
            Featured Products
          </Typography>
          {/* Products go here */}
          <Box sx={{ marginBlock: 8, width: "100%" }}>
            <Grid
              container
              spacing={2}
              // sx={{ background: "red", padding: "unset" }}
            >
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard />
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
              <ProductCard /> <ProductCard />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
