import { GIFs } from "./constants/gifPaths";
import { Images } from "./constants/svgPaths";

// ------------------------------------------------
// Social Links
// ------------------------------------------------
export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Images.TWITTER,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Images.LINKEDIN,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Images.INSTAGRAM,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Images.YOUTUBE,
    href: "https://youtube.com",
    label: "YouTube",
  },
  {
    icon: Images.DISCORD,
    href: "https://discord.com",
    label: "Discord",
  },
];

// ------------------------------------------------
// Community Carousel Cards
// ------------------------------------------------
export interface Card {
  id: number;
  name: string;
  role: string;
  text: string;
  color: string;
  img: string;
}

export const cards: Card[] = [
  {
    id: 1,
    name: "Anita Menon",
    role: "PROFESSIONAL DUBBING ARTIST",
    text: "Before Vācaka.AI I spent most of my week in studios re-recording the same lines for different languages. Now, their Dubb™ engine does the heavy lifting. My approved voice models get licensed and used across projects, helping me earning passively while I focus on creative gigs and experimenting with new dialects and characters. Vācaka.AI didn’t take my job away; it multiplied what I can do as an artist.",
    color: "#7B4FFF",
    img: Images.ANITA_MENON,
  },
  {
    id: 2,
    name: "Freddy Sodawallah",
    role: "CHAIRMAN – SODAWALLAH PRODUCTIONS",
    text: "Generic AI costs are a mirage. We were spending 50% of the 'savings' on manual QA to fix pacing, lip sync, and emotional tone. Their Native Speaker Control (NSC), embedded right into our DaVinci workflow, cut that labor down to virtually nothing. They deliver a guaranteed final output. It’s the first AI that understands our audience.",
    color: "#5F8BFF",
    img: Images.FREDDY_SODAWALLAH,
  },
  {
    id: 3,
    name: "Aastha",
    role: "ASSOCIATE VP – NDTV",
    text: "We were told live dubbing was science fiction. Vācaka.AI’s Streaming Inference let us go live with a regional news broadcast in five languages simultaneously. It created a whole new category of consumption for us.",
    color: "#C45F8C",
    img: Images.AASTHA,
  },
  {
    id: 4,
    name: "Rohit Sharma",
    role: "Head of Content Strategy - VistaPlay APAC",
    text: "One deepfake can trigger IT Act exposure that can cost millions and millions in legal risk. Vācaka.AI’s Audited Identity Layer gives us certified, traceable proof for every voice used. This is the reason our legal team approved AI deployment — it transforms compliance into confidence and accountability into assurance.",
    color: "#C45F8C",
    img: Images.ROHIT_VISTAPLAY,
  },
];

//-------------------------------------------------
// Testimonials
// -------------------------------------------------
export const testimonials = [
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

// ------------------------------------------------
// Story Sections
// -------------------------------------------------
export const storySections = [
  {
    bg: "#779ee0",
    text: `Look, we’ve all been there.

You get a massive regional content slate from the top — maybe 20 new shows across Marathi, Tamil, Bengali, and Kannada — and you’re told they all need to be dubbed into four other languages.

Tight deadlines. Simulcast launch. No excuses.`,
  },
  {
    bg: "#b989d9",
    text: `You run your current “AI solution” — the one everyone’s been hyping — and what do you get?

Flat, monotonous audio. A Tamil voice that sounds like it was trained in Delhi. A Hindi track that’s too neutral to sound human. Cartoon characters with zero emotional range.

And then the real nightmare begins: MANUAL QA.`,
  },
  {
    bg: "#e770b1",
    text: `You’re suddenly managing five vendors, burning your budget on emotional correction, lip-sync fixes, and compliance audits — because one wrong voice can become a legal crisis overnight.

Meanwhile, the world has moved to live everything — live sports, live news, live events — and your so-called “AI” is still stuck in a batch queue waiting for post-production.

We saw this happening everywhere — studios frustrated, creators exhausted, enterprises terrified of non-compliance`,
  },
  {
    bg: "#6593e6",
    text: `We thought: What if the voice AI actually worked the way the industry needed it to?

That’s when we built Vācaka.AI — not a toy, not another synthesis tool, but the infrastructure.

We stopped trying to make “AI sound human” — we made it listen like one.`,
  },
];

// ------------------------------------------------
// Pricing Plans
// -------------------------------------------------
export interface PricingPlan {
  id: number;
  title: string;
  tag: string;
  titleTagColor: string;
  price: number | "Custom";
  minutes: number | "Custom";
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    title: "Basic",
    tag: "(Create)",
    titleTagColor: "#e099ff",
    price: 299,
    minutes: 120,
    features: ["Dubb™", "Sonic™"],
  },
  {
    id: 2,
    title: "Plus",
    tag: "(Express)",
    titleTagColor: "#a1c0f9",
    price: 899,
    minutes: 500,
    features: ["Dubb™", "Sonic™", "Clone™"],
  },
  {
    id: 3,
    title: "Pro",
    tag: "(Evolve)",
    titleTagColor: "#e799c4",
    price: 2499,
    minutes: 1200,
    features: ["Dubb™", "Connect™", "Clone™"],
  },
  {
    id: 4,
    title: "Enterprise",
    tag: "(Vision)",
    titleTagColor: "#f7f4e9",
    price: "Custom",
    minutes: "Custom",
    features: ["All Products"],
  },
];

//-------------------------------------------------
// Product Cards
// -------------------------------------------------
export const productCards = [
  {
    title: "Vācaka.AI Connect™",
    subtitle: "Plug-ins & API Integration Suite",
    points: [
      "Native plug-ins for Adobe, DaVinci Resolve.",
      "RESTful APIs for Dubbing, TTS, STS, and ASR.",
      "Emotion and lip-sync alignment for playback.",
      "Secure authentication & consent-verified voices.",
      "Custom SDKs for OTT and studio integrations.",
      "Developer dashboard with analytics.",
    ],
    button: "Request a Demo",
    color: "#e099ff",
    link: GIFs.CONNECT,
  },
  {
    title: "Vācaka.AI Dubb™",
    subtitle: "Real-Time Dubbing Engine",
    points: [
      "Real-time Speech-to-Speech dubbing.",
      "0.5-second latency output.",
      "YouTube Live, OBS, Twitch integrations.",
      "Built-in emotion retention.",
      "Multi-speaker mode.",
    ],
    button: "Go Live in Any Language",
    color: "#e770b1",
    link: GIFs.DUB,
  },
  {
    title: "Vācaka.AI Clone™",
    subtitle: "Neural Voice Cloning",
    points: [
      "High-fidelity voice replication.",
      "Emotion & tone preservation.",
      "Multilingual voice synthesis.",
      "Consent-based ethical usage.",
      "Audited Identity Layer.",
      "Speech-to-Speech dubbing included.",
    ],
    button: "Try Now for Free",
    color: "#6593e6",
    link: GIFs.CLONE,
  },
  {
    title: "Vācaka.AI Sonic™",
    subtitle: "Text & Speech Intelligence Suite",
    points: [
      "Natural TTS in 120+ voices.",
      "Emotion, pitch & tone control.",
      "98% accurate STT.",
      "Handles Hinglish & accents.",
      "Auto timestamp & transcription export.",
    ],
    button: "Play Now for Free",
    color: "#c179e0",
    link: "",
  },
];

//-------------------------------------------------
// Story Data
// -------------------------------------------------
export interface Story {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
  readMoreUrl: string;
  color: string;
}

export const STORY_DATA: Story[] = [
  {
    id: 1,
    title: "When Our AI Tried to Speak Tamil (and What Happened Next!)",
    date: "November 2025",
    category: "AI VoiceTech",
    description:
      "There are moments in every startup when you realize your tech is too smart for its own good. For us, that moment came when our AI tried to speak Tamil...",
    imageUrl: Images.BLOG_1,
    readMoreUrl: "#story-1",
    color: " #a1c0f9",
  },
  {
    id: 2,
    title:
      "The Future of Dubbing is Real-Time (And India's Leading It! Watch for yourself)",
    date: "October 2025",
    category: "Tech, Dubbing",
    description:
      "For years, dubbing was trapped in post-production. But now, real-time dubbing is rewriting the rules – and India is at the forefront of this revolution.",
    imageUrl: Images.BLOG_2,
    readMoreUrl: "#story-2",
    color: " #fb64b6",
  },
  {
    id: 3,
    title: "Why Emotion is the New Benchmark for Voice AI? (Let's Decode!)",
    date: "September 2025",
    category: "Innovation, EmotionTech",
    description:
      "Voice tech has long chased perfection—clarity, pronunciation, zero noise. But somewhere along the way, we forgot what really matters: feeling.",
    imageUrl: Images.BLOG_3,
    readMoreUrl: "#story-3",
    color: " #c179e0",
  },
];

//-------------------------------------------------
// Vācaka.AI Architecture Items
// -------------------------------------------------
export const items = [
  "Emotion Recognition & Expressive Voice Synthesis",
  "Adaptive Lip-Sync & Contextual Emotion Control",
  "Reinforcement-Learning Engine for Voice Cloning",
  "Neural Accent Adaptation for 70+ Indian Dialects",
  "Multilingual Speech Understanding",
  "Audited Identity Layer™ for Verified Voice Provenance",
];

//-------------------------------------------------
// Career Page - Image Carousel Items
// -------------------------------------------------
export const careerPageItems = [
  {
    id: 1,
    imageUrl: Images.CAREER_PAGE_1,
    caption: "Create tech that listens like a human",
  },
  {
    id: 2,
    imageUrl: Images.CAREER_PAGE_2,
    caption: "Blending creativity with logic",
  },
  {
    id: 3,
    imageUrl: Images.CAREER_PAGE_3,
    caption: "Build something that truly matters",
  },
];

//-------------------------------------------------
// Career Page - Job Listings
// -------------------------------------------------
export const jobList = [
  {
    title: "AI Research Intern",
    description:
      "Help our voice models learn how to feel. Work with the tech that powers emotion and authenticity in 22+ Indian languages.",
    location: "Remote / Hybrid",
  },
  {
    title: "Frontend Developer",
    description:
      "Build sleek, performant UI that helps creators and studios localize content effortlessly.",
    location: "Bangalore / Remote",
  },
  {
    title: "ML Engineer",
    description:
      "Join our team pushing boundaries in real-time multilingual emotion modeling.",
    location: "Remote",
  },
];

//-------------------------------------------------
// Blog Page - Emotion Banner Sections
// -------------------------------------------------
export interface ContentSection {
  title: string;
  leftContent: string[];
  rightContent: string[];
  brandNames?: string[];
  heroImage: string;
}
export const sections: ContentSection[] = [
  {
    title: "When Our AI Tried to Speak Tamil (and What Happened Next!)",
    brandNames: ["Vacaka.AI"],
    heroImage: Images.BLOG_1,
    leftContent: [
      "There are moments in every startup when you realize your tech is too smart for its own good.",
      "For us, that moment came when our AI tried to speak Tamil… with a Delhi accent. 😅",
      "We had just finished a prototype of our real-time dubbing engine when we played back the first Tamil output - and it sounded, well, like your North Indian cousin reading a Tamil menu for the first time.",
      "But that’s where the magic began.",
    ],
    rightContent: [
      "We didn’t fix the code - we taught the AI to listen. To understand cultural tone, syllable rhythm, and the music behind every word.",
      "Because to us, it’s not just “voice generation.” It’s voice understanding.",
      "Today, that same engine can pick up emotion shifts, local dialects, and regional humor - and sound like it’s from the place it’s speaking to.",
      "That’s the beauty of making AI that listens before it speaks.",
    ],
  },
  {
    title: "The Future of Dubbing Is Real-Time (And India's Leading It)",
    brandNames: ["Vācaka.AI’s Dubb™", "This is the era of “live it now.”"],
    heroImage: Images.BLOG_2,
    leftContent: [
      "Batch processing. Endless revisions. Late-night studio calls.",
      "For years, dubbing has been a slow, manual art trapped in a digital world.",
      "Then came the revolution - real-time dubbing.",
      "Imagine translating and voicing a scene into 22 languages… as it happens.",
      "No post-production, no waiting, no lag.",
    ],
    rightContent: [
      "India, with its linguistic diversity, isn’t just adapting to this change - it’s leading it.",
      "And with Vācaka.AI’s Dubb™ engine, studios can now go live simultaneously in every major Indian language — with emotion, accuracy, and compliance intact.:",
      "The age of “dub it later” is over.",
      "This is the era of “live it now.”",
    ],
  },
  {
    title: "Why Emotion Is the New Benchmark for Voice AI",
    brandNames: ["Vacaka.AI"],
    heroImage: Images.BLOG_3,
    leftContent: [
      "For decades, voice tech has chased perfection - clarity, pronunciation, zero noise.",
      "But somewhere along the way, it forgot what really matters: feeling.",
      "When someone says \"I'm fine,\" it's not the words that tell you how they feel - it's the emotion.",
      "That's what we're bringing back with Vacaka.AI: voices that understand tone, empathy, and intent.",
    ],
    rightContent: [
      "Our emotion-calibrated dubbing engine captures not just sound but sentiment.",
      "Because your audience doesn't want to hear a voice - they want to feel the voice.",
      "At Vacaka.AI, we believe the future of AI voices isn't about sounding human - it's about feeling human.",
    ],
  },
];

//-------------------------------------------------
// About Us - Team
// -------------------------------------------------
export interface TeamMember {
  id: string;
  name: string;
  image: string;
  description?: string;
  linkedinUrl?: string;
  imageOnRight?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "KAUSHAL SETHI",
    image: Images.KAUSHAL_SETHI,
    linkedinUrl: "https://www.linkedin.com/in/kaushalsethi/",
    description:
      "Kaushal is the creative force behind Vacaka.AI's product vision and experience design. Kaushal brings imagination to intelligence. With a background that blends HR, design thinking, and AI strategy, he shapes how Vacaka.AI feels — not just how it functions. From crafting the brand's narrative voice to building intuitive AI systems, Kaushal bridges creativity with computation. He believes technology should move like art and sound like emotion.",
  },
  {
    id: "2",
    name: "DEEPASHA",
    image: Images.DEEPASHA,
    linkedinUrl: "https://www.linkedin.com/in/deepasha/",
    description:
      "An MBA–HR mind with an artist’s heart, Deepasha blends empathy with enterprise. She’s the bridge between people and product — ensuring every innovation at Vācaka.AI stays rooted in human understanding, creative culture, and strategic clarity. Her vision keeps the brand soulful as it scales.",
    imageOnRight: true,
  },
  {
    id: "3",
    name: "SAHIL THAKUR",
    image: Images.SAHIL_THAKUR,
    linkedinUrl: "https://www.linkedin.com/in/isahilthakur/",
    description:
      "The calm mind behind the structure. Sahil brings precision, discipline, and foresight to the table — making sure Vācaka.AI’s growth stays compliant, ethical, and future-proof. With a deep understanding of HR governance and revenue frameworks, he ensures innovation never outpaces integrity.",
  },
];

//-------------------------------------------------
// About Us - Info Cards Data
// -------------------------------------------------
export interface InfoCardData {
  title: string;
  description: string;
  backgroundColor: string;
}
export const cardsData: InfoCardData[] = [
  {
    title: "OUR VISION",
    description:
      "To be the global standard for simultaneous broadcast localization, transforming media from any language into a culturally and emotionally resonant experience the instant it's created.",
    backgroundColor: "#9B6BA8",
  },
  {
    title: "OUR MISSION",
    description:
      "To empower media, creators, and enterprises with multilingual voice infrastructure that delivers real-time dubbing, cloning, and compliance — ensuring every voice we generate is audible, emotional, and accountable.",
    backgroundColor: "#6CA6E8",
  },
  {
    title: "TRUST & SAFETY @Vacaka.AI",
    description:
      "At Vacaka.AI, we don't just build AI voices — we build trust. Our Audited Identity Layer creates a digital signature for every voice we generate. We guarantee: Every voice comes with verified consent, is traceable, secure, compliant, and audit-ready.",
    backgroundColor: "#E679B8",
  },
];
