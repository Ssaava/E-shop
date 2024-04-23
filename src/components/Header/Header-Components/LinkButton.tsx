import { Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  children: JSX.Element | string;
  handleSignIn?: () => void;
  toLink: string;
  linkStyling?: object;
  buttonStyling?: object;
};

const LinkButton = ({
  children,
  handleSignIn,
  toLink,
  linkStyling,
  buttonStyling,
}: Props) => {
  return (
    <>
      <Link
        component={NavLink}
        to={toLink}
        onClick={handleSignIn}
        sx={linkStyling}
      >
        <Button
          sx={{
            ...buttonStyling,
          }}
        >
          {children}
        </Button>
      </Link>
    </>
  );
};

export default LinkButton;
