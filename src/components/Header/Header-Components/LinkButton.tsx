import { Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  children: JSX.Element | string;
  handleClose?: () => void;
  toLink: string;
  linkStyling?: object;
  buttonStyling?: object;
};

const LinkButton = ({
  children,
  handleClose,
  toLink,
  linkStyling,
  buttonStyling,
}: Props) => {
  return (
    <>
      <Link
        component={NavLink}
        to={toLink}
        onClick={handleClose}
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
