// @ts-nocheck
import { MouseEvent, useState } from "react";
import "./ShoppingCart.css";

import { ShoppingCartOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DrawerList from "./DrawerList";
import LinkButton from "./LinkButton";

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
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "300px",
          // minWidth: "100%",
        },
      },
    },
  },
});
type Props = {
  content: string | number;
};
const ShoppingCart = ({ content }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [toggleDrawerOpen, setToggleDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<object>({});

  console.log(anchorElUser);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseDrawer = () => {
    setToggleDrawerOpen(false);
    setCartItems({});
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
                    width: { xs: "10px", md: "auto" },
                  }}
                  onClick={() => setToggleDrawerOpen(true)}
                >
                  <ShoppingCartOutlined
                    sx={{
                      marginRight: 2,
                      cursor: "pointer",
                      color: "#fff",
                      width: { xs: "28px" },
                      height: { xs: "28px" },
                    }}
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
            <Typography sx={{ padding: "1.2rem" }}>Shopping Cart</Typography>
            <Divider />
            {cartItems ? (
              <DrawerList handleClose={() => handleCloseDrawer()} />
            ) : (
              <>
                <ListItemButton>
                  <ListItem
                    sx={{
                      width: "fit-content",
                      marginInline: "auto",
                    }}
                  >
                    No Products in the Cart
                  </ListItem>
                </ListItemButton>
                <Box sx={{ padding: "1.2rem" }}>
                  <LinkButton
                    toLink="/"
                    handleClose={() => handleCloseDrawer()}
                    buttonStyling={{
                      background: "blue",
                      "&:hover": {
                        background: "blue",
                      },
                      width: "100%",
                      paddingBlock: "1rem",
                      color: "white",
                    }}
                  >
                    Continue Shopping
                  </LinkButton>
                </Box>
              </>
            )}
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ShoppingCart;
