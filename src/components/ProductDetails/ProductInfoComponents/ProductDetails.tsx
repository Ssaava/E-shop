import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Divider from "@mui/material/Divider/Divider";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: 0,
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
          <Box sx={{ display: "flex" }}>
            <TextField id="outlined-number" type="number" defaultValue={"1"} />
            <Button>Add to Cart</Button>
          </Box>
          <Divider />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ProductDetails;
