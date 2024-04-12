import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "2.5fr 1fr" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            marginBlock: "clamp(3rem, 8vw + 2rem, 200px)",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(2rem, 0.3rem + 8vw, 3.375rem)",
                md: "clamp(2.5rem, -1.6875rem + 8vw, 4.5rem)",
              },
              fontWeight: "bold",
            }}
          >
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
                backgroundColor: "white",
                color: "black",
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

export default HeroSection;
