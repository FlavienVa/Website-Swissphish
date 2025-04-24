import { useState } from "react";
import emailjs from "@emailjs/browser";
emailjs.init("BQZNWJzHqKNBrR3KS");

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    }
    setError("");
    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs.send("service_lsy5n4u", "template_22f5gkf", templateParams).then(
      (response) => {
        setSuccess("Thank you for contacting us! We'll get back to you soon.");
        setError("");
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error);
        setError("Failed to send message. Please try again later.");
        setSuccess("");
      }
    );
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form
      className="w-full max-w-md p-8 bg-black bg-opacity-90 rounded shadow text-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      {error && <div className="mb-4 text-red-400">{error}</div>}
      {success && <div className="mb-4 text-green-400">{success}</div>}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Name *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-white"
          rows={5}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
