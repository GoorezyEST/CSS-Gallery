import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        home_title: "CSS Gallery",
        home_subtitle: "Welcome to my",
        home_slogan: "Bringing beauty to the web, one line of code at a time.",
        home_btn: "MY WORK",

        nav_home: "HOME",
        nav_css: "GALLERY",
        nav_contact: "CONTACT",
        nav_settings: "SETTINGS",

        gallery_title: "CSS Gallery",
        gallery_subtitle: "Let's see the",
        gallery_btn: "Go!",

        contact_title: "Contact Me",
        contact_subtitle: "Here you can",
        contact_linkedin: "Via Linkedin",
        contact_portfolio: "Via my Portfolio",

        settings_subtitle: "Change the",
        settings_title: "Settings",

        error_btn: "RETURN",
      },
    },
    es: {
      translation: {
        home_title: "Galeria CSS",
        home_subtitle: "Bienvenido a mi",
        home_slogan: "Dandole belleza a la web, una linea de codigo a la vez.",
        home_btn: "TRABAJOS",

        nav_home: "INICIO",
        nav_css: "GALERIA",
        nav_contact: "CONTACTO",
        nav_settings: "AJUSTES",

        gallery_title: "Galeria CSS",
        gallery_subtitle: "Vamos a ver la",
        gallery_btn: "Ver",

        contact_title: "Contactarme",
        contact_subtitle: "Aqui tu puedes",
        contact_linkedin: "Por Linkedin",
        contact_portfolio: "Por mi Portafolio",

        settings_subtitle: "Cambia los",
        settings_title: "Ajustes",

        error_btn: "VOLVER",
      },
    },
  },
});
