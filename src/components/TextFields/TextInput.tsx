import Box from "@mui/material/Box/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";

type Props = {
  label: string;
  name: string;
  errorMessage?: string;
};
const TextInput = ({ label, name, errorMessage }: Props) => {
  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <Box>
          <TextField
            id="outlined-basic"
            label={label}
            name={name}
            variant="outlined"
            fullWidth
            sx={{ marginBlock: 2 }}
            required
          />
        </Box>
        <FormHelperText id="my-helper-text" sx={{ display: "none " }}>
          {errorMessage}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default TextInput;
