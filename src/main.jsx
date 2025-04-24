import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import "./index.css";
import "./font.css";
// import i18n (needs to be bundled ;)) 
import './i18n';
import App from "./App.jsx";

ReactGA.initialize("G-436G2S0JEB");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
