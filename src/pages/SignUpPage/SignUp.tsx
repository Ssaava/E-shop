import { Box, Container, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import blackIcon from "../../assets/black-logo.png";
import LinkButton from "../../components/Header/Header-Components/LinkButton";
import TextInput from "../../components/TextFields/TextInput";
const SignUp = () => {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginBlock: "clamp(1.5rem, 1.1257rem + 2.994vw, 4rem)",
          }}
        >
          <Box>
            <Typography
              component="img"
              src={blackIcon}
              sx={{
                display: "block",

                width: "80px",
                marginInline: "auto",
              }}
            />
          </Box>
          <Box>
            <Typography
              textAlign={"center"}
              fontSize={18}
              marginBlock={2}
              fontWeight={"bold"}
            >
              Welcome to Black Apple Store
            </Typography>
          </Box>
          <Box>
            <Typography textAlign={"center"} marginBottom={2}>
              Create a{" "}
              <Typography component="span" fontWeight={"bold"}>
                BAS
              </Typography>{" "}
              account.
            </Typography>
          </Box>
          <TextInput label="Email*" />
          <TextInput label="Mobile Number*" />
          <TextInput label="Password*" />
          <TextInput label="Repeat Password*" />

          <Box>
            <LinkButton
              toLink="/"
              buttonStyling={{
                backgroundColor: "blue",
                color: "white",
                width: "100%",
                boxShadow: "unset",
                marginBlock: 2,
                paddingBlock: "15px",
                "&:hover": { background: "blue", color: "white" },
              }}
            >
              Create Account
            </LinkButton>
          </Box>

          <Box>
            <Typography>
              Do have account?{" "}
              <Link to="/sign-in" component={NavLink}>
                Sign-In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default SignUp;
