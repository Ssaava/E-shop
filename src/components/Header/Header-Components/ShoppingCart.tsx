import { useState, MouseEvent } from "react";
import "./ShoppingCart.css";

import { ShoppingCartOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Drawer, ListItem, ListItemButton } from "@mui/material";
import DrawerList from "./DrawerList";

const theme = createTheme({
  components: {
    MuiMenu: {
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
const cartItems = ["Item 1"];
type Props = {
  content: string | number;
};
const ShoppingCart = ({ content }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [toggleDrawerOpen, setToggleDrawerOpen] = useState<boolean>(false);
  const [cartItemsTotal, setCartItems] = useState<number>(cartItems.length);

  console.log(anchorElUser);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseDrawer = () => {
    setToggleDrawerOpen(false);
  };
  return (
    <>
      {/* with the menu */}
      <ThemeProvider theme={theme}>
        <Box>
          <Tooltip title="Open Cart">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    minWidth: "unset",
                    padding: "unset",
                    position: "relative",
                  }}
                  onClick={() => setToggleDrawerOpen(true)}
                >
                  <ShoppingCartOutlined
                    sx={{ marginRight: 2, cursor: "pointer", color: "#fff" }}
                  />

                  <Typography
                    variant="caption"
                    component="span"
                    sx={{
                      position: "absolute",
                      top: "-10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                      backgroundColor: "red",
                      fontWeight: "bold",
                      width: "20px",
                      height: "20px",
                      color: "white",
                    }}
                  >
                    {content}
                  </Typography>
                </Button>
              </Box>
            </IconButton>
          </Tooltip>

          {/* drawer list items */}
          <Drawer
            open={toggleDrawerOpen}
            onClose={() => handleCloseDrawer()}
            anchor="right"
          >
            {cartItemsTotal != 0 ? (
              <DrawerList />
            ) : (
              <ListItemButton onClick={() => handleCloseDrawer()}>
                <ListItem>No Items in the shopping cart</ListItem>
              </ListItemButton>
            )}
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ShoppingCart;
