import React, { useState } from "react";
import AppBar from "../components/AppBar";
import type { ChangeEvent } from "react";
import { Search, MapPin, X } from "lucide-react";
import ScrollLinkedCarousel from "./scrollLinkedCarousel";
import { Section } from "../homepage";
import HotJobsCarousel from "./HotJobsCarousel";

interface SearchFormData {
  role: string;
  location: string;
}

interface SearchInputProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}

const items = [
  { id: 1, imageUrl: "/Images and PNGs/Career-Page-2.png", caption: "Create tech that listens like a human" },
  { id: 2, imageUrl: "/Images and PNGs/Career-Page-3.png", caption: "Blending creativity with logic" },
  { id: 3, imageUrl: "/Images and PNGs/Career-Page-4.png", caption: "Build something that truly matters" },
];

const VacakaCareersPage: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchFormData>({
    role: "",
    location: "",
  });

  const handleInputChange =
    (field: keyof SearchFormData) =>
    (value: string): void => {
      setSearchData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleClear = (): void => {
    setSearchData({
      role: "",
      location: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <AppBar />
      <Section id="careerPage" className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-8 mt-20">
          <h1 className="text-4xl font-medium tracking-wide mb-2 leading-tight">
            Careers @Vācaka.AI
          </h1>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Work Where
                </span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Voice Meets
                </span>
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Vision!
                </span>
              </h2>

              <div className="space-y-4 text-gray-300">
                <p className="text-base leading-relaxed">
                  Voices that feel, languages that connect — that's the
                  Vācaka.AI way.
                </p>
                <p className="text-base leading-relaxed">
                  At Vācaka.AI, we're reimagining how the world hears and feels
                  media.
                </p>
                <p className="text-base leading-relaxed">
                  Join a team of dreamers, coders, and creators turning sound
                  into an experience.
                </p>
              </div>

              <p className="mt-8 text-lg italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Be a part of the voice revolution.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex relative justify-center lg:justify-end mb-8">
              <img src="public\Images and PNGs\Career-Page-1.png" alt="carrer page image" className="h-84 w-124" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Come join the team now
              </h3>

              <div className="relative">
                <div className="flex items-center bg-white rounded-xl px-6 py-4 shadow-xl">
                  <SearchInput
                    icon={<Search className="w-5 h-5 text-gray-400" />}
                    placeholder="Role eg: Data Analyst"
                    value={searchData.role}
                    onChange={handleInputChange("role")}
                    ariaLabel="Search by role"
                  />

                  <div className="w-px h-8 bg-gray-300 mx-4"></div>

                  <SearchInput
                    icon={<MapPin className="w-5 h-5 text-gray-400" />}
                    placeholder="Location"
                    value={searchData.location}
                    onChange={handleInputChange("location")}
                    ariaLabel="Search by location"
                  />

                  {(searchData.role || searchData.location) && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
          
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
      <ScrollLinkedCarousel
        title="Why Work with Us?"
        items={items}
        scrollMultiplier={1.5}
      />
      <HotJobsCarousel />
    </div>
  );
};

const SearchInput: React.FC<SearchInputProps> = ({
  icon,
  placeholder,
  value,
  onChange,
  ariaLabel,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center flex-1">
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="flex-1 ml-3 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm"
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default VacakaCareersPage;
