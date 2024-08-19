// @ts-nocheck
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import logo from "../../../assets/black-logo.png";
import Logo from "../../Header/Header-Components/Logo";
import FooterForm from "./FooterForm";
import FooterLinks from "./FooterLinks";
import { NavLink } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          display: "block",
          textDecoration: "none",
          color: "grey",
          "&:hover": {
            color: "black",
          },
        },
      },
    },
  },
});

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
            <Box
              sx={{
                fontSize: "clamp(1rem, 0.9626rem + 0.2994vw, 1.25rem)",
                fontWeight: "bolder",
              }}
            >
              The best look anytime, anywhere.
            </Box>
          </Box>
          <ThemeProvider theme={theme}>
            <FooterLinks title="For Her">
              <>
                <Link to="/" component={NavLink}>
                  Women Jeans
                </Link>
                <Link to="/" component={NavLink}>
                  Tops and Shirts
                </Link>
                <Link to="/" component={NavLink}>
                  Women Jackets
                </Link>
                <Link to="/" component={NavLink}>
                  Heels and Flats
                </Link>
                <Link to="/" component={NavLink}>
                  Women Accessories
                </Link>
              </>
            </FooterLinks>
            <FooterLinks title="For Him">
              <>
                <Link to="/" component={NavLink}>
                  Men Jeans
                </Link>
                <Link to="/" component={NavLink}>
                  Men Shirts
                </Link>
                <Link to="/" component={NavLink}>
                  Men Jackets
                </Link>
                <Link to="/" component={NavLink}>
                  Men Shoes
                </Link>
                <Link to="/" component={NavLink}>
                  Men Accessories
                </Link>
              </>
            </FooterLinks>{" "}
          </ThemeProvider>
          <FooterForm />
        </Box>
      </Box>
    </>
  );
};

export default FooterItems;
