import { InfoOutlined } from "@mui/icons-material";
import { FormControl, FormHelperText, Input, TextField } from "@mui/material";

type Props = {
  formError?: boolean;
  errorMessage?: string;
  placeHolder?: string;
  type?: string;
};
type FormError = {
  formError: boolean;
};
const ContactFormInput = ({
  formError,
  errorMessage,
  placeHolder,
  type = "text",
}: Props) => {
  return (
    <>
      <FormControl error>
        <Input
          placeholder={placeHolder}
          required
          type={type}
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
export const FormMessage = ({ formError }: FormError) => {
  return (
    <>
      <FormControl error>
        <TextField placeholder="MESSAGE" required />
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
            Please write a message
          </FormHelperText>
        ) : (
          <></>
        )}
      </FormControl>
    </>
  );
};

export default ContactFormInput;
