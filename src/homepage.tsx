import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import VoiceDemo from "./voiceDemo";
import VacakAIArchitecture from "./vacakAIArchitecture";
import CommunityCarousel from "./communityCarousel";
import PricingCardSection from "./pricingCard";
import StorySections from "./storySection";
import Footer from "./footerSection";
import OurStory from "./ourStory";
import ProductsServices from "./productAndServicesSection";
import LoginPage from "./loginPage";
import RandomThoughts from "./randomThoughts";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className = "", children }: SectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default function VacakaLanding() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);
  const navLinks = [
    { text: "About Us", path: "/about-us", isRoute: true },
    { text: "Our Story", path: "ourstory", isRoute: false },
    { text: "Products", path: "products", isRoute: false },
    { text: "Features", path: "features", isRoute: false },
    { text: "Pricing", path: "pricing", isRoute: false },
    { text: "Blogs", path: "/blogs", isRoute: true },
    { text: "Careers", path: "/careers", isRoute: true },
  ];
  const navigate = useNavigate();

  const logos = [
    "/SVGs/1.svg",
    "/SVGs/2.svg",
    "/SVGs/3.svg",
    "/SVGs/4.svg",
    "/SVGs/5.svg",
    "/SVGs/6.svg",
    "/SVGs/7.svg",
    "/SVGs/8.svg",
  ];

  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const [isPaused] = useState(false);
  const testimonials = [
    {
      quote:
        "Generic AI costs are a mirage. We were spending 50% of the 'savings' on manual QA to fix pacing, lip sync, and emotional tone. Their Native Speaker Control (NSC), embedded right into our DaVinci workflow, cut that labor down to virtually nothing. They deliver a guaranteed final output. It’s the first AI that understands our audience.",
      author: "VP of Post-Production — Major South Indian Studio",
    },
    {
      quote:
        "We were told live dubbing was science fiction. Vācaka.AI’s Streaming Inference let us go live with a regional news broadcast in five languages simultaneously. It created a whole new category of consumption for us.",
      author: "News & Live Content Lead — Indian Digital Network",
    },
    {
      quote:
        "One deepfake can trigger IT Act exposure that can cost millions and millions in legal risk. Vācaka.AI’s Audited Identity Layer gives us certified, traceable proof for every voice used. This is the reason our legal team approved AI deployment - it transforms compliance into confidence and accountability into assurance.",
      author: "Head of Content Strategy — Tier-1 APAC OTT",
    },
  ];

  useEffect(() => {
    const container = testimonialsRef.current;
    if (!container) return;

    let cardWidth = 0;
    const calc = () => {
      const first =
        container.querySelector<HTMLDivElement>(".testimonial-card");
      if (first) {
        const style = getComputedStyle(first);
        const gap = parseInt(style.marginRight || "24", 10);
        cardWidth = Math.round(first.getBoundingClientRect().width + gap);
      }
    };

    calc();
    window.addEventListener("resize", calc);

    let index = 0;
    const rafId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const step = () => {
      if (isPaused) {
        timeoutId = setTimeout(step, 1000);
        return;
      }

      if (!cardWidth) {
        calc();
      }

      index += 1;
      if (index >= testimonials.length) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        index = 0;
      } else {
        container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      }

      timeoutId = setTimeout(step, 4000);
    };

    timeoutId = setTimeout(step, 2000);

    return () => {
      window.removeEventListener("resize", calc);
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isPaused, testimonials.length]);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans relative overflow-x-hidden">
      <style>{`
        @keyframes blinkLive {0%,100%{opacity:1} 50%{opacity:0.2}}
        .blink-live {animation: blinkLive 1s infinite; color:#ff4f6d; font-weight:800;}
        @keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .marquee {display:flex; gap:2rem; animation:marquee 24s linear infinite;}
        .glass { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); backdrop-filter: blur(6px); }
        
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
      <header className="fixed top-0 left-0 right-0 z-100 backdrop-blur-md bg-black/60 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map(({ text, path, isRoute }) =>
              isRoute ? (
                <Link
                  key={text}
                  to={path}
                  className="text-gray-300 hover:text-pink-400 transition"
                >
                  {text}
                </Link>
              ) : (
                <button
                  key={text}
                  onClick={() => {
                    navigate(`/#${path}`);
                  }}
                  className="text-gray-300 hover:text-pink-400 transition cursor-pointer bg-transparent border-none"
                >
                  {text}
                </button>
              )
            )}
            <Link
              to="/contact"
              className="ml-2 inline-block bg-gradient-to-r from-pink-800 to-purple-800 px-4 py-2 rounded-md text-white shadow hover:scale-105 transition-transform"
            >
              Talk to Sales
            </Link>
          </nav>
        </div>
      </header>
      <div className="h-30" />
      {/* HERO */}
      <Section id="home" className="relative overflow-hidden mt-4">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-28 z-10"
          // src="public\Videos\GIF-Purple-BG-Video.gif"
          src="public\SVGs\Landing Page BG.svg"
        />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Go <span className="blink-live">LIVE</span>. Go Regional. Go
              Flawless.
            </motion.h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl">
              <strong className="text-pink-400">Vācaka.AI</strong> is the only
              AI Voice Transmission Infrastructure built for the Indian media
              supply chain. We eliminate{" "}
              <strong>90% of your post-production QA labor</strong> by
              guaranteeing emotional fidelity across{" "}
              <strong>22+ vernacular languages</strong>, in real-time.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-800 to-purple-800 text-white font-semibold shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Live Demo
              </Link>
              <Link
                to="#LoginPage"
                className="px-6 py-3 rounded-md border border-gray-700 text-gray-200 hover:text-white hover:border-pink-500 transition"
              >
                Start free trial
              </Link>
            </div>
          </div>
          <div>
            <img
              src="public\Videos\GIF Landing Page Video.gif"
              alt="voice vid"
              className="h-80 w-300"
            />
          </div>
        </div>
      </Section>
      <Section id="ourstory" className="mt-30">
        <OurStory />
      </Section>
      <Section id="testimonials" className="my-20">
        <RandomThoughts />
      </Section>
      <Section id="products">
        <ProductsServices />
      </Section>
      <Section id="voicedemo" className="my-10">
        <VoiceDemo />
      </Section>
      <Section id="features">
        <VacakAIArchitecture />
      </Section>
      <Section id="community">
        <CommunityCarousel />
      </Section>
      <Section id="pricing" className="-mb-40">
        <PricingCardSection />
      </Section>
      <Section id="story" className="mb-10">
        <StorySections />
      </Section>
      <section className="mb-10">
        <div className="max-w-6xl mx-auto overflow-hidden flex flex-col item-center justify-center">
          <div className="flex items-center justify-center mb-9">
            <p className="text-3xl font-bold">
              Trusted by the voices that power India’s biggest screens
            </p>
          </div>
          <div className="marquee gap-8 flex items-center w-full">
            {logos.concat(logos).map((l, i) => (
              <img src={l} alt="imgaes" key={i} className="h-18 w-28" />
            ))}
          </div>
        </div>
      </section>
      <Section id="LoginPage">
        <LoginPage />
      </Section>
      <div className="flex flex-row items-center justify-center my-20">
        <img
          alt="video"
          src="public\Videos\Cinematic Logo Reveal.gif"
          className="h-40"
        />
      </div>
      <Section id="footer">
        <Footer />
      </Section>{" "}
    </div>
  );
}
