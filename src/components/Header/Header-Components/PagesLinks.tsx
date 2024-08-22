import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { companyInfo, pages } from "../../../assets/utils/PageLinks";
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";

const PagesLinks = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
            {page}
          </Button>
        ))}
      </Box>

      {/* On the right */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
        {companyInfo.map((info) => {
          return (
            <Link
              component={NavLink}
              to={info.infoLink}
              key={info.title}
              sx={{
                marginRight: info.marginRight,
                color: "white",
                textDecoration: "none",
              }}
            >
              {info.title}
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default PagesLinks;
