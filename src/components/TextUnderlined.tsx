import Typography from "@mui/material/Typography/Typography";

const TextUnderlined = ({ children }: { children: JSX.Element | string }) => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          paddingBottom: "clamp(1rem, 8vw - 6rem, 2rem)",
          position: "relative",
          fontSize: "clamp(2rem, -1.6875rem + 8vw, 3rem)",
          fontWeight: "bolder",
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
        {children}
      </Typography>
    </>
  );
};

export default TextUnderlined;
