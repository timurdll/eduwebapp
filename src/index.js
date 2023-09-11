import React, { Suspense } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CircularProgress } from "@mui/material";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru', 'kk'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'path', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locale/{{lng}}/translation.json'
    },
  });

  const loadingMarkup = (
    <div className="circular">
      <CircularProgress />
    </div>
  )
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);

