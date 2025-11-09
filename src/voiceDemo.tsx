import { useState } from "react";

export default function VoiceDemo() {
  const [selectedLang, setSelectedLang] = useState("Hindi");
  const languages = ["Hindi", "Bengali", "Tamil", "Punjabi", "Marathi"];

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="flex flex-col md:flex-col max-w-6xl w-full gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Voice Demo</h2>
          <p className="text-gray-400 mb-8">
            Listen to samples, switch languages, and explore natural emotion &
            clarity.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 w-full">
          <div className="flex-1 bg-[#1E2533] rounded-3xl md:rounded-3xl p-8 border border-whitesmoke-600">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-5xl">🔊</span>
              <div className="flex-1 h-2 bg-gray-600 rounded-full relative">
                <div className="absolute w-5 h-5 bg-white rounded-full -top-1.5 left-0 shadow-lg" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-12 mb-10">
              <button className="text-4xl hover:scale-110 transition-transform">
                ⏮️
              </button>
              <button className="text-5xl hover:scale-110 transition-transform">
                ▶️
              </button>
              <button className="text-4xl hover:scale-110 transition-transform">
                ⏭️
              </button>
            </div>

            <p className="text-gray-400 mb-4 text-sm">Select Output Language</p>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-6 py-2.5 rounded-xl text-base font-medium border transition-all ${
                    selectedLang === lang
                      ? "bg-white text-black border-white"
                      : "bg-transparent border-gray-500 text-gray-300 hover:border-gray-400"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col min-w-[300px] bg-[#1E2533] rounded-3xl md:rounded-3xl p-8 border border-whitesmoke-600">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Quick Stats
            </h3>
            <div className="flex flex-col gap-6 text-base">
              <div className="flex justify-between text-gray-300">
                <span>Words Processed</span>
                <span className="font-semibold text-white">12.4M</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Mins. Used</span>
                <span className="font-semibold text-white">2,500</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Avg. Latency</span>
                <span className="font-semibold text-white">180ms</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Supported Locales</span>
                <span className="font-semibold text-white">40+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
