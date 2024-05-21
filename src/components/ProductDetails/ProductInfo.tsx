import Box from "@mui/material/Box";
import ImageCoursel from "./ProductInfoComponents/ImageCoursel";
import ProductDetails from "./ProductInfoComponents/ProductDetails";

const ProductInfo = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(2, 1fr)", sm: "1fr" },
          gap: 4,
          paddingBlock: "clamp(1.5rem, 1.1257rem + 2.994vw, 4rem)",
        }}
      >
        <ImageCoursel />
        <ProductDetails />
      </Box>
    </>
  );
};

export default ProductInfo;
