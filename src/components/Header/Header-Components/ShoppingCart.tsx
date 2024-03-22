import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type Props = {
  content: string | number;
};
const ShoppingCart = ({ content }: Props) => {
  return (
    <>
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <ShoppingCartOutlined sx={{ marginRight: 2, cursor: "pointer" }} />
        <Typography
          variant="caption"
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            // right: 0,
            display: "flex",
            borderRadius: "10px",
            backgroundColor: "red",
            fontWeight: "bold",
            minWidth: "20px",
            padding: "0px 6px",
            height: "20px",
            transform: "scale(1) translate(50%, -50%)",
            transformOrigin: "100% 0% 0px",
          }}
        >
          {content}
        </Typography>
      </Box>
    </>
  );
};

export default ShoppingCart;
