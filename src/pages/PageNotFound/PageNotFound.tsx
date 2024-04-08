import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import ItemCard from "../../components/ItemCard/ItemCard";
const PageNotFound = () => {
  return (
    <>
      <Box>
        <Icon>Icon</Icon>
        <Typography variant="body1">
          Sorry, we can't find the page your looking for
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">Let's get you back on track...</Typography>
        <ItemCard />
        {/* here will go some cards */}
        {/* <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="item"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List> */}
      </Box>
    </>
  );
};

export default PageNotFound;
