// @ts-nocheck
import Typography from "@mui/material/Typography/Typography";

type Props = {
  children?: JSX.Element | string;
};
const HeroText = ({ children }: Props) => {
  return (
    <>
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
        {children}
      </Typography>
    </>
  );
};

export default HeroText;
