import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"; // adjust path as needed

function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle,rgba(78,84,78,1)_0%,rgba(0,0,0,1)_94%)] flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-4 py-12 gap-12 md:gap-16">
        {/* Left: Info Text */}
        <div className="w-full max-w-md mb-12 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Contact Us?
          </h2>
          <p className="text-gray-300 mb-2">
            We're here to help you with any questions, partnership
            opportunities, or support needs.
          </p>
          <p className="text-gray-400">
            Reach out and our team will respond as soon as possible. We value
            your feedback and look forward to connecting!
          </p>
        </div>
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
