import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../../assets/black-logo.png";
import Logo from "../../Header/Header-Components/Logo";
import FooterForm from "./FooterForm";
import FooterLinks from "./FooterLinks";

const FooterItems = () => {
  return (
    <>
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

          <FooterLinks title="For Her">
            <>
              <Typography>Women Jeans</Typography>
              <Typography>Tops and Shirts</Typography>
              <Typography>Women Jackets</Typography>
              <Typography>Heels and Flats</Typography>
              <Typography>Women Accessories</Typography>
            </>
          </FooterLinks>
          <FooterLinks title="For Him">
            <>
              <Typography>Men Jeans</Typography>
              <Typography>Men Shirts</Typography>
              <Typography>Men Jackets</Typography>
              <Typography>Men Shoes</Typography>
              <Typography>Men Accessories</Typography>
            </>
          </FooterLinks>
          <FooterForm />
        </Box>
      </Box>
    </>
  );
};

export default FooterItems;
