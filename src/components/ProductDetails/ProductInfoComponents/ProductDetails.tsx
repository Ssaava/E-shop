import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingBlock: 5,
          paddingInline: 10,
          width: "40px",
        },
      },
    },
  },
});
const ProductDetails = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Typography>category</Typography>
          <Typography>title</Typography>
          <Typography>price</Typography>
          <Typography>description</Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              marginBlock: 3,
            }}
          >
            <TextField id="outlined-number" type="number" defaultValue={"1"} />
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                boxShadow: "unset",

                "&:hover": { background: "blue", color: "white" },
              }}
            >
              Add to Cart
            </Button>
          </Box>
          <Divider />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ProductDetails;
