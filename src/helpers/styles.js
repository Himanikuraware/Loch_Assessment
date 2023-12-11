import { Grid, styled, Button, TextField } from "@mui/material";

const GridWrapper = styled(Grid)(({ theme }) => ({
  height: "100%",

  "@media(max-width: 899px)": {
    maxHeight: "500px !important",
  },
}));

const SignupText = styled("div")(({ theme }) => ({
  position: "relative",
  top: "50%",
  transform: "translate(0, -50%)",
  margin: "auto",
  width: "50%",
  "@media(max-width: 1200px)": {
    width: "calc(100% - 100px)",
    padding: "0 50px",
  },
}));

const SignUpHeading = styled("h1")(({ theme }) => ({
  color: " #B0B1B3",
  width: "80%",
  fontFamily: "Inter !important",
  fontSize: "39px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "120%",
  marginBottom: "32px",
}));

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  marginTop: "18px",
  padding: "18px 28px",
  marginBottom: "18px",
  textTransform: "none",
  borderRadius: "8px",
  color: "var(--White, #FFF)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "120%",
  border: "1px solid var(--grey-900, #19191A)",
  background: "var(--grey-900, #19191A)",
  "&:hover": {
    backgroundColor: "black",
  },
}));

const InviteLinkText = styled("span")(({ theme }) => ({
  color: "var(--grey-900, #19191A)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "120%",
  width: "100%",
  display: "block",
  marginTop: "30px",
}));

const ErrorMessage = styled("span")(({ theme }) => ({
  color: "red",
  fontSize: "12px",
  marginTop: "8px",
}));

const InputText = styled(TextField)(({ theme }) => ({
  border: "0",
  marginBottom: "15px",
  '& input[type="text"]': {
    borderRadius: "8px",
    border: "1px solid var(--grey-100, #E5E5E6)",
    background: "#FFF",
    boxShadow:
      "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
    padding: "20px 24px",
  },
}));
export {
  GridWrapper,
  SignupText,
  SignUpHeading,
  ColorButton,
  InviteLinkText,
  ErrorMessage,
  InputText,
};
