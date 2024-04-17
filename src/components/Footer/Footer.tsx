import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FooterItems from "./FooterComponents/FooterItems";
import FooterSocialLinks from "./FooterComponents/FooterSocialLinks";

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
      <FooterItems />
      <Divider />
      <FooterSocialLinks />
    </Box>
  );
}
