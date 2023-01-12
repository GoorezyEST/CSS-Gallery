import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { colorBlue, colorGreen, colorYellow, colorRed } from "./colors";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const { i18n } = useTranslation();

  const [activeLng, setActiveLng] = useState(
    localStorage.getItem("activeLng") || "en"
  );
  const [activeColor, setActiveColor] = useState(
    localStorage.getItem("activeColor") || "b"
  );

  function updateLanguage(newLanguage) {
    setActiveLng(newLanguage);
    localStorage.setItem("activeLng", newLanguage);
  }
  function updateColor(newColor) {
    setActiveColor(newColor);
    localStorage.setItem("activeColor", newColor);
  }

  useEffect(() => {
    const lngExist = window.localStorage.getItem("activeLng");
    if (lngExist !== null) {
      setActiveLng(lngExist);
      switch (lngExist) {
        case "en":
          i18n.changeLanguage("en");
          break;
        case "es":
          i18n.changeLanguage("es");
          break;
        default:
          i18n.changeLanguage("en");
      }
    }
    const colorExist = window.localStorage.getItem("activeColor");
    if (colorExist !== null) {
      setActiveColor(colorExist);
      switch (colorExist) {
        case "b":
          colorBlue();
          break;
        case "r":
          colorRed();
          break;
        case "g":
          colorGreen();
          break;
        case "p":
          colorYellow();
          break;
        default:
          colorBlue();
      }
    }
  }, [i18n]);

  return (
    <SettingsContext.Provider
      value={{
        activeLng,
        setActiveLng: updateLanguage,
        activeColor,
        setActiveColor: updateColor,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
