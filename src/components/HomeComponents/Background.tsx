import Box from "@mui/material/Box/Box";
import dress from "../../assets/shoes.png";
import Typography from "@mui/material/Typography";
const Background = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#166894",
          width: "100vw",
          height: "100vh",
          position: { xs: "absolute", md: "fixed" },
          top: 0,
          left: 0,
          zIndex: -1,
          margin: 0,
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr" },
        }}
      >
        <Box></Box>
        <Box>
          <Typography
            component="img"
            src={dress}
            sx={{
              width: "clamp(29.6875rem, 19.8539rem + 37.9126vw, 56.25rem)",
              display: "block",
              marginInline: "auto",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Background;
