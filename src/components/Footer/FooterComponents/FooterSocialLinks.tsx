import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Box from "@mui/material/Box/Box";

const FooterSocialLinks = () => {
  return (
    <>
      <Box
        sx={{
          paddingBlock: 7,
          paddingInline: "calc(9% - 1rem)",
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: 2,
        }}
      >
        <Box sx={{ flexBasis: { sm: "50%" } }}>
          Copyright © 2024 Black Apple Store. Powered by BlackApple.
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Facebook />
          <YouTube />
          <Instagram />
          <Twitter />
          <Google />
        </Box>
      </Box>
    </>
  );
};

export default FooterSocialLinks;
