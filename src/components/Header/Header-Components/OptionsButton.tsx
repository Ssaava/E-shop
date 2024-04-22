import { Button, Link, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  children: JSX.Element | string;
  handleSignIn: () => void;
  toLink: string;
};

const OptionsButton = ({ children, handleSignIn, toLink }: Props) => {
  return (
    <>
      <Link
        component={NavLink}
        to={toLink}
        onClick={handleSignIn}
        sx={{
          textDecoration: "none",
          color: "grey",
          "&:hover": { color: "black" },
        }}
      >
        <MenuItem>
          <Button
            variant="contained"
            sx={{
              maxWidth: "200px",
              width: "100%",
              marginInline: "auto",
            }}
          >
            {children}
          </Button>
        </MenuItem>
      </Link>
    </>
  );
};

export default OptionsButton;
