import React from "react";

interface VideoPortalProps {
  videoSrc: string;
  onClose: () => void;
}

const VideoPortal: React.FC<VideoPortalProps> = ({ videoSrc, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white w-full flex justify-end items-center px-4 py-2">
          <button
            onClick={onClose}
            className="text-black hover:text-gray-600 text-2xl font-bold"
          >
            ✕
          </button>
        </div>
        <iframe
          width="800"
          height="450"
          src={videoSrc}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoPortal;
