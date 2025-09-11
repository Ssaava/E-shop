import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const DealsCard = () => {
  return (
    <>
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.2)",
          padding: "2rem",
          minHeight: "30rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            height: "fit-content",
          }}
        >
          <Typography
            variant="h2"
            fontSize={"2.5rem"}
            fontWeight={"bolder"}
            color={"white"}
          >
            20% Off On Tank Tops
          </Typography>
          <Typography color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipuscing elit. Proin ac
            dictum
          </Typography>

          <Button
            sx={{
              background: "white",
              paddingInline: "1.2rem",
              paddingBlock: "0.8rem",
              fontWeight: "bold",
              width: "fit-content",
              color: "black",
              ":hover": {
                background: "black",
                color: "white",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DealsCard;
