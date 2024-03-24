import { useState, MouseEvent } from "react";

import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

const settings = ["Item 1"];
type Props = {
  content: string | number;
};
const ShoppingCart = ({ content }: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [cartItems, setCartItems] = useState<number>(0);
  setCartItems(0);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      {/* with the menu */}
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
                sx={{ width: "500px" }}
                key={setting}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))
          ) : (
            <Typography
              sx={{ width: "500px", maxWidth: "100%", textAlign: "center" }}
            >
              No Items in the shopping cart
            </Typography>
          )}
        </Menu>
      </Box>
    </>
  );
};

export default ShoppingCart;
