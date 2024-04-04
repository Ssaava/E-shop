import { useState, MouseEvent } from "react";
import "./ShoppingCart.css";

import { ShoppingCartOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Drawer } from "@mui/material";
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
  const [cartItemsTotal, setCartItems] = useState<number>(0);

  console.log(anchorElUser);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setCartItems(0);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseDrawer = () => {
    setToggleDrawerOpen(false);
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
                <Button
                  sx={{ minWidth: "unset", padding: "unset" }}
                  onClick={() => setToggleDrawerOpen(true)}
                >
                  <ShoppingCartOutlined
                    sx={{ marginRight: 2, cursor: "pointer", color: "#fff" }}
                  />
                </Button>
                <Typography
                  variant="caption"
                  component="span"
                  sx={{
                    position: "absolute",
                    top: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100%",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    width: "20px",
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

          {/* drawer list items */}
          <Drawer
            open={toggleDrawerOpen}
            onClose={() => handleCloseDrawer()}
            anchor="right"
          >
            <DrawerList cartItemsTotal={cartItemsTotal} cartItems={cartItems} />
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ShoppingCart;
