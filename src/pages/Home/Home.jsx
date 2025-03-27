import React from "react";
import Navbar from "../../components/Navbar"; // Your existing navbar component
import Footer from "../../components/Footer"; // Your existing navbar component
const HeroSection = () => {
  return (
    <section className="max-w-full text-white py-20">
      <div className="container max-w-full mx-auto flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0"> {/*md == medium display i.e comment le site interprete un élément en fonction de sa taille*/}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The leader of phishing
          </h1>
          <p className="text-lg mb-8">
            Test your company with our solution. Responsive and trackable. You
            will be amazed and everything will be easier.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Request a quote
          </button>
        </div>

        {/* Right image */}
        <div className="md:w-1/2">
          <img
            src="/hacker-image.png"
            alt="Cybersecurity illustration"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

const PhishingInfoSection = () => {
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto  max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          What is phishing email
        </h2>
        <p className="text-lg mb-4">
          Phishing is a form of cybercrime in which criminals try to obtain
          sensitive information from you by sending you emails with{" "}
          <span className="text-green-500">fraudulent links</span>, asking you
          to fill in a form with your personal details.
        </p>
        <p className="text-lg">
          It is one of the most common attacks, is easy to carry out and can
          have a huge impact on individuals and businesses.
        </p>
      </div>
    </section>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto  max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          What do we do
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            We provide comprehensive phishing simulation and training solutions
            to help organizations identify vulnerabilities, educate employees,
            and strengthen their security posture against email-based threats.
          </p>
          <p className="text-lg">
            Our platform allows you to run realistic phishing simulations, track
            employee responses, and deliver targeted training to those who need
            it most, all while providing detailed analytics and reporting.
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto  max-w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About us
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-10 md:space-y-0 md:space-x-16">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-6"></div>
            <div className="text-center">
              <p className="text-lg mb-4">
                Mini description justin mini description justin mini description
                justin mini description justin mini description justin mini
                description justin
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="w-32 h-32 bg-gray-300 rounded-full mb-6"></div>
            <div className="text-center">
              <p className="text-lg mb-4">
                Mini description Flavien mini description Flavien mini
                description justin mini description Flavien mini description
                Flavien mini description justin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function HomePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(132deg,#000000_0%,#4e544e_86%)]">
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
