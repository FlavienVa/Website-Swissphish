import React from "react";
import {useTranslation} from "react-i18next";
function Footer() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language dynamically
    localStorage.setItem("language", lng); //saves the selected language in localStorage
  };
  return (
    <footer className="bg-[#1A1A1A] text-white py-8 px-4 border-t border-gray-800">
      <div className="bg-white height-1"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Us Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact us</h3>
          <ul>
            <li className="mb-2">support@swissphish.com</li>
            <li className="mb-2">flavien.valea@swissphish.com</li>
            <li>justin.favey@swissphish.com</li>
          </ul>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <button
          onClick = {() => changeLanguage("fr")}
          >
            Fr
          </button>
          <span>|</span>
          <button onClick={() => changeLanguage("en")}
           //className="text-green-500 hover:underline"
           >
            En
          </button>
        </div>

        {/* Social Media Button */}
        <div>
          <button className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded-lg font-medium transition duration-300">
            Social medias
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
