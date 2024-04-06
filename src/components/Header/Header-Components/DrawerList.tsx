import { ArrowBack } from "@mui/icons-material";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const DrawerList = () => {
  return (
    <>
      <Box sx={{ width: { xs: 250, md: 400 } }}>
        <List>
          <ListItem key={""}>
            <ListItemButton onClick={() => console.log()}>
              <ListItemIcon>
                <ArrowBack />
              </ListItemIcon>
              <ListItemText primary={"item"}></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default DrawerList;
