import { InfoOutlined } from "@mui/icons-material";
import { FormControl, Input, FormHelperText } from "@mui/material";

type Props = {
  formError?: boolean;
  errorMessage?: string;
  placeHolder?: string;
};
const ContactFormInput = ({ formError, errorMessage, placeHolder }: Props) => {
  return (
    <>
      <FormControl error>
        <Input
          placeholder={placeHolder}
          required
          type="text"
          sx={{
            border: "2px solid rgb(200, 200, 200)",
            padding: "5px 10px",
            "&::before": {
              display: "none",
            },
            "&:focus-within": {
              outline: "none",
              border: "1px solid rgba(200, 200, 200, 0.5)",
            },
            "&::after": {
              outline: "none",
              border: "none",
            },
          }}
        />
        {formError ? (
          <FormHelperText
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              paddingTop: 2,
            }}
          >
            <InfoOutlined />
            {errorMessage}
          </FormHelperText>
        ) : (
          <></>
        )}
      </FormControl>
    </>
  );
};

export default ContactFormInput;
