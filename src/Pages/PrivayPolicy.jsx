import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Last updated: September 01, 2025
      </p>

      {/* Content */}
      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            At <strong>Maneth Tours</strong>, we respect your privacy and are committed 
            to protecting your personal information. This Privacy Policy explains 
            how we collect, use, and safeguard your data when you use our website 
            or services.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Personal details such as your name, email address, and phone number 
              when you fill out forms on our website.
            </li>
            <li>
              Booking information including travel preferences, dates, and 
              destinations.
            </li>
            <li>
              Technical information like your IP address, browser type, and 
              device details (collected automatically).
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect for:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Processing bookings and inquiries.</li>
            <li>Sending confirmations, updates, and promotional offers.</li>
            <li>Improving our website and customer experience.</li>
            <li>Ensuring security and preventing fraudulent activities.</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
          <p>
            We do not sell or rent your personal information. However, we may 
            share your data with:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Trusted partners (such as hotels, transport providers) to fulfill your bookings.</li>
            <li>Service providers who assist us with website hosting, payment processing, or customer support.</li>
            <li>If required by law or to protect our legal rights.</li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience, analyze site 
            traffic, and personalize content. You may disable cookies in your 
            browser settings, but some features of our site may not work 
            properly without them.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your personal 
            data. However, no method of transmission over the internet is 100% 
            secure, so we cannot guarantee absolute protection.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to your information.</li>
            <li>Opt-out of receiving marketing communications.</li>
            <li>Request deletion of your data where applicable.</li>
          </ul>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes 
            will be posted on this page with an updated “Last updated” date.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact 
            us at:  
          </p>
          <p className="mt-2">
            📧 Email: <a href="mailto:info@manethtours.com" className="text-teal-600 underline">info@manethtours.com</a> <br />
            📞 Phone: +94 77 123 4567
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
