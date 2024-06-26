import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { companyInfo, pages } from "../../../assets/utils/PageLinks";

type Props = {
  handleCloseDrawer: () => void;
};

const DrawerLinks = ({ handleCloseDrawer }: Props) => {
  return (
    <>
      {/* display the categories links */}
      <Box sx={{ width: { xs: 250, md: 400 } }}>
        <List>
          <ListItem>
            <ListItemButton onClick={() => handleCloseDrawer()}>
              <ListItemIcon>
                <Avatar alt="Remy Sharp" sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          {pages.map((page) => (
            <ListItem key={page}>
              <ListItemButton onClick={() => handleCloseDrawer()}>
                <ListItemText>{page}</ListItemText>
              </ListItemButton>{" "}
            </ListItem>
          ))}
          <Divider />
          {companyInfo.map((info) => {
            return (
              <ListItem key={info.title}>
                <ListItemButton
                  component={NavLink}
                  to={info.infoLink}
                  onClick={() => handleCloseDrawer()}
                >
                  <ListItemIcon>{info.icon}</ListItemIcon>
                  <ListItemText>{info.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default DrawerLinks;
