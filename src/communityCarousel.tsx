import { useEffect, useState, useRef, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  name: string;
  role: string;
  text: string;
  color: string;
  img: string;
}

const cards: Card[] = [
  {
    id: 1,
    name: "Anita Menon",
    role: "PROFESSIONAL DUBBING ARTIST",
    text:
      "Before Vācaka.AI I spent most of my week in studios re-recording the same lines for different languages. Now, their Dubb™ engine does the heavy lifting...",
    color: "#7B4FFF",
    img: "https://i.pravatar.cc/200?img=47",
  },
  {
    id: 2,
    name: "Freddy Sodawallah",
    role: "CHAIRMAN – SODAWALLAH PRODUCTIONS",
    text:
      "Generic AI costs are a mirage. We were spending 50% of the savings on manual QA to fix pacing, lip sync, and emotional tone...",
    color: "#5F8BFF",
    img: "https://i.pravatar.cc/200?img=12",
  },
  {
    id: 3,
    name: "Aastha",
    role: "ASSOCIATE VP – NDTV",
    text:
      "We were told live dubbing was science fiction. Vācaka.AI’s Streaming Inference let us go live with regional broadcasts in five languages...",
    color: "#C45F8C",
    img: "https://i.pravatar.cc/200?img=32",
  },
];

export default function SmoothCarousel(): ReactElement {
  const [active, setActive] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const startAuto = (): void => {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      slideTo(active + 1);
    }, 5000);
  };

  const stopAuto = (): void => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const slideTo = (index: number): void => {
    stopAuto();
    const newIndex = (index + cards.length) % cards.length;
    setActive(newIndex);
  };

  const positions: number[] = [-1, 0, 1];

  const getCard = (offset: number): Card => {
    const index = (active + offset + cards.length) % cards.length;
    return cards[index];
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-6 select-none bg-black py-16">
      <h1 className="text-white text-4xl font-bold mb-12">The Voice of Our Community</h1>

      {/* SLIDER */}
      <div
        className="relative flex items-center justify-center w-full h-[360px]"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <AnimatePresence initial={false}>
          {positions.map((pos) => {
            const card = getCard(pos);
            const isActive = pos === 0;

            return (
              <motion.div
                key={card.id}
                onClick={() => slideTo(active + pos)}
                initial={{ opacity: 0, scale: 0.6, x: pos * 260 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1 : 0.85,
                  x: pos * 380,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className={`absolute w-[350px] rounded-2xl p-8 bg-[#EDEAE5] text-center shadow-xl cursor-pointer`}
                style={{
                  filter: isActive
                    ? "none"
                    : "grayscale(40%) brightness(85%)",
                }}
              >
                <div className="flex justify-center -mt-16 mb-2">
                  <img
                    src={card.img}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                    alt={card.name}
                  />
                </div>

                <div
                  className="text-5xl -mt-3"
                  style={{ color: card.color }}
                >
                  “
                </div>

                <p className="text-gray-800 mt-3 text-sm leading-relaxed">{card.text}</p>

                <h3 className="mt-6 font-bold text-gray-900">{card.name}</h3>
                <p className="text-xs tracking-wide text-gray-600">{card.role}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => slideTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === index ? "bg-white scale-125" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}