import React from "react";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
            V
          </div>
          <div>
            <div className="text-white font-semibold">Vācaka.AI</div>
            <div className="text-xs text-gray-400 -mt-0.5">AI Dubbing Infrastructure — India</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { text: "About Us", path: "/about-us", isRoute: true },
            { text: "Our Story", path: "ourstory", isRoute: false },
            { text: "Products", path: "products", isRoute: false },
            { text: "Features", path: "features", isRoute: false },
            { text: "Pricing", path: "pricing", isRoute: false },
            { text: "Blogs", path: "/blogs", isRoute: true },
            { text: "Careers", path: "/careers", isRoute: true },
          ].map(({ text, path, isRoute }) =>
            isRoute ? (
              <Link key={text} to={path} className="text-gray-300 hover:text-pink-400 transition">
                {text}
              </Link>
            ) : (
              <Link
                key={text}
                to={`/#${path}`}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                {text}
              </Link>
            )
          )}
          <Link to="/#query" className="ml-2 inline-block bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-md text-white shadow hover:scale-105 transition-transform">
            Query
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
