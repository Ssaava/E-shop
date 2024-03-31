import { Box, Button } from "@mui/material";

type Props = {
  pages: string[];
  handleCloseNavMenu: () => void;
};
const PagesLinks = ({ pages, handleCloseNavMenu }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page: string) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default PagesLinks;
