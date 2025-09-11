import Box from "@mui/material/Box";
import shoe from "../assets/shoes.png";
import Background from "../components/HomeComponents/Background.tsx";
import DealsCard from "../components/HomeComponents/DealsCard.tsx";
import FeaturedProducts from "../components/HomeComponents/FeaturedProducts.tsx";
import HeroSection from "../components/HomeComponents/HeroSection.tsx";
import TextUnderlined from "../components/TextUnderlined.tsx";
import Grid from "@mui/material/Grid";

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

      {/* deals */}
      <Box
        sx={{
          background: "white",
          paddingBlock: "4rem",
          paddingInline: "calc(18% - 2.5rem)",
        }}
      >
        <TextUnderlined>Deals and Offers</TextUnderlined>

        <Grid marginTop={"3rem"} container gap={4}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <DealsCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <DealsCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <DealsCard />
          </Grid>
        </Grid>
        <Box
          sx={{ display: "grid", gridTemplateColumns: 3, gap: "0.8rem" }}
        ></Box>
      </Box>
      <Box
        sx={{
          background: "rgb(245, 247, 249)",
          paddingBlock: "4rem",
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        {/* featured products */}

        <FeaturedProducts />
      </Box>
    </>
  );
};

export default Home;
