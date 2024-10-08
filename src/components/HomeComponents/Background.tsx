import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
type Props = { bgImg?: string; sx?: object; imgStyles?: object };

// takes the sx parameter, and it is a grid container, u need to specify the grid template columns
const Background = ({ bgImg, sx, imgStyles }: Props) => {
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
          ...sx,
          display: { md: displayValue },
          width: "100vw",
          height: "100vh",
          position: { xs: "absolute", md: "fixed" },
          top: 0,
          left: 0,
          zIndex: -1,
          margin: 0,
        }}
      >
        <Box
          sx={{
            display: { sm: "none", xs: "none", md: "block" },
          }}
        ></Box>

        {/* display bg image if present else no image */}
        {bgImg && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              component="img"
              src={bgImg}
              sx={{
                width: "100%",
                margin: "auto 0",
                ...imgStyles,
              }}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Background;
