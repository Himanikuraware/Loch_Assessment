import React, { useState } from "react";
import {
  ColorButton,
  ErrorMessage,
  GridWrapper,
  InputText,
  InviteLinkText,
  SignUpHeading,
  SignupText,
} from "../helpers/styles";

const configJSON = require("../helpers/config");

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSignUp = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Regular expression for a simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(enteredEmail) && enteredEmail.length !== 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleButtonClick = () => {
    window.location.href = configJSON.signUpLink;
  };

  return (
    <GridWrapper item md={6} sm={12} style={{ height: "100vh" }}>
      <SignupText>
        <SignUpHeading>{configJSON.signUpText}</SignUpHeading>
        <div>
          <InputText
            value={email}
            onChange={handleSignUp}
            fullWidth
            variant="outlined"
            label="Your email address"
          />
          {error && <ErrorMessage>{configJSON.errorText}</ErrorMessage>}
        </div>
        <div>
          <ColorButton
            fullWidth
            variant="contained"
            disabled={email.length === 0 || error}
            onClick={handleButtonClick}
          >
            {configJSON.getStarted}
          </ColorButton>
        </div>
        <InviteLinkText>{configJSON.inviteLink}</InviteLinkText>
      </SignupText>
    </GridWrapper>
  );
};

export default LoginPage;
