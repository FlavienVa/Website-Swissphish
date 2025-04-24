import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/*import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';*/
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const savedLanguage = localStorage.getItem("language") || "en";
const resources = {
    en: {
      translation: {
        hero: {
          title: "Your solution against phishing",
          description: "Measure your organization's phishing resilience with realistic simulations and detailed analytics.",
          button: "Request a quote",
        },
        phishingInfo: {
          title: "What is phishing email",
          description1: "Phishing is a form of cybercrime in which criminals try to obtain sensitive information from you by sending you emails with <span>fraudulent links </span>, asking you to fill in a form with your personal details.",
          description2: "It is one of the most common attacks, is easy to carry out and can have a huge impact on individuals and businesses.",
        },
        whatWeDo: {
          title: "What do we do",
          description1: "We provide comprehensive phishing simulation and training solutions to help organizations identify vulnerabilities, educate employees, and strengthen their security posture against email-based threats.",
          description2: "Our platform allows you to run realistic phishing simulations, track employee responses, and deliver targeted training to those who need it most, all while providing detailed analytics and reporting.",
        },
        aboutUs: {
          title: "About us",
          justin: "Hello, my name is Justin. I'm currently in my 3rd year of bachelor at EPFL and my goal through this project is to become the best cyber-expert ever. For this, I'm willing to push beyond my capacities and thrive to make the world a little safer. This is the project of a lifetime.",
          flavien: "Hi, my name is Flavien. I am in my last year of bachelor at EPFL and I am trying to make my own contribution in the world. I love cybersecurity and web development. This project is what I value the most and I will work tirelessly to make it better, day by day.",
        },
      },
    },
    fr : {
        translation: {
            hero : {
                title : "Votre solution contre le phishing",
                description : "Mesurez votre résilience contre le phishing grâce à nos simulations réalistiques et analyses détaillées.",
                button : "Demandez un devis"
            },
            phishingInfo: {
                title: "Qu'est-ce qu'un email de phishing",
                description1: "Le phishing est une forme de cybercriminalité dans laquelle des criminels tentent d'obtenir des informations sensibles en vous envoyant des emails avec des <span>liens frauduleux</span>, vous demandant de remplir un formulaire avec vos informations personnelles.",
                description2: "C'est l'une des attaques les plus courantes, facile à réaliser et qui peut avoir un impact énorme sur les individus et les entreprises.",
              },
              whatWeDo: {
                title: "Ce que nous faisons",
                description1: "Nous fournissons des solutions complètes de simulation et de formation au phishing pour aider les organisations à identifier les vulnérabilités, éduquer les employés et renforcer leur posture de sécurité contre les menaces basées sur les emails.",
                description2: "Notre plateforme vous permet de réaliser des simulations de phishing réalistes, de suivre les réponses des employés et de fournir une formation ciblée à ceux qui en ont le plus besoin, tout en offrant des analyses et des rapports détaillés.",
              },
              aboutUs: {
                title: "À propos de nous",
                justin: "Bonjour, je m'appelle Justin. Je suis actuellement en 3ème année de bachelor à l'EPFL et mon objectif à travers ce projet est de devenir le meilleur expert en cybersécurité. Pour cela, je suis prêt à dépasser mes capacités et à rendre le monde un peu plus sûr. C'est le projet d'une vie.",
                flavien: "Bonjour, je m'appelle Flavien. Je suis en dernière année de bachelor à l'EPFL et j'essaie d'apporter ma propre contribution au monde. J'adore la cybersécurité et le développement web. Ce projet est ce que je valorise le plus et je travaillerai sans relâche pour l'améliorer jour après jour.",
              },
        },
    },
    // Add more languages here
  };
i18n
  /*// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.*/
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng : savedLanguage, // default language
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;