"use client";
import { useState, useEffect } from "react";

export default function Img2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        background: "white",
        overflow: "auto",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Responsive scene container with proper aspect ratio */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          aspectRatio: isMobile ? "3/4" : "1440/1024",
          margin: "0 auto",
          overflow: "hidden",
          minHeight: isMobile ? "100vh" : "auto",
        }}
      >
        {/* Background lift interior images */}
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="./lift-int.png"
          alt="Lift interior"
        />
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="./img2/lift-r.png"
          alt="Lift right"
        />
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="./img2/lift-l.png"
          alt="Lift right"
        />

        {/* Zoom interior overlay */}
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src="./zoom-int.png"
          alt="Zoom interior"
        />

        {/* Left arrow button */}
        <img
          style={{
            position: "absolute",
            width: isMobile ? "60px" : "86px",
            height: isMobile ? "60px" : "86px",
            left: isMobile ? "20px" : "22px",
            top: isMobile ? "50%" : "573px",
            transform: isMobile ? "translateY(-50%)" : "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            zIndex: 10,
          }}
          src="./left-arr.png"
          alt="Left arrow"
          className="nav-arrow"
        />

        {/* Right arrow button */}
        <img
          style={{
            position: "absolute",
            width: isMobile ? "60px" : "86px",
            height: isMobile ? "60px" : "86px",
            right: isMobile ? "20px" : "24px",
            top: isMobile ? "50%" : "659px",
            transform: isMobile
              ? "translateY(-50%) rotate(180deg)"
              : "rotate(180deg)",
            transformOrigin: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            zIndex: 10,
          }}
          src="./left-arr.png"
          alt="Right arrow"
          className="nav-arrow"
        />

        {/* Call the Lift button and arrows container */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: isMobile ? "auto" : "631px",
            bottom: isMobile ? "80px" : "auto",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "12px" : "16px",
            zIndex: 10,
          }}
        >
          {/* Left lift arrow */}
          <img
            style={{
              width: isMobile ? "24px" : "32px",
              height: isMobile ? "24px" : "32px",
              transform: "rotate(-90deg)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            src="./lift-arrow.png"
            alt="Lift arrow up"
            className="lift-arrow"
          />

          {/* Call the Lift button */}
          <div
            style={{
              width: isMobile ? "140px" : "157px",
              height: isMobile ? "40px" : "24px",
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            className="call-lift-button"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                opacity: 0.66,
                background: "#FF98FF",
                borderRadius: 30,
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: isMobile ? "16px" : "14px",
                fontFamily: "Kalnia, sans-serif",
                fontWeight: "300",
                letterSpacing: 0.84,
                whiteSpace: "nowrap",
                textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Call the Lift
            </div>
          </div>

          {/* Right lift arrow */}
          <img
            style={{
              width: isMobile ? "24px" : "32px",
              height: isMobile ? "24px" : "32px",
              transform: "rotate(90deg)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            src="./lift-arrow.png"
            alt="Lift arrow down"
            className="lift-arrow"
          />
        </div>
      </div>

      {/* Enhanced styles */}
      <style jsx>{`
        .nav-arrow:hover {
          transform: ${isMobile ? "translateY(-50%) scale(1.1)" : "scale(1.1)"};
          filter: brightness(1.2);
        }

        .nav-arrow:active {
          transform: ${isMobile
            ? "translateY(-50%) scale(0.95)"
            : "scale(0.95)"};
        }

        .nav-arrow:nth-of-type(2):hover {
          transform: ${isMobile
            ? "translateY(-50%) rotate(180deg) scale(1.1)"
            : "rotate(180deg) scale(1.1)"};
        }

        .nav-arrow:nth-of-type(2):active {
          transform: ${isMobile
            ? "translateY(-50%) rotate(180deg) scale(0.95)"
            : "rotate(180deg) scale(0.95)"};
        }

        .lift-arrow-left:hover {
          transform: rotate(-90deg) scale(1.1);
          filter: brightness(1.2);
        }

        .lift-arrow-left:active {
          transform: rotate(-90deg) scale(0.9);
        }

        .lift-arrow-right:hover {
          transform: rotate(90deg) scale(1.1);
          filter: brightness(1.2);
        }

        .lift-arrow-right:active {
          transform: rotate(90deg) scale(0.9);
        }

        .call-lift-button:hover div:first-child {
          opacity: 0.8;
          transform: translateY(-1px);
          box-shadow: 0px 4px 8px rgba(255, 152, 255, 0.3);
        }

        .call-lift-button:active {
          transform: scale(0.98);
        }

        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          .nav-arrow {
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3));
          }

          .call-lift-button {
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
          }
        }
      `}</style>
    </div>
  );
}
