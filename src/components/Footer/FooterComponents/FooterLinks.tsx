import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactElement } from "react";

type Props = {
  title: string;
  children: ReactElement;
};
const FooterLinks = ({ children, title }: Props) => {
  return (
    <>
      <Box sx={{ marginBottom: { xs: 2 } }}>
        <Typography
          component="h4"
          variant="h1"
          sx={{ marginBottom: { xs: 0, sm: 2 } }}
          fontSize={18}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </>
  );
};

export default FooterLinks;
