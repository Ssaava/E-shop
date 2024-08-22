import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          paddingInline: "calc(9% - 1rem)",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", sm: "1fr" },
        }}
      >
        <Box
          sx={{
            background: "#fff",
            paddingInline: "clamp(2.5rem, 2.4064rem + 0.7485vw, 3.125rem)",
            paddingBlock: "clamp(3.125rem, 2.9379rem + 1.497vw, 4.375rem)",
          }}
        >
          <Typography
            sx={{
              fontSize: "clamp(1.75rem, 1.5629rem + 1.497vw, 3rem)",
              fontWeight: "bolder",
              position: "relative",
              textAlign: { md: "left", xs: "center" },
              marginBottom: "clamp(1.25rem, 1.0629rem + 1.497vw, 2.5rem)",
              "&:before": {
                content: `""`,
                width: "6.25rem",
                height: "0.25rem",
                background: "blue",
                position: "absolute",
                left: { md: 0, xs: "50%" },
                transform: { md: "unset", xs: "translateX(-50%)" },
                top: -20,
                marginInline: { md: "unset", xs: "auto" },
              },
            }}
          >
            Who We Are
          </Typography>

          <Box>
            Welcome to Black Apple Store
            {/* {" "} */}
            {/* <Link component={NavLink} to={"/"} sx={{ color: "black" }}> */}
            BAS
            {/* </Link> */}! We're passionate about fashion and offer curated
            collections for
            {/* {" "} */}
            {/* <Link component={NavLink} to={"/"} sx={{ color: "black" }}> */}
            women
            {/* </Link>
            ,{" "} */}
            {/* <Link component={NavLink} to={"/"} sx={{ color: "black" }}> */}
            men
            {/* </Link> */}
            {/* ,{" "} */}
            {/* <Link component={NavLink} to={"/"} sx={{ color: "black" }}> */}
            children
            {/* </Link> */}, and
            {/* <Link component={NavLink} to={"/"} sx={{ color: "black" }}> */}
            jewelry
            {/* </Link>{" "} */}
            enthusiasts. Our goal is to empower individuals to express their
            unique style with confidence. From timeless classics to the latest
            trends, we've got something for everyone. Join our inclusive
            community and let's celebrate fashion together!
          </Box>
        </Box>
        {/* Staff image */}
        <Box sx={{ background: "#fff" }}>
          {/* <Box>About the company info</Box> */}
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
