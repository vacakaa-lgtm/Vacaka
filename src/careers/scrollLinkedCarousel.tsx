import React, { useState, useEffect, useRef } from "react";

interface CarouselItem {
  id: string | number;
  imageUrl: string;
  caption: string;
}

interface ScrollLinkedCarouselProps {
  title: string;
  items: CarouselItem[];
  scrollMultiplier?: number;
}

const ScrollLinkedCarousel: React.FC<ScrollLinkedCarouselProps> = ({
  title,
  items,
  scrollMultiplier = 1.5,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const inView = rect.top < windowHeight && rect.bottom > 0;

      if (!inView) return;

      const sectionHeight = section.offsetHeight;
      const scrollableHeight = sectionHeight + windowHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);

      const totalImages = items.length;
      const imageIndex = Math.floor(progress * totalImages);
      const clampedIndex = Math.min(imageIndex, totalImages - 1);

      setCurrentIndex(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items.length, scrollProgress]);

  const sectionHeight = `${100 + items.length * 50 * scrollMultiplier}vh`;

  return (
    <div
      ref={sectionRef}
      className="relative bg-black"
      style={{ minHeight: sectionHeight }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Vācaka.AI, you won’t just work on AI — you’ll shape how
                billions experience emotion, culture, and connection through
                sound.
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {items.map((item, index) => {
                  const isActive = index === currentIndex;
                  const isNext = index === currentIndex + 1;
                  const isPrevious = index < currentIndex;

                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive
                          ? "opacity-100 translate-x-0 z-20 scale-100"
                          : isNext
                          ? "opacity-40 -translate-x-1/2 z-10 scale-95 blur-sm"
                          : isPrevious
                          ? "opacity-0 translate-x-full z-0"
                          : "opacity-0 -translate-x-full z-0"
                      }`}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={item.imageUrl}
                          alt={item.caption}
                          className="w-full h-full object-cover"
                        />

                        {isNext && (
                          <div className="absolute inset-0 bg-black/50" />
                        )}

                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                            <p className="text-white text-lg font-medium">
                              {item.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollLinkedCarousel;
