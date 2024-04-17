import Box from "@mui/material/Box/Box";
import dress from "../../assets/shoes.png";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const Background = () => {
  const [displayValue, setDisplayValue] = useState<string>("grid");
  window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop <= 750) {
      setDisplayValue("grid");
    } else {
      setDisplayValue("none");
    }
  });
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
          display: displayValue,
          gridTemplateColumns: { md: "1fr 1fr" },
        }}
      >
        <Box
          sx={{
            display: { sm: "none", xs: "none", md: "block" },
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            component="img"
            src={dress}
            sx={{
              width: "100%",
              margin: "auto 0",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Background;
