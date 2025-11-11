// src/constants/gifPaths.ts
export const GIFs = {
  BLUE_BG_VIDEO: "/Videos/Blue BG Video.mp4",
  CINEMATIC_LOGO_REVEAL: "/Videos/Cinematic Logo Reveal.gif",
  GIF_BLUE_BG_VIDEO: "/Videos/GIF Blue BG Video.gif",
  GIF_LANDING_PAGE_VIDEO: "/Videos/GIF Landing Page Video.gif",
  GIF_PURPLE_BG_VIDEO: "/Videos/GIF-Purple-BG-Video.gif",
  LANDING_PAGE_VIDEO_PPT: "/Videos/Landing Page Video (PPT).mp4",
  PURPLE_BG_VIDEO: "/Videos/Purple BG Video.mp4",
  CLONE: "https://www.youtube.com/embed/Ol1UNq3w_SE",
  CONNECT: "https://www.youtube.com/embed/Ol1UNq3w_SE",
  DUB: "https://www.youtube.com/embed/Ol1UNq3w_SE",
  RANDOM_THOUGHTS: "/Videos/Video 2.mp4",
} as const;

export type GIFKey = keyof typeof GIFs;
