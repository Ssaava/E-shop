import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

type Props = {
  handleOpenNavMenu: object;
  anchorElNav: HTMLElement;
  companyInfo: string[];
  pages: string[] | number[];
};
const Categories = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
  companyInfo,
  pages,
}: Props) => {
  return (
    <>
      {/* display the categories links */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            <Divider />
            {companyInfo.map((info: number | string) => {
              return (
                <MenuItem key={info.title} onClick={handleCloseNavMenu}>
                  <Link
                    component={NavLink}
                    to={info.infolink}
                    sx={{
                      cursor: "pointer",
                      marginRight: info.marginRight,
                      textAlign: "center",
                    }}
                  >
                    {info.title}
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Categories;
