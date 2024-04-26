import Background from "../../components/HomeComponents/Background";
import shoe from "../../assets/shoes.png";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const Contact = () => {
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
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(2rem, 0.3rem + 8vw, 3.375rem)",
                md: "clamp(2.5rem, -1.6875rem + 8vw, 4.5rem)",
              },
              textAlign: "center",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Contact Us
          </Typography>
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
            <Typography
              sx={{
                textAlign: "center",
                paddingBottom: "clamp(1rem, 8vw - 6rem, 2rem)",
                position: "relative",
                fontSize: "clamp(2rem, -1.6875rem + 8vw, 3rem)",
                fontweight: "bolder",
                "&:after": {
                  content: `" "`,
                  position: "absolute",
                  bottom: "0",
                  width: "clamp(5rem, 4.3451rem + 5.2395vw, 9.375rem)",
                  height: "2px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "blue",
                },
              }}
            >
              We're here to help.
            </Typography>
          </Box>
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
                background: "red",
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

            <Box sx={{ backgroundColor: "", height: "50px" }}>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
