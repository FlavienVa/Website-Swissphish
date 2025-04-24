import React, { useEffect } from "react";
import Navbar from "../../components/Navbar"; // Your existing navbar component
import Footer from "../../components/Footer"; // Your existing navbar component
import ReactGA from "react-ga4";
import { Trans, useTranslation } from "react-i18next";
import "../../i18n";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import flav_avatart from "../../assets/img/avatar_flavien.png";
import ju_avatar from "../../assets/img/avatar_justin.jpg";
import hero_img from "../../assets/img/hero_img.png";

const HeroSection = () => {
  const {t} = useTranslation();
  return (
    <section className="max-w-full text-white py-40 px-20">
      <div className="container max-w-full mx-auto flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          {" "}
          {/*md == medium display i.e comment le site interprete un élément en fonction de sa taille*/}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hammersmith">
            {t("hero.title")}
          </h1>
          <p className="text-lg mb-8 hammersmith">
          {t("hero.description")}
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            <span>{t("hero.button")}</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Right image positioned to the right */}
        <div className="md:ml-auto md:w-1/3">
          <img
            src={hero_img}
            alt="Cybersecurity illustration"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

const PhishingInfoSection = () => {
  const {t} = useTranslation();
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto  max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
         {t("phishingInfo.title")}
        </h2>
        <p className="text-lg mb-4">
          <Trans i18nKey="phishingInfo.description1"
          components ={{span: <span className="text-green-500" />}}/>
        </p>
        <p className="text-lg">
          {t("phishingInfo.description2")}
        </p>
      </div>
    </section>
  );
};

const WhatWeDoSection = () => {
  const {t} = useTranslation();
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto  max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t("whatWeDo.title")}
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            {t("whatWeDo.description1")}
          </p>
          <p className="text-lg">
            {t("whatWeDo.description2")}
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  const {t} = useTranslation();
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto  max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("aboutUs.title")}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-10 md:space-y-0 md:space-x-16">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="w-36 h-36 bg-gray-300 rounded-full mb-6 overflow-hidden">
              <img
                src={ju_avatar}
                alt="avatar of Justin"
                className="w-full h-full object-cover">
              </img>
            </div>
            <div className="text-center">
              <p className="text-lg mb-4">
                {t("aboutUs.justin")}
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="w-36 h-36 rounded-full mb-6 overflow-hidden">
              <img
                src={flav_avatart}
                alt="avatar_flavien"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-lg mb-4">
                {t("aboutUs.flavien")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function HomePage() {
  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,rgba(78,84,78,1)_0%,rgba(0,0,0,1)_94%)]">
      <Navbar />
      <HeroSection />
      <div className=" w-4/5 border-t-4 border-white mx-auto"></div>{" "}
      <PhishingInfoSection />
      <div className=" w-4/5 border-t-4 border-white mx-auto"></div>{" "}
      <WhatWeDoSection />
      <div className="w-4/5 border-t-4 border-white mx-auto"></div>{" "}
      <AboutUsSection />
      <div className="w-full border-t-4 border-white mx-auto"></div> <Footer />
    </div>
  );
}
export default HomePage;
