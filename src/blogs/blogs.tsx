import React from "react";
import AppBar from "../components/AppBar";

interface ContentSection {
  title: string;
  leftContent: string[];
  rightContent: string[];
  brandNames?: string[];
  heroImage: string;
}

interface EmotionBannerProps {
  sections?: ContentSection[];
}

const sections: ContentSection[] = [
  {
    title: "When Our AI Tried to Speak Tamil (and What Happened Next!)",
    brandNames: ["Vacaka.AI"],
    heroImage:
      "https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=1200&h=400&fit=crop",
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
    heroImage:
      "https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=1200&h=400&fit=crop",
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
    heroImage:
      "https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=1200&h=400&fit=crop",
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

const EmotionBanner: React.FC<EmotionBannerProps> = ({
  sections: sectionsProp,
}) => {
  const sectionsToRender: ContentSection[] = sectionsProp ?? sections;

  const renderTextWithBrands = (
    text: string,
    brandNames?: string[]
  ): React.ReactNode => {
    if (!brandNames || brandNames.length === 0) {
      return <>{text}</>;
    }

    const sortedBrandNames = [...brandNames].sort(
      (a, b) => b.length - a.length
    );

    let segments: Array<{ text: string; isBrand: boolean }> = [
      { text, isBrand: false },
    ];

    sortedBrandNames.forEach((brand) => {
      segments = segments.flatMap((segment) => {
        if (segment.isBrand) return [segment];

        const parts = segment.text.split(brand);
        return parts
          .map((part) => ({
            text: part,
            isBrand: false,
          }))
          .flatMap((item, index, array) =>
            index === array.length - 1
              ? [item]
              : [item, { text: brand, isBrand: true }]
          );
      });
    });

    return (
      <>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            {segment.isBrand ? (
              <span className="font-bold text-pink-400">{segment.text}</span>
            ) : (
              segment.text
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans relative overflow-x-hidden">
      <AppBar />
      <div className="w-full max-w-6xl mx-auto p-8 space-y-12 relative mt-10">
        {sectionsToRender.map(
          (section: ContentSection, sectionIndex: number) => {
            return (
              <div
                key={sectionIndex}
                className="space-y-8 glass rounded-xl p-8"
              >
                <div className="bg-gray-900/40 rounded-2xl overflow-hidden">
                  <img
                    src={section.heroImage}
                    alt={section.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="bg-slate-800/60 backdrop-blur-sm text-white rounded-2xl py-6 px-8">
                  <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {section.title}
                  </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {section.leftContent.map((text: string, index: number) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-gray-200"
                      >
                        {renderTextWithBrands(text, section.brandNames)}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {section.rightContent.map((text: string, index: number) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-gray-200"
                      >
                        {renderTextWithBrands(text, section.brandNames)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      <style>{`
        .glass { 
          background: rgba(255,255,255,0.03); 
          border: 1px solid rgba(255,255,255,0.04); 
          backdrop-filter: blur(6px); 
        }
      `}</style>
    </div>
  );
};

export default EmotionBanner;
