
// @ts-nocheck
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const FooterForm = () => {
  return (
    <>
      <Box>
        <Typography component="h4" variant="h1" marginBottom={2} fontSize={18}>
          SubScribe
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="your email address..."
            variant="outlined"
            sx={{ borderRadius: "unset", marginBottom: 2 }}
          />
          <Button
            color={"primary"}
            variant="contained"
            sx={{
              color: "black",
              borderRadius: "unset",
              boxShadow: "unset",
            }}
          >
            SubScribe
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FooterForm;
