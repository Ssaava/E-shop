import Box from "@mui/material/Box/Box";
import ProductInfo from "../components/ProductDetails/ProductInfo.tsx";

const ProductDetails = () => {
  return (
    <>
      <Box component="section" sx={{ paddingInline: "calc(9% - 1rem)" }}>
        <ProductInfo />
      </Box>
    </>
  );
};

export default ProductDetails;
