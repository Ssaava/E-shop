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
        <Typography
          textAlign={"left"}
          sx={{
            fontSize: "clamp(1.125rem, 1.0501rem + 0.5988vw, 1.625rem)",
            fontWeight: "bold",
          }}
        >
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
