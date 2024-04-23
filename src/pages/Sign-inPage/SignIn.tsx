import { Container, Box, Typography, TextField } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import blackIcon from "../../assets/black-logo.png";
import LinkButton from "../../components/Header/Header-Components/LinkButton";
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
              Type your e-mail or phone number to log in or create a{" "}
              <Typography component="span" fontWeight={"bold"}>
                BAS
              </Typography>{" "}
              account.
            </Typography>
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Email or Mobile Number*"
              variant="outlined"
              fullWidth
              sx={{ marginBlock: 2 }}
            />
          </Box>
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
        </Box>
      </Container>
    </Fragment>
  );
};

export default SignIn;
