import { Button, Divider, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Logo from "../Header/Header-Components/Logo";
import logo from "../../assets/black-logo.png";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#fff",
      }}
    >
      <Divider />

      <Box
        sx={{
          paddingBlock: 7,
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Typography textAlign={"left"}>
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingBlock: 7,
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "1.5fr repeat(3, 1fr)",
              sm: "2fr repeat(3, 1fr)",
              xs: "1fr",
            },
          }}
        >
          <Box sx={{ marginBottom: { xs: 2 } }}>
            <Box
              sx={{
                paddingBottom: 3,
              }}
            >
              <Logo src={logo} />
            </Box>
            <Box>The best look anytime, anywhere.</Box>
          </Box>
          <Box sx={{ marginBottom: { xs: 2 } }}>
            <Typography
              component="h4"
              variant="h1"
              fontSize={18}
              sx={{ marginBottom: { xs: 0, sm: 2 } }}
            >
              For Her
            </Typography>
            <Typography>Women Jeans</Typography>
            <Typography>Tops and Shirts</Typography>
            <Typography>Women Jackets</Typography>
            <Typography>Heels and Flats</Typography>
            <Typography>Women Accessories</Typography>
          </Box>
          <Box sx={{ marginBottom: { xs: 2 } }}>
            <Typography
              component="h4"
              variant="h1"
              sx={{ marginBottom: { xs: 0, sm: 2 } }}
              fontSize={18}
            >
              For Him
            </Typography>
            <Typography>Men Jeans</Typography>
            <Typography>Men Shirts</Typography>
            <Typography>Men Jackets</Typography>
            <Typography>Men Shoes</Typography>
            <Typography>Men Accessories</Typography>
          </Box>
          <Box>
            <Typography
              component="h4"
              variant="h1"
              marginBottom={2}
              fontSize={18}
            >
              SubScribe
            </Typography>
            <Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="your email address..."
                  variant="outlined"
                  sx={{ borderRadius: "unset", marginBottom: 2 }}
                />
                <Button
                  color={"primary"}
                  variant="contained"
                  sx={{
                    color: "black",
                    borderRadius: "unset",
                    boxShadow: "unset",
                  }}
                >
                  SubScribe
                </Button>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingBlock: 7,
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Box>Copyright © 2024 Black Apple Store. Powered by BlackApple.</Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
