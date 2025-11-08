import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import VoiceDemo from "./voiceDemo";
import VacakAIArchitecture from "./vacakAIArchitecture";
import CommunityCarousel from "./communityCarousel";
import PricingCardSection from "./pricingCard";
import StorySections from "./storySection";
import Footer from "./footerSection";
import OurStory from "./ourStory";
import ProductsServices from "./productAndServicesSection";
import LoginPage from "./loginPage";


interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className = "", children }: SectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-20 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};


export default function VacakaLanding() {
  // Scroll to section if hash is present in URL (after navigation)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      // Wait for DOM to update/render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
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
    "jiohotstar",
    "ndtv",
    "cartoonnet",
    "pogo",
    "spotify",
    "youtube",
    "adobe",
    "davinci",
    "kukufm",
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
      const first = container.querySelector<HTMLDivElement>(".testimonial-card");
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
      `}</style>

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-28 -z-20"
        src="https://videos.pexels.com/video-files/3183048/3183048-hd_1280_720_30fps.mp4"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black -z-10" />

      {/* Sticky header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
              V
            </div>
            <div>
              <div className="text-white font-semibold">Vācaka.AI</div>
              <div className="text-xs text-gray-400 -mt-0.5">
                AI Dubbing Infrastructure — India
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map(({ text, path, isRoute }) => (
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
                    // Always navigate to homepage with hash for internal sections
                    navigate(`/#${path}`);
                  }}
                  className="text-gray-300 hover:text-pink-400 transition cursor-pointer bg-transparent border-none"
                >
                  {text}
                </button>
              )
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-block bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-md text-white shadow hover:scale-105 transition-transform"
            >
              Query
            </Link>
          </nav>
        </div>
      </header>

      <div className="h-20" />

      {/* HERO */}
      <Section id="home">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold leading-tight">Go <span className="blink-live">LIVE</span>. Go Regional. Go Flawless.</motion.h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl"><strong className="text-pink-400">Vācaka.AI</strong> is the only AI Voice Transmission Infrastructure built for the Indian media supply chain. We eliminate <strong>90% of your post-production QA labor</strong> by guaranteeing emotional fidelity across <strong>22+ vernacular languages</strong>, in real-time.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/contact" className="px-6 py-3 rounded-md bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg transform hover:-translate-y-0.5 transition">Book Pilot</Link>
              <a href="#services" className="px-6 py-3 rounded-md border border-gray-700 text-gray-200 hover:text-white hover:border-pink-500 transition">See Services</a>
            </div>
          </div>
        </div>
      </Section>

      <div id="ourstory">
        <OurStory />
      </div>

      <div id="products">
        <ProductsServices />
      </div>

      <VoiceDemo />

      <div id="features">
        <VacakAIArchitecture />
      </div>

      <CommunityCarousel />

      <div id="pricing">
        <PricingCardSection />
      </div>

      <StorySections />

      {/* Story */}
      {/* <Section id="whereitbegan" className="bg-gray-900/40">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl glass">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">Where It All Began</h3>
          <p className="text-gray-200 leading-relaxed">"Look, we're all friends here, and we've all been there. You get a massive regional content slate from your CEO—maybe 20 new shows in Marathi, Tamil, Bengali, etc.—and you're told they all need to be dubbed into four other languages, often with tight deadlines for a simulcast launch.<br /><br />Your current 'AI solution'—let's just name names, like ElevenLabs—is a fantastic toy for a YouTuber, but it’s a nightmare for an enterprise-level localization head like you. You run the content through their batch API, and what do you get back? Flat, monotonous audio. The Tamil voice is wrong for the region, the Hindi sounds too neutral, and the cartoon characters have zero emotional range.<br /><br />Now the real work begins: Manual QA. You're paying five separate vendors to listen to every minute, correct the emotional tone, fix lip-sync drift, and ensure the dialogue isn't accidentally violating some deepfake compliance rule. That manual QA process swallows your budget, kills your timelines, and makes you risk-averse.<br /><br />The world is moving to live streaming—live sports analysis, live news, live celebrity chat shows. But your tech is stuck in a post-production batch queue.<br /><br />That’s why we built Vācaka. We stopped building a synthesis tool and built the infrastructure—embedded right into your Adobe/DaVinci workflow—that gives you guaranteed, compliant quality, in real-time. Think of it as an instant, quality-assured, localized audio track for any Indian language content, whether it’s a cartoon or a cricket broadcast."</p>
        </div>
      </Section> */}

      {/* Services */}
      {/* <Section id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl transform hover:scale-105 hover:shadow-2xl transition">
              <h4 className="text-lg font-semibold text-pink-300">Real-time Dubbing</h4>
              <p className="text-gray-300 text-sm mt-2">Streaming inference for sub-second latency dubbing — ideal for live sports, news, and events.</p>
            </div>
            <div className="glass p-6 rounded-xl transform hover:scale-105 hover:shadow-2xl transition">
              <h4 className="text-lg font-semibold text-pink-300">Audited Identity Layer</h4>
              <p className="text-gray-300 text-sm mt-2">Tamper-evident voice certificates and legal traceability to reduce deepfake risk and enable indemnity.</p>
            </div>
            <div className="glass p-6 rounded-xl transform hover:scale-105 hover:shadow-2xl transition">
              <h4 className="text-lg font-semibold text-pink-300">Emotion Calibration & Plug-ins</h4>
              <p className="text-gray-300 text-sm mt-2">Scene-aware emotion models, phoneme-level precision, plus Adobe & DaVinci plug-ins for seamless workflow.</p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* USP */}
      {/* <Section id="usp" className="bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">About / Vision / Mission</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">What</h4>
              <p className="text-sm text-gray-300 mt-2">We are the architects of the new media supply chain — Vācaka.AI is an AI-first infrastructure company disrupting generalized TTS for the APAC media ecosystem.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">Vision</h4>
              <p className="text-sm text-gray-300 mt-2">To be the global standard for simultaneous broadcast localization, transforming media into culturally and emotionally resonant experiences instantly.</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">Mission</h4>
              <p className="text-sm text-gray-300 mt-2">To disrupt generalized TTS by building an indispensable AI-first localization infrastructure that unlocks live media and APAC distribution through guaranteed fidelity and legal compliance.</p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Testimonials (auto-scrolling implemented above) */}
      {/* <Section id="testimonials" className="overflow-hidden">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">Testimonials</h2>
        <div
          ref={testimonialsRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 px-4 md:px-8 overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="testimonial-card min-w-[320px] md:min-w-[520px] bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-200 italic">“{t.quote}”</p>
              <div className="mt-4 text-sm text-pink-300">{t.author}</div>
            </motion.div>
          ))}
        </div>
      </Section> */}

      {/* Pricing */}
      {/* <Section id="pricing">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">Pilot Studio</h4>
              <p className="text-sm text-gray-300 mt-2">₹20,000 setup + ₹120 / min — 3 voices, basic support</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">Enterprise</h4>
              <p className="text-sm text-gray-300 mt-2">₹1,00,000 setup + ₹90 / min — Audited Identity, SLA 99.5%, multi-language</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="font-semibold">Creator</h4>
              <p className="text-sm text-gray-300 mt-2">₹3,000 / month — 200 credits + plug-in access</p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Logos marquee */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="marquee gap-8 flex items-center">
            {logos.concat(logos).map((l, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-md text-xs text-gray-300">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership
      <Section id="leadership">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Leadership</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Kaushal — Founder','Deepasha — Head of Product','Sahil Thakur — Head of ML'].map((p) => (
              <div key={p} className="glass p-6 rounded-xl w-60 hover:scale-105 transition-transform">
                <div className="text-lg font-semibold text-pink-300">{p.split(' — ')[0]}</div>
                <div className="text-xs text-gray-400">{p.split(' — ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </Section> */}

<LoginPage />
      {/* Query */}
      {/* <Section id="query" className="bg-gradient-to-br from-purple-900 to-gray-900">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-pink-400">Have a Query? Let's Talk.</h3>
          <form onSubmit={handleQuery} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200" />
            <input name="company" placeholder="Company" className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200" />
            <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200" />
            <select name="type" className="px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200">
              <option>Product</option>
              <option>Partnership</option>
              <option>Press</option>
              <option>Other</option>
            </select>
            <textarea name="query" required placeholder="Your query" className="md:col-span-2 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200" rows={5} />
            <div className="md:col-span-2 flex gap-3 justify-end">
              <button type="submit" className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-md text-white font-semibold">Submit Query</button>
              <a href="mailto:hello@vacaka.ai" className="px-6 py-2 rounded-md border border-gray-700 text-gray-200">Or Email Us</a>
            </div>
          </form>
        </div>
      </Section> */}

      <Footer />
      {/* <footer className="py-8 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Vācaka.AI — Built with ❤️ in India</footer> */}
    </div>
  );
}
