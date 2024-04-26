import Typography from "@mui/material/Typography/Typography";

const ContactHero = () => {
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
        Contact Us
      </Typography>
    </>
  );
};

export default ContactHero;
