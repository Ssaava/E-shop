import Box from "@mui/material/Box";
import TextUnderlined from "../TextUnderlined";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <>
      <Box>
        <TextUnderlined>Featured Products</TextUnderlined>
        <Box sx={{ marginBlock: 8, width: "100%", backgroundColor: "F5F7F9" }}>
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
    </>
  );
};

export default FeaturedProducts;
