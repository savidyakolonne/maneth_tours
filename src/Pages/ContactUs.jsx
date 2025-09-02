import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // The handleSubmit function is no longer needed for submission!
  // Formspree handles it directly via the form's 'action' attribute.

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have questions or need help planning your trip? Fill out the form below
        and our team will get back to you as soon as possible.
      </p>

      {/* MODIFIED FORM TAG:
        - Removed the ref and onSubmit.
        - Added the action attribute with your Formspree URL.
        - Added the method="POST" attribute.
      */}
      <form
        action="https://formspree.io/f/mblakgvg" // <-- PASTE YOUR FORMPSREE URL HERE
        method="POST"
        className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name" // This 'name' attribute is important for Formspree
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email" // This 'name' attribute is important for Formspree
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject" // This 'name' attribute is important for Formspree
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter subject"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message" // This 'name' attribute is important for Formspree
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
