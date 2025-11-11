import React, { useState, useEffect, useRef, type ChangeEvent } from "react";
import { ChevronDown } from "lucide-react";
import AppBar from "../components/AppBar";
import { socialLinks } from "../data";
import { GIFs } from "../constants/gifPaths";
import { handleSubmit } from "../EmailService";

interface FormData {
  name: string;
  company: string;
  email: string;
  product: string;
  query: string;
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
  const [querySent, setQuerySent] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      const email = formData.email;
      await handleSubmit({ email, type: "subscribe" });
      console.log(`Subscribing: ${email}`);
      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          product: "",
          query: "",
        });
      }, 3000);
    }
    setQuerySent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col relative overflow-hidden">
      <AppBar />
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        src={GIFs.GIF_BLUE_BG_VIDEO}
      />
      <div className="flex-1 flex flex-col items-center justify-center p-4 mt-24">
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

        <div className="relative bg-[#f7f4e9] rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Have a Query? Let's Talk
          </h1>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                disabled={querySent}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-[#b0af9d] text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                disabled={querySent}
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full px-6 py-4 bg-[#b0af9d] text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                disabled={querySent}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-6 py-4 bg-[#b0af9d] text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />

              <div className="relative" ref={dropdownRef}>
                <button
                  disabled={querySent}
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-6 py-4 bg-[#b0af9d] text-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all flex items-center justify-between text-left"
                >
                  <span>{formData.product || "Product"}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-[#b0af9d] text-white rounded-xl shadow-lg overflow-hidden">
                    {products.map((product) => (
                      <button
                        disabled={querySent}
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

            <textarea
              disabled={querySent}
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              placeholder="Your query"
              rows={6}
              className="w-full px-6 py-4 bg-[#b0af9d] text-white placeholder-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
            />

            {!querySent ? (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleQuery}
                  disabled={querySent}
                  className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  Book a Call Now
                </button>
              </div>
            ) : (
              <div className="text-green-500 font-semibold text-lg text-center">
                <p>Call Booked Successfully</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4 mt-6 z-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-full text-gray-900 transition-colors duration-200 shadow-lg overflow-hidden"
            >
              <img
                src={social.icon}
                alt="icons"
                className="w-12 h-12 object-cover hover:border-2 hover:border-purple-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
