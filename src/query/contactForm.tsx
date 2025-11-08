import React, { useState, type ChangeEvent } from "react";
import { X, Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react";
import AppBar from "../components/AppBar";

const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

interface FormData {
  name: string;
  company: string;
  email: string;
  product: string;
  query: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const products: string[] = [
  "Voice AI",
  "Text to Speech",
  "Speech to Text",
  "AI Assistant",
  "Custom Solutions",
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    product: "",
    query: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const socialLinks: SocialLink[] = [
    {
      icon: <X className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: <DiscordIcon className="w-5 h-5" />,
      href: "https://discord.com",
      label: "Discord",
    },
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductSelect = (product: string): void => {
    setFormData((prev) => ({
      ...prev,
      product,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (): void => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    // Example: call API, show success message, etc.
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col relative overflow-hidden">
      <AppBar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 mt-24">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-20 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 right-20 w-96 h-96">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Main card */}
      <div className="relative bg-stone-100 rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Have a Query? Let's Talk
        </h1>

        <div className="space-y-4">
          {/* Name and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-stone-300 text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="w-full px-6 py-4 bg-stone-300 text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Email and Product Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-6 py-4 bg-stone-300 text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />

            {/* Custom Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-6 py-4 bg-stone-300 text-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all flex items-center justify-between text-left"
              >
                <span>{formData.product || "Product"}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg overflow-hidden">
                  {products.map((product) => (
                    <button
                      key={product}
                      type="button"
                      onClick={() => handleProductSelect(product)}
                      className="w-full px-6 py-3 text-left hover:bg-purple-100 transition-colors text-gray-800"
                    >
                      {product}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Query Textarea */}
          <textarea
            name="query"
            value={formData.query}
            onChange={handleInputChange}
            placeholder="Your query"
            rows={6}
            className="w-full px-6 py-4 bg-stone-300 text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
          />

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className=" flex gap-4 mt-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200 shadow-lg"
          >
            {social.icon}
          </a>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;