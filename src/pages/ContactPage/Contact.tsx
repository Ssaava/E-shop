import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import shoe from "../../assets/shoes.png";
import ContactFormInput from "../../components/ContactUs/ContactFormInput";
import ContactHero from "../../components/ContactUs/ContactHero";
import Background from "../../components/HomeComponents/Background";
import TextUnderlined from "../../components/TextUnderlined";
import { InfoOutlined } from "@mui/icons-material";
const Contact = () => {
  const [formError, setFormError] = useState<boolean>(false);
  console.log(setFormError);
  return (
    <>
      <Background
        sx={{ gridTemplateColumns: "1fr", background: "rgba(0,0,0,0.7)" }}
        bgImg={shoe}
        imgStyles={{ filter: "grayscale(80%)" }}
      />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            marginBlock: "clamp(3rem, 8vw + 2rem, 200px)",
          }}
        >
          <ContactHero />
        </Box>
        <Box sx={{ background: "rgb(245, 247, 249)", paddingBlock: "5rem" }}>
          <Box sx={{ paddingBottom: "4rem" }}>
            <Typography
              sx={{
                textAlign: "center",

                fontweight: "bolder",
              }}
            >
              Have any Queries?
            </Typography>
            <TextUnderlined>We're here to help.</TextUnderlined>
          </Box>
          {/* contact forms */}
          <Box
            sx={{
              paddingInline: "calc(9% - 1rem)",
              backgroundColor: "EAF3FB",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr", sm: "1fr" },
              gap: 5,
            }}
          >
            <Box
              sx={{
                paddingTop: { md: "4rem" },
              }}
            >
              <Typography fontWeight={"bolder"}>
                Don't be a Stringer?
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(1.75rem, 1.5629rem + 1.497vw, 3rem)",
                  fontWeight: "bolder",
                }}
              >
                You tell us. We listen.
              </Typography>
            </Box>
            {/* contact form */}
            <Box sx={{ backgroundColor: "white", padding: 4 }}>
              <Box>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <Stack spacing={3}>
                    <ContactFormInput
                      placeHolder="NAME"
                      formError={formError}
                    />
                    <ContactFormInput
                      placeHolder="SUBJECT"
                      formError={formError}
                    />
                    <ContactFormInput
                      placeHolder="EMAIL"
                      formError={formError}
                    />
                    <FormControl error>
                      <TextField placeholder="MESSAGE" required />
                      {formError ? (
                        <FormHelperText
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            paddingTop: 2,
                          }}
                        >
                          <InfoOutlined />
                          Please write a message
                        </FormHelperText>
                      ) : (
                        <></>
                      )}
                    </FormControl>
                    <Button
                      type="submit"
                      sx={{
                        width: "fit-content ",
                        backgroundColor: "blue",
                        padding: "5px 20px",
                        color: "white",
                        fontSize: "20px",
                        "&:hover": { color: "white", backgroundColor: "blue" },
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
