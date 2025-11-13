// src/constants/gifPaths.ts
export const GIFs = {
  BLUE_BG_VIDEO: "/Videos/Blue BG Video.mp4",
  CINEMATIC_LOGO_REVEAL: "/Videos/Cinematic Logo Reveal.gif",
  GIF_BLUE_BG_VIDEO: "/Videos/GIF Blue BG Video.gif",
  GIF_LANDING_PAGE_VIDEO: "/Videos/GIF Landing Page Video.gif",
  GIF_PURPLE_BG_VIDEO: "/Videos/GIF-Purple-BG-Video.gif",
  LANDING_PAGE_VIDEO_PPT: "/Videos/Landing Page Video (PPT).mp4",
  PURPLE_BG_VIDEO: "/Videos/Purple BG Video.mp4",
  CLONE: "https://www.youtube.com/embed/9m9BZEVm8to",
  CONNECT: "https://www.youtube.com/embed/yya5iAvjlsE",
  DUB: "https://www.youtube.com/embed/6kEeRsuqET8",
  RANDOM_THOUGHTS: "/Videos/Video 2.mp4",
  AUDIO_BENGALI: "/Voices/Bengali.wav",
  AUDIO_HINDI: "/Voices/Hindi.wav",
  AUDIO_MARATHI: "/Voices/Marathi.wav",
  AUDIO_PUNJABI: "/Voices/Punjabi.wav",
  AUDIO_TAMIL: "/Voices/Tamil.wav",
} as const;

export type GIFKey = keyof typeof GIFs;
