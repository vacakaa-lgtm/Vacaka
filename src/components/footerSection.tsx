import { useState } from "react";
import { socialLinks } from "../data";
import { handleSubmit } from "../EmailService";
import { Images } from "../constants/svgPaths";

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition duration-200"
    >
      {children}
    </a>
  </li>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      await handleSubmit({email, type:"subscribe"});
      console.log(`Subscribing: ${email}`);
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#181a20] text-white pt-16 pb-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700/50 pb-12">
          <div className="lg:col-span-1">
            <div className="ml-18 items-center justify-center">
              <img
                src={Images.VACAKAAI_LOGO}
                alt="Vacaka.AI"
                className="h-16 rounded-md scale-400"
              />
            </div>
            <p className="text-sm text-white mb-8">
              Go Live, Go Flawless, Go Regional
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-400">
                Vācaka.AI is an AI-first infrastructure company, disrupting
                generalized AI voice synthesis.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 930636000*</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:vacakaai@gmail.com">contactus@vacaka.ai</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="#ourstory">Our Story</FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Trust & Safety</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#products">Products</FooterLink>
              <FooterLink href="#">Supports</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe More Info</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-3 pl-12 pr-4 bg-gray-100 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                />
                <svg
                  className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-800 to-purple-800 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                disabled={subscribed}
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm mt-2">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6">
          <div className="flex mb-4 sm:mb-0 gap-2">
            {socialLinks.map(({ icon, label }, index) => (
              <a key={index} href="#" aria-label={label}>
                <img
                  src={icon}
                  alt={label}
                  className="w-12 h-12 object-cover"
                />
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            © 2025 Vācaka.AI — Built with ❤️ in India
          </p>
        </div>
      </div>

      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-purple-700 rounded-full shadow-xl hover:bg-purple-600 transition duration-200 z-30 opacity-90"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
