import Box from "@mui/material/Box/Box";

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
        }}
      ></Box>
    </>
  );
};

export default Background;
