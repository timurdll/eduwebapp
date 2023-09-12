import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "firebase/auth";
import { PROFILE_ROUTE, SIGNUP_ROUTE } from "../../utils/consts";
import { UserAuth } from "../../../Context/AuthContext";
import "./signin.css";
import { useTranslation } from "react-i18next";
import { FormHelperText } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase-config";

export default function SignIn() {
  const { signin } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navigate(PROFILE_ROUTE);
    } catch (e) {
      console.log(e);
      setError(t(`${e.code}`));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Handle the result and navigation as needed
      const user = result.user;
      console.log("Google Sign-In Successful", user);
      navigate(PROFILE_ROUTE);
    } catch (error) {
      console.error("Google Sign-In Error", error);
      setError(t("google_sign_in_error")); // Display an error message to the user
    }
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      {/* Your input fields for email and password */}
      <div>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="password"
          name="password"
          label={t("password")}
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          {t("log_in")}
        </Button>
      </div>

      {/* Google Sign-In button */}
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleGoogleSignIn}
        >
          {t("sign_in_with_google")}
        </Button>
      </div>

      <div>
        <Link component={RouterLink} to={SIGNUP_ROUTE} underline="none">
          {t("sign_up")}
        </Link>
      </div>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </form>
  );
}
