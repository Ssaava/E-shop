// @ts-ignore
import { Box, Container, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import blackIcon from "../assets/black-logo.png";
import LinkButton from "../components/Header/Header-Components/LinkButton.tsx";
import TextInput from "../components/TextFields/TextInput.tsx";
const SignIn = () => {
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
              Type your e-mail or phone number to log into your{" "}
              <Typography component="span" fontWeight={"bold"}>
                BAS
              </Typography>{" "}
              account.
            </Typography>
          </Box>

          <TextInput label="Email or Mobile Number*" />
          <TextInput label="Password*" />
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
              Continue
            </LinkButton>
          </Box>

          <Box>
            <Typography>
              Do not have account yet?{" "}
              <Link to="/sign-up" component={NavLink}>
                Sign-Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default SignIn;
