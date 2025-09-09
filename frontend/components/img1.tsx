"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Img1() {
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
        background: "#270157",
        overflow: "auto",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Responsive scene container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          paddingTop: isMobile ? "120%" : "71.111%", // Taller aspect ratio for mobile
          margin: "0 auto",
          overflow: "hidden",
          minHeight: isMobile ? "100vh" : "auto",
        }}
      >
        {/* Layer stack scaled to container via absolute fill */}
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "center",
          }}
          src="./img2/lift-l.png"
          alt="Lift left"
        />
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "cover" : "contain",
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
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "center",
          }}
          src="./door-l.png"
          alt="Door left"
        />
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "center",
          }}
          src="./door-r.png"
          alt="Door right"
        />
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "center",
          }}
          src="./interior-hanguk.png"
          alt="Interior"
        />
        <img
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "cover" : "contain",
            objectPosition: "center",
          }}
          src="./ext-hangukverse.png"
          alt="Exterior hangukverse"
        />

        {/* Navigation buttons - mobile responsive */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "20px" : "3.25%",
            right: isMobile ? "16px" : "2.25%",
            left: isMobile ? "16px" : "auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "1.5vw",
            alignItems: isMobile ? "stretch" : "center",
            zIndex: 10,
          }}
        >
          {/* Community Button */}
          <Link href="/community">
            <div
              style={{
                width: isMobile ? "100%" : "12.4vw",
                maxWidth: isMobile ? "none" : 200,
                minWidth: isMobile ? "none" : 120,
                height: isMobile ? "48px" : "2.64vw",
                minHeight: isMobile ? "48px" : 34,
                maxHeight: isMobile ? "48px" : 44,
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  opacity: 0.8,
                  background: "linear-gradient(135deg, #630063, #8e2a8e)",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
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
                  fontSize: isMobile ? "16px" : "1rem",
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "400",
                  letterSpacing: isMobile ? 0.5 : 0.96,
                  whiteSpace: "nowrap",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Community
              </div>
            </div>
          </Link>

          {/* Pro Member Button */}
          <Link href="/member">
            <div
              style={{
                width: isMobile ? "100%" : "12.4vw",
                maxWidth: isMobile ? "none" : 200,
                minWidth: isMobile ? "none" : 120,
                height: isMobile ? "48px" : "2.64vw",
                minHeight: isMobile ? "48px" : 34,
                maxHeight: isMobile ? "48px" : 44,
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  opacity: 0.8,
                  background: "linear-gradient(135deg, #630063, #8e2a8e)",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
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
                  fontSize: isMobile ? "16px" : "1rem",
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "400",
                  letterSpacing: isMobile ? 0.5 : 0.96,
                  whiteSpace: "nowrap",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Pro Member
              </div>
            </div>
          </Link>

          {/* Login/Sign up Button */}
          <Link href="/login">
            <div
              style={{
                width: isMobile ? "100%" : "12.4vw",
                maxWidth: isMobile ? "none" : 200,
                minWidth: isMobile ? "none" : 120,
                height: isMobile ? "48px" : "2.64vw",
                minHeight: isMobile ? "48px" : 34,
                maxHeight: isMobile ? "48px" : 44,
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  opacity: 0.8,
                  background: "linear-gradient(135deg, #630063, #8e2a8e)",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
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
                  fontSize: isMobile ? "16px" : "1rem",
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "400",
                  letterSpacing: isMobile ? 0.5 : 0.96,
                  whiteSpace: "nowrap",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                login / sign up
              </div>
            </div>
          </Link>
        </div>

        {/* Click Here button - enhanced mobile version */}
        <Link href="/home2">
          <div
            style={{
              position: "absolute",
              width: isMobile ? "200px" : "10.9vw",
              minWidth: isMobile ? "200px" : 120,
              maxWidth: isMobile ? "200px" : 220,
              height: isMobile ? "56px" : "1.67vw",
              minHeight: isMobile ? "56px" : 24,
              maxHeight: isMobile ? "56px" : 40,
              top: isMobile ? "calc(100% - 120px)" : "64.9%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            className="click-here-button"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "linear-gradient(135deg, #270157, #4a0a7a)",
                borderRadius: 30,
                border: "2px solid rgba(255, 255, 255, 0.4)",
                boxShadow:
                  "0px 8px 16px rgba(0, 0, 0, 0.4), inset 0px 2px 4px rgba(255, 255, 255, 0.1)",
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
                fontSize: isMobile ? "18px" : "0.9rem",
                fontFamily: "Kalnia, sans-serif",
                fontWeight: "500",
                letterSpacing: isMobile ? 1.2 : 0.84,
                textShadow: "0px 2px 6px rgba(0,0,0,0.5)",
                animation: "pulse 2s infinite",
              }}
            >
              Click Here
            </div>
          </div>
        </Link>
      </div>

      {/* Add styles for hover effects and animations */}
      <style jsx>{`
        .nav-button:hover div:first-child {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
        }

        .nav-button:active {
          transform: scale(0.98);
        }

        .click-here-button:hover div:first-child {
          transform: translateY(-3px);
          box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.5),
            inset 0px 2px 4px rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, #3d1a6b, #5c1a8b);
        }

        .click-here-button:active {
          transform: translateX(-50%) scale(0.95);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @media (max-width: 768px) {
          .nav-button {
            margin-bottom: 4px;
          }
        }

        /* Ensure touch targets are large enough */
        @media (max-width: 768px) {
          .nav-button,
          .click-here-button {
            min-height: 44px;
          }
        }
      `}</style>
    </div>
  );
}
