import React, { useState } from "react";
import { Images } from "../constants/svgPaths";
import { GIFs } from "../constants/gifPaths";
import { socialLinks } from "../data";
import { handleSubmit } from "../EmailService";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pressed, setPressed] = useState(false);

  const handleGetStarted = (): void => {
    console.log("Get Started clicked");
  };

  const handleLogin = (): void => {
    console.log("Login clicked");
  };

  const handlePress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      await handleSubmit({ email, type: "free" });
      console.log(`free: ${email}`);
      setPressed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-10"
        src={GIFs.GIF_PURPLE_BG_VIDEO}
        alt="Background"
      />
      <div className="relative bg-stone-100 rounded-3xl shadow-2xl p-12 max-w-md w-full text-center z-10">
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
            <img
              src={Images.VACAKA_AI_LOGO}
              alt="VACAKA_AI_LOGO"
              className="rounded-lg overflow-hidden scale-200"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-12 leading-tight">
          Make AI sound the
          <br />
          way India feels
        </h1>

        <form onSubmit={handlePress} className="space-y-4">
          <div className="relative">
            <input
              disabled={pressed}
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full py-3 pl-12 pr-4 bg-gray-100 text-gray-900 rounded-xl border-1 focus:border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
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
            disabled={pressed}
            onClick={handleGetStarted}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 mb-6"
          >
            GET STARTED FREE
          </button>
        </form>

        <p className="text-gray-700 text-sm">
          Already have an account?{" "}
          <button
            onClick={handleLogin}
            className="text-gray-900 font-semibold underline hover:text-gray-700 transition-colors"
          >
            Login
          </button>
        </p>
      </div>

      <div className="absolute bottom-12 gap-2 flex z-10">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-full text-gray-900 transition-colors duration-200 shadow-lg overflow-hidden "
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
  );
};

export default LoginPage;
