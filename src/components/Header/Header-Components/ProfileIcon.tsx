import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
const ProfileIcon = () => {
  return (
    <>
      <Tooltip title="Profile">
        <IconButton sx={{ p: 0, display: { xs: "none", md: "flex" } }}>
          <Avatar alt="Remy Sharp" sx={{ color: "black" }} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ProfileIcon;
