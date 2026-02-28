import React from "react";
import logo from "../assets/images/logo/logo.png";

const ChakraWatermark = () => {
  return (
    <>
      <style>{`
        @keyframes chakraSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .chakra-watermark {
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 1;
          pointer-events: none;
          opacity: 0.15;
          animation: chakraSpin 25s linear infinite;
          width: 380px;
          height: 380px;
          filter: grayscale(100%) brightness(0.4);
        }
        @media (min-width: 768px) {
          .chakra-watermark {
            width: 600px;
            height: 600px;
          }
        }
        @media (min-width: 1024px) {
          .chakra-watermark {
            width: 700px;
            height: 700px;
          }
        }
      `}</style>
      <div className="chakra-watermark">
        <img
          src={logo}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </>
  );
};

export default ChakraWatermark;
