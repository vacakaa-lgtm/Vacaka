import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { productCards } from "../data";
import VideoPortal from "./videoPortal";

function ProductsServices() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="w-full bg-black py-16 flex flex-col items-center">
      <div className="w-11/12 mb-10">
        <h2 className="text-white text-4xl font-bold mb-2">
          Products & Services
        </h2>
        <p className="text-gray-300 text-lg">
          Pick the tools that fit your studio or creator workflow.
        </p>
      </div>

      <div className="w-11/12 flex flex-wrap justify-center gap-6">
        {productCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1c2430] text-white rounded-3xl p-8 w-full md:w-[22%] relative flex flex-col justify-between border border-purple-500/40"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <div className="h-[2px] bg-gray-500/40 mb-4"></div>
              <h4 className="text-lg font-medium mb-4">{card.subtitle}</h4>

              <ul className="space-y-3 text-gray-300">
                {card.points.map((p, i) => (
                  <li key={i} className="leading-snug">
                    • {p}
                  </li>
                ))}
              </ul>
            </div>

            <button
              style={{ backgroundColor: card.color }}
              className="text-black font-semibold px-4 py-3 rounded-full mt-8 transition-opacity"
            >
              {card.button}
            </button>

            <ArrowUpRight
              size={32}
              onClick={() => setActiveVideo(card.link)}
              className="absolute bottom-2 right-2 text-yellow-300 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {activeVideo && (
        <VideoPortal
          videoSrc={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
}

export default ProductsServices;
