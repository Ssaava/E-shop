import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

const Message = () => {
  return (
    <>
      <Box sx={{}}>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: "7rem" }} />
      </Box>
      <Typography variant="body1" fontSize={34}>
        Sorry, we can't find the page your looking for
      </Typography>
    </>
  );
};

export default Message;
