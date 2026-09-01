import React, { useState } from "react";

const VIDEO_ID = "T_0BN11GvF8";
const VIDEO_TITLE = "SCALA2 How to get perfect water pressure";

const YoutubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        cursor: isPlaying ? "default" : "pointer",
        pointerEvents: "auto",
        overflow: "hidden",
      }}
      onClick={() => {
        if (!isPlaying) setIsPlaying(true);
      }}
    >
      {!isPlaying ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* YouTube HQ Thumbnail Placeholder */}
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
            alt={VIDEO_TITLE}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.85)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />

          {/* Centered Play Button Overlay */}
          <button
            type="button"
            aria-label={`Play ${VIDEO_TITLE}`}
            style={{
              position: "relative",
              zIndex: 2,
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 0, 0, 0.9)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              cursor: "pointer",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.backgroundColor = "rgba(255, 0, 0, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "rgba(255, 0, 0, 0.9)";
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#ffffff"
              style={{ marginLeft: "4px" }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&rel=0&showinfo=0`}
          title={VIDEO_TITLE}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            pointerEvents: "auto",
          }}
        />
      )}
    </div>
  );
};

export default YoutubeVideo;
