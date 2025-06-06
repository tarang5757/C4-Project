import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div
        className="transform scale-[1.2] sm:scale-[1.3] md:scale-[1.4] lg:scale-[1.5] transition-all duration-300 ease-in-out"
        style={{
          filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.1))",
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        <DotLottieReact
          src="https://lottie.host/bf37e986-235a-4ef7-b475-dff801d63826/ahb4ouknlK.lottie"
          loop
          autoplay
          style={{
            width: "min(400px, 80vw)",
            height: "min(400px, 80vw)",
            imageRendering: "crisp-edges",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
