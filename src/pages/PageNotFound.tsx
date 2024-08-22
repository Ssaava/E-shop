
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ItemCard from "../components/PageNotFoundComponents/ItemCard.tsx";
import Message from "../components/PageNotFoundComponents/Message.tsx";
import {useOutletContext} from "react-router-dom";
import {useEffect} from "react";
const PageNotFound = () => {
    // @ts-ignore
    const [setBgHeader] = useOutletContext();
    useEffect(() => {
        setBgHeader("rgba(0,0,0,1)");
        return
    }, []);
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          paddingBlock: 5,
          background:
            "linear-gradient(180deg, #0a99dc, rgba(7,200,239,1), rgba(255,255,255,1) 100%)",
        }}
      >
        <Message />
      </Box>
      <Box sx={{ paddingBlock: 4 }}>
        <Typography variant="body1" textAlign="center" fontSize={28}>
          Let's get you back on track...
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: "wrap",
            width: "100%",
            gap: 2,
            paddingBlock: 2,
          }}
        >
          <ItemCard />
          <ItemCard />
        </Box>
      </Box>
    </>
  );
};

export default PageNotFound;
