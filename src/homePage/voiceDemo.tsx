// import React, { useState, useRef, type ReactElement } from "react";
// import ReactPlayer from "react-player";
// import { GIFs } from "../constants/gifPaths";

// interface LanguageAudio {
//   name: string;
//   url: string;
// }

// const audioList: LanguageAudio[] = [
//   { name: "Hindi", url: GIFs.AUDIO_HINDI },
//   { name: "Bengali", url: GIFs.AUDIO_BENGALI },
//   { name: "Tamil", url: GIFs.AUDIO_TAMIL },
//   { name: "Punjabi", url: GIFs.AUDIO_PUNJABI },
//   { name: "Marathi", url: "/Voices/Tamil.wav" },
// ];

// export default function VoiceDemo(): ReactElement {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const playerRef = useRef<any>(null);

//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [isMuted, setIsMuted] = useState<boolean>(false);
//   const [progress, setProgress] = useState<number>(0);

//   const handlePrev = (): void => {
//     setCurrentIndex((prev) => (prev - 1 + audioList.length) % audioList.length);
//     setIsPlaying(true);
//     setProgress(0);
//   };

//   const handleNext = (): void => {
//     setCurrentIndex((prev) => (prev + 1) % audioList.length);
//     setIsPlaying(true);
//     setProgress(0);
//   };

//   const handleLangSelect = (index: number): void => {
//     setCurrentIndex(index);
//     setIsPlaying(true);
//     setProgress(0);
//   };

//   const handleProgress = (state: { played: number }): void => {
//     setProgress(state.played);
//   };

//   const handleSeek = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ): void => {
//     if (!playerRef.current) return;
//     const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//     const clickX = e.clientX - rect.left;
//     const newProgress = Math.min(Math.max(clickX / rect.width, 0), 1);
//     setProgress(newProgress);
//     playerRef.current.seekTo(newProgress, "fraction");
//   };

//   return (
//     <div className="bg-black flex items-center justify-center">
//       <div className="flex flex-col md:flex-col max-w-6xl w-full gap-4 mb-8 mt-10">
//         <div>
//           <h2 className="text-4xl font-bold mb-2">Voice Demo</h2>
//           <p className="text-gray-400 text-lg">
//             Listen to samples, switch languages, and explore natural emotion &
//             clarity.
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8">
//           <div className="flex-1 bg-[#1E2533] rounded-3xl p-8 border border-gray-700 text-white">
//             <ReactPlayer
//               ref={playerRef}
//               url={audioList[currentIndex].url}
//               playing={isPlaying}
//               muted={isMuted}
//               controls={false}
//               height={0}
//               width={0}
//               onEnded={handleNext}
//               // @ts-expect-error below bypasses TypeScript error if needed
//               onProgress={handleProgress}
//             />

//             <div className="flex items-center gap-3 mb-8">
//               <button
//                 onClick={() => setIsMuted(!isMuted)}
//                 className="text-3xl hover:scale-110 transition-transform"
//               >
//                 {isMuted ? "🔇" : "🔊"}
//               </button>
//               <div
//                 className="flex-1 h-2 bg-gray-700 rounded-full cursor-pointer relative overflow-hidden"
//                 onClick={handleSeek}
//               >
//                 <div
//                   className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-200 ease-linear"
//                   style={{ width: `${progress * 100}%` }}
//                 />
//               </div>
//             </div>

//             <div className="flex justify-center items-center gap-10 mb-10">
//               <button
//                 onClick={handlePrev}
//                 className="text-4xl hover:scale-110 transition-transform"
//               >
//                 ⏮️
//               </button>
//               <button
//                 onClick={() => setIsPlaying(!isPlaying)}
//                 className="text-5xl hover:scale-110 transition-transform"
//               >
//                 {isPlaying ? "⏸️" : "▶️"}
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="text-4xl hover:scale-110 transition-transform"
//               >
//                 ⏭️
//               </button>
//             </div>

//             <p className="text-gray-400 mb-4 text-sm">Select Output Language</p>
//             <div className="flex flex-wrap gap-3">
//               {audioList.map((lang, i) => (
//                 <button
//                   key={lang.name}
//                   onClick={() => handleLangSelect(i)}
//                   className={`px-6 py-2.5 rounded-xl text-base font-medium border transition-all ${
//                     currentIndex === i
//                       ? "bg-white text-black border-white"
//                       : "bg-transparent border-gray-500 text-gray-300 hover:border-gray-400"
//                   }`}
//                 >
//                   {lang.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col min-w-[300px] bg-[#1E2533] rounded-3xl p-8 border border-gray-700 text-white">
//             <h3 className="text-2xl font-semibold mb-8">Quick Stats</h3>
//             <div className="flex flex-col gap-6 text-base">
//               <div className="flex justify-between text-gray-300">
//                 <span>Words Processed</span>
//                 <span className="font-semibold text-white">12.4M</span>
//               </div>
//               <div className="flex justify-between text-gray-300">
//                 <span>Mins. Used</span>
//                 <span className="font-semibold text-white">2,500</span>
//               </div>
//               <div className="flex justify-between text-gray-300">
//                 <span>Avg. Latency</span>
//                 <span className="font-semibold text-white">180ms</span>
//               </div>
//               <div className="flex justify-between text-gray-300">
//                 <span>Supported Locales</span>
//                 <span className="font-semibold text-white">40+</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect, type ReactElement } from "react";
import { GIFs } from "../constants/gifPaths";

interface LanguageAudio {
  name: string;
  url: string;
}

const audioList: LanguageAudio[] = [
  { name: "Hindi", url: GIFs.AUDIO_HINDI },
  { name: "Bengali", url: GIFs.AUDIO_BENGALI },
  { name: "Tamil", url: GIFs.AUDIO_TAMIL },
  { name: "Punjabi", url: GIFs.AUDIO_PUNJABI },
  { name: "Marathi", url: "/Voices/Tamil.wav" },
];

export default function VoiceDemo(): ReactElement {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1 fraction

  /**
   * Load track when index changes
   */
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();
    setProgress(0);

    if (isPlaying) audioRef.current.play().catch(() => {});
  }, [currentIndex]);

  /**
   * Auto play/pause state when toggled
   */
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [isPlaying]);

  /**
   * Sync mute state
   */
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted]);

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + audioList.length) % audioList.length);
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % audioList.length);
    setIsPlaying(true);
  };

  const handleLangSelect = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleSeek = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!audioRef.current) return;

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    const newFraction = Math.min(Math.max(clickX / rect.width, 0), 1);

    setProgress(newFraction);
    audioRef.current.currentTime = newFraction * audioRef.current.duration;
  };

  /**
   * Update seek bar
   */
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const fraction =
      audioRef.current.currentTime / (audioRef.current.duration || 1);
    setProgress(fraction);
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="flex flex-col md:flex-col max-w-6xl w-full gap-4 mb-8 mt-10">
        <div>
          <h2 className="text-4xl font-bold mb-2">Voice Demo</h2>
          <p className="text-gray-400 text-lg">
            Listen to samples, switch languages, and explore natural emotion &
            clarity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8">
          <div className="flex-1 bg-[#1E2533] rounded-3xl p-8 border border-gray-700 text-white">

            {/** ----------- AUDIO ELEMENT ----------- */}
            <audio
              ref={audioRef}
              src={audioList[currentIndex].url}
              onEnded={handleNext}
              onTimeUpdate={handleTimeUpdate}
            />

            {/** ----------- Controls + Progress ----------- */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-3xl hover:scale-110 transition-transform"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>

              <div
                className="flex-1 h-2 bg-gray-700 rounded-full cursor-pointer relative overflow-hidden"
                onClick={handleSeek}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-200 ease-linear"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

            {/** ----------- Play / Pause / Next / Prev ----------- */}
            <div className="flex justify-center items-center gap-10 mb-10">
              <button
                onClick={handlePrev}
                className="text-4xl hover:scale-110 transition-transform"
              >
                ⏮️
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-5xl hover:scale-110 transition-transform"
              >
                {isPlaying ? "⏸️" : "▶️"}
              </button>

              <button
                onClick={handleNext}
                className="text-4xl hover:scale-110 transition-transform"
              >
                ⏭️
              </button>
            </div>

            <p className="text-gray-400 mb-4 text-sm">Select Output Language</p>

            {/** ----------- Language Buttons ----------- */}
            <div className="flex flex-wrap gap-3">
              {audioList.map((lang, i) => (
                <button
                  key={lang.name}
                  onClick={() => handleLangSelect(i)}
                  className={`px-6 py-2.5 rounded-xl text-base font-medium border transition-all ${
                    currentIndex === i
                      ? "bg-white text-black border-white"
                      : "bg-transparent border-gray-500 text-gray-300 hover:border-gray-400"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/** ----------- Right Side Stats ----------- */}
          <div className="flex flex-col min-w-[300px] bg-[#1E2533] rounded-3xl p-8 border border-gray-700 text-white">
            <h3 className="text-2xl font-semibold mb-8">Quick Stats</h3>
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
