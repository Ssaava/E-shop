import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import shoe from "../../assets/shoes.png";
import ContactForm from "../../components/ContactPageComponents/ContactForm";
import HeroText from "../../components/ContactPageComponents/HeroText";
import Background from "../../components/HomeComponents/Background";
import TextUnderlined from "../../components/TextUnderlined";
const Contact = () => {
  const [formError, setFormError] = useState<boolean>(false);

  console.log(setFormError);
  return (
    <>
      <Background
        sx={{ gridTemplateColumns: "1fr", background: "#166894" }}
        bgImg={shoe}
      />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            paddingBlock: "clamp(3rem, 8vw + 2rem, 200px)",
            background:
              "linear-gradient(to top,rgba(82, 91, 23, 0.25), rgba(0,0,0,0.3), rgba(255,255,255,0))",
          }}
        >
          <HeroText>Contact Us</HeroText>
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
            {/* contact form on the right*/}
            <ContactForm formError={formError} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
