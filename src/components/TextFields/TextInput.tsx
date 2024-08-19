// @ts-ignore
import Box from "@mui/material/Box/Box";
// @ts-ignore
import TextField from "@mui/material/TextField";

type Props = {
  label: string;
};
const TextInput = ({ label }: Props) => {
  return (
    <>
      <Box>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          fullWidth
          sx={{ marginBlock: 2 }}
        />
      </Box>
    </>
  );
};

export default TextInput;
