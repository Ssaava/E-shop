import { useState, MouseEvent } from "react";
import "./ShoppingCart.css";

import { ShoppingCartOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiMenu: {
      // defaultProps: {
      //   disableTop: true,
      // },
      styleOverrides: {
        root: {
          top: 0,
          right: 0,
          // background: "red",
        },
      },
    },
  },
});
const settings = ["Item 1"];
type Props = {
  content: string | number;
};
const ShoppingCart = ({ content }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [cartItems, setCartItems] = useState<number>(0);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setCartItems(0);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      {/* with the menu */}
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open Cart">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShoppingCartOutlined
                  sx={{ marginRight: 2, cursor: "pointer", color: "#fff" }}
                />
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
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            id="cart-appbar"
            anchorEl={anchorElUser}
            // anchorOrigin={{
            //   vertical: "bottom",
            //   horizontal: "right",
            // }}
            keepMounted
            // transformOrigin={{
            //   vertical: "top",
            //   horizontal: "left",
            // }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {cartItems != 0 ? (
              settings.map((setting) => (
                <MenuItem
                  // sx={{ width: "500px" }}
                  key={setting}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))
            ) : (
              <Typography
                sx={{
                  // width: "500px",
                  // maxWidth: "100%",
                  textAlign: "center",
                  // backgroundColor: "red",
                }}
              >
                No Items in the shopping cart
              </Typography>
            )}
          </Menu>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ShoppingCart;
