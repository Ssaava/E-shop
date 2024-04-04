import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  cartItemsTotal: number;
  cartItems: string[];
};
const DrawerList = ({ cartItemsTotal = 1, cartItems }: Props) => {
  return (
    <>
      {/* <List
        sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        id="cart-appbar"
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      ></List> */}
      <Box sx={{ width: 400 }}>
        <List>
          {cartItemsTotal != 0 ? (
            cartItems.map((item) => (
              <ListItem key={item}>
                <ListItemButton onClick={() => console.log("")}>
                  <ListItemIcon>
                    <ArrowBack />
                  </ListItemIcon>
                  <ListItemText primary={item}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              No Items in the shopping cart
            </Typography>
          )}
        </List>
      </Box>
    </>
  );
};

export default DrawerList;
