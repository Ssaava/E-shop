// @ts-nocheck
import { ArrowBack } from "@mui/icons-material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  handleClose?: () => void;
};
const DrawerList = ({ handleClose }: Props) => {
  return (
    <>
      <List>
        <ListItem key={""}>
          <ListItemButton onClick={handleClose}>
            <ListItemIcon>
              <ArrowBack />
            </ListItemIcon>
            <ListItemText primary={"item"}></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerList;
