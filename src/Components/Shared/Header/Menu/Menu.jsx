import React, { useState } from "react";
import { Button, MenuItem, Select } from "@mui/material";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SIGNUP_ROUTE,
} from "../../../utils/consts";
import "./menu.css";
import { UserAuth } from "../../../../Context/AuthContext";

const Menu = ({ toggleMenu, menuActive }) => {
  const { t } = useTranslation();
  const { user } = UserAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18next.changeLanguage(event.target.value.toLowerCase());
  };

  const languages = [
    {
      code: "ru",
      name: "RU",
    },
    {
      code: "en",
      name: "EN",
    },
    {
      code: "kk",
      name: "KK",
    },
  ];

  return (
    <div className="menu__wrapper">
      <div className={`menu__container ${menuActive ? "active" : ""}`}>
        <div className="menu__languageDropdown">
          <Select
            color="primary"
            variant="outlined"
            onChange={handleLanguageChange}
            value={selectedLanguage}
            style={{ color: "#1976d2", height: "32px" }}
            size="small"
            MenuProps={{
              style: {
                position: "absolute", // Пример значения, которое может помочь
              },
            }}
          >
            {languages.map(({ code, name }) => (
              <MenuItem key={code} value={code}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="menu__buttons">
          {user ? (
            <>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={PROFILE_ROUTE}
                >
                  {t("profile")}
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outlined" size="small">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={SIGNUP_ROUTE}
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {t("signup")}
                </Link>
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  toggleMenu();
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={LOGIN_ROUTE}
                >
                  {t("login")}
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
