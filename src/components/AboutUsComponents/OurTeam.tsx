// @ts-nocheck
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const OurTeam = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            background: "#fff",
            paddingBlock: "5rem",
            paddingInline: "calc(9% - 1rem)",
          }}
        >
          <Box
            sx={{
              paddingBottom: "4rem",
              width: "clamp(0rem, -7.1856rem + 57.485vw, 48rem)",
              marginInline: "auto",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "clamp(1.0625rem, 1.0344rem + 0.2246vw, 1.25rem)",
                fontweight: "bolder",
                position: "relative",
                marginBottom: "clamp(1.25rem, 1.2126rem + 0.2994vw, 1.5rem)",
                "&:before": {
                  content: `""`,
                  width: "6.25rem",
                  height: "0.25rem",
                  background: "blue",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: -20,
                  marginInline: "auto",
                },
              }}
            >
              A few Words About
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(1.25rem, 1.0629rem + 1.497vw, 2.5rem)",
                fontWeight: "bolder",
                position: "relative",
                textAlign: "center",
                marginBottom: "clamp(1.25rem, 1.0629rem + 1.497vw, 2.5rem)",
              }}
            >
              Our Team
            </Typography>

            <Box>
              <Typography textAlign="center">
                Our team at Black Apple Store BAS is a dedicated group of
                fashion enthusiasts, designers, and customer service experts who
                are passionate about delivering the best shopping experience to
                our customers. With a shared commitment to creativity,
                innovation, and customer satisfaction, we work tirelessly to
                curate stunning collections, provide personalized service, and
                create a welcoming environment for fashion lovers of all ages
                and tastes. Together, we're here to help you express your unique
                style and make every shopping experience memorable.
              </Typography>
            </Box>
          </Box>
          {/* contact forms */}
          {/* <Box
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
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default OurTeam;
