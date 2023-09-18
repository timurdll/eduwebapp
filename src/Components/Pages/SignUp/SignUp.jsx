import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { FormHelperText } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import { UserAuth } from "../../../Context/AuthContext";
import "./signup.css";
import { useTranslation } from "react-i18next";
import { auth, googleProvider } from "../../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const modules = [
    {
      isBlocked: false,
      isCompleted: false,
      moduleLink: "/vocabulary/1",
      moduleName: "Types of Computer",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Monitors",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Computer Mice",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Whats in your computer",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Keyboards",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Printers",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Data storage devices",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Cameras",
    },
    {
      isBlocked: true,
      isCompleted: false,
      moduleLink: "/vocabulary/2",
      moduleName: "Scanners",
    },
  ];
  const { createUser } = UserAuth();
  const { t } = useTranslation();

  const addUserModules = async (userId, modulesToAdd) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, { modules: modulesToAdd });
      } else {
        await updateDoc(userRef, {
          modules: arrayUnion(...modulesToAdd),
        });
      }
    } catch (error) {
      console.error("Error adding modules to user:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, firstName, lastName, password, modules);
      navigate(PROFILE_ROUTE);
    } catch (e) {
      console.log(e);
      setError(t(`${e.code}`));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: user.displayName,
      });

      try {
        await addUserModules(user.uid, modules);
      } catch (moduleError) {
        console.error("Error adding modules:", moduleError);
      }

      console.log("Google Sign-In Successful", user);
      navigate(PROFILE_ROUTE);
    } catch (error) {
      console.error("Google Sign-In Error", error);
      setError(t("google_sign_in_error"));
    }
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <div>
        <TextField
          id="firstName"
          name="firstName"
          label={t("first_name")}
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="lastName"
          name="lastName"
          label={t("last_name")}
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
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
          {t("sign_up")}
        </Button>
      </div>
      <div>
        <Button className="google-signin-button" onClick={handleGoogleSignIn}>
          <span className="google-icon">G</span> {t("sign_in_with_google")}
        </Button>
      </div>
      <div>
        <Link component={RouterLink} to={LOGIN_ROUTE} underline="none">
          {t("log_in")}
        </Link>
      </div>
      {error && <FormHelperText error>{error}</FormHelperText>}
    </form>
  );
}
