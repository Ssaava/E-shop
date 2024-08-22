// @ts-ignore
import Box from "@mui/material/Box";
// @ts-ignore
import Button from "@mui/material/Button";
// @ts-ignore
import Stack from "@mui/material/Stack";
import ContactFormInput, { FormMessage } from "./ContactFormInput";

type Props = {
  formError: boolean;
};
const ContactForm = ({ formError }: Props) => {
  return (
    <>
      <Box sx={{ backgroundColor: "white", padding: 4 }}>
        <Box>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Stack spacing={3}>
              <ContactFormInput
                type="text"
                placeHolder="NAME"
                formError={formError}
              />
              <ContactFormInput
                type="text"
                placeHolder="SUBJECT"
                formError={formError}
              />
              <ContactFormInput
                type="email"
                placeHolder="EMAIL"
                formError={formError}
              />
              <FormMessage formError={formError} />
              <Button
                type="submit"
                sx={{
                  width: "fit-content ",
                  backgroundColor: "blue",
                  padding: "5px 20px",
                  color: "white",
                  fontSize: "20px",
                  "&:hover": { color: "white", backgroundColor: "blue" },
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
