"use client";

import { useState } from "react";

// Simplified version of the contact page with minimal dependencies
export default function ContactTestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#A5D66F]/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-6">
            Get In Touch
          </h1>
          <div className="w-20 h-1.5 bg-[#A5D66F] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-[#2C2C2C]/80 max-w-2xl mx-auto">
            Ready to experience the Da Di difference? Book a trial or reach out
            with any questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">
                Our Location
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#F0F7E6] rounded-lg">
                    <svg
                      className="h-5 w-5 text-[#4C9A2A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#2C2C2C]">
                      10 Jalan Ubi, Kampong Ubi Community Centre, #02-03,
                      Singapore 409075
                    </p>
                    <button className="text-sm text-[#4C9A2A] hover:underline mt-1">
                      Copy Address
                    </button>
                  </div>
                </div>

                <div className="h-64 w-full bg-gray-100 rounded-lg overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.800902103785!2d103.89272831575398!3d1.292621999057778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197a4d9f0a1f%3A0x9b5a3a11b3fcf166!2sKampong%20Ubi%20Community%20Club!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  ></iframe>
                  <a
                    href="https://www.google.com/maps/place/Kampong+Ubi+Community+Club/@1.292622,103.894918,17z/data=!3m1!4b1!4m5!3m4!1s0x31da197a4d9f0a1f:0x9b5a3a11b3fcf166!8m2!3d1.2926166!4d103.8971067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors"
                  >
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
                      Open in Google Maps
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A5D66F] focus:border-[#A5D66F] outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A5D66F] focus:border-[#A5D66F] outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A5D66F] focus:border-[#A5D66F] outline-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A5D66F] hover:bg-[#94c45f] text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-medium text-[#2C2C2C] mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", icon: "Facebook", url: "#" },
                    { name: "Instagram", icon: "Instagram", url: "#" },
                    { name: "YouTube", icon: "Youtube", url: "#" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#A5D66F] transition-colors"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="h-8 w-8 flex items-center justify-center">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
