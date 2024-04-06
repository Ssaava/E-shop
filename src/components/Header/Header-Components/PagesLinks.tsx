import { Box, Button } from "@mui/material";

type Props = {
  pages: string[];
};
const PagesLinks = ({ pages }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page: string) => (
        <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default PagesLinks;
