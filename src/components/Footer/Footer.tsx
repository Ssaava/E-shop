import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Logo from "../Header/Header-Components/Logo";

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
          paddingBlock: 10,
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
          paddingBlock: 10,
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(4, 1fr)",
              sm: "2fr repeat(3, 1fr)",
              xs: "1fr",
            },
          }}
        >
          <Box>
            <Box
              sx={{
                paddingBlock: 5,
              }}
            >
              <Logo />
            </Box>
            <Box>The best look anytime, anywhere.</Box>
          </Box>
          <Box>xs=4</Box>
          <Box>xs=4</Box>
          <Box>xs=8</Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingBlock: 10,
          paddingInline: "calc(9% - 1rem)",
        }}
      >
        <Box>Copyright © 2024 Black Apple Store. Powered by BlackApple.</Box>
        <Box></Box>
      </Box>
    </Box>
  );
}
