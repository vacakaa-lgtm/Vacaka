import React from "react";
import AppBar from "../components/AppBar";
import { InfoCardList } from "./infoCard";
import TeamSection from "./team";
import TeamMemberList from "./teamMemeber";
import { cardsData } from "../data";
import { Images } from "../constants/svgPaths";
import { useEffect } from "react";

const AboutUs: React.FC = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="bg-black text-white py-16 sm:py-24 overflow-hidden relative">
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
      `}</style>
      <AppBar />
      <div className="absolute inset-0 z-0 opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,700 C360,600 720,800 1080,700 L1440,700 L1440,800 L0,800 Z"
            fill="rgba(124, 58, 237, 0.1)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-full h-30 mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <img
          src={Images.ABOUT_US_BG}
          alt="ABOUT_US_BG"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-10"
        />
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">
          ABOUT US
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Images.ABOUT_US_PIC}
              alt="AI Robot Working with Media Screens"
              className="w-full h-full max-w-md object-cover object-center rounded-lg shadow-2xl scale-180 mt-15"
            />
          </div>

          <div className="w-full lg:w-1/2 text-lg space-y-6">
            <p className="text-gray-300 leading-relaxed">
              We are the architects of the new media supply chain.{" "}
              <strong className="text-purple-400">Vācaka.AI</strong> is an
              AI-first infrastructure company disrupting generalized AI voice by
              specializing in the high-compliance, complex needs of the
              professional APAC media supply chain.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We're replacing the legacy of slow, expensive batch-processing
              with our proprietary{" "}
              <strong className="text-purple-400">
                AI Voice Transmission Infrastructure
              </strong>
              . Our focus is on providing guaranteed quality and legal security
              for Tier-1 OTTs and studios in India and the Asia-Pacific region.
            </p>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-purple-400">Our Specialization:</strong>{" "}
              Real-time, emotion-calibrated dubbing in 22+ Indian vernacular
              languages and dialects, including complex categories like cartoon
              dubbing.
            </p>
          </div>
        </div>
      </div>
      <InfoCardList cards={cardsData} />

      <TeamSection />
      <div className="h-100 w-full overflow-hidden">
        <img src={Images.MEET_TEAM_WAVE} className="w-full relative -top-70 scale-110" />
      </div>
      <TeamMemberList />
    </section>
  );
};

export default AboutUs;
