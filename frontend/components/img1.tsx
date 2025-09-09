"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Img1() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close menu when switching to desktop
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        {/* Mobile Hamburger Menu Button */}
        {isMobile && (
          <div
            onClick={toggleMenu}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(99, 0, 99, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 1000,
              transition: "all 0.3s ease",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  background: "white",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "rotate(45deg) translateY(6px)"
                    : "rotate(0deg)",
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  background: "white",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  background: "white",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-6px)"
                    : "rotate(0deg)",
                }}
              />
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay - Now fully transparent */}
        {isMobile && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "transparent", // Changed from rgba(39, 1, 87, 0.95) to transparent
              backdropFilter: "none", // Removed blur effect
              zIndex: 999,
              opacity: menuOpen ? 1 : 0,
              visibility: menuOpen ? "visible" : "hidden",
              transition: "all 0.4s ease",
              pointerEvents: menuOpen ? "auto" : "none", // Allow clicks through when closed
            }}
            onClick={toggleMenu}
          />
        )}

        {/* Navigation buttons */}
        <div
          style={{
            position: isMobile ? "fixed" : "absolute",
            top: isMobile ? "80px" : "3.25%",
            right: isMobile ? "20px" : "2.25%",
            left: isMobile ? "20px" : "auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "16px" : "1.5vw",
            alignItems: isMobile ? "stretch" : "center",
            zIndex: isMobile ? 1001 : 10,
            transform: isMobile
              ? `translateY(${menuOpen ? "0" : "-20px"})`
              : "none",
            opacity: isMobile ? (menuOpen ? 1 : 0) : 1,
            visibility: isMobile
              ? menuOpen
                ? "visible"
                : "hidden"
              : "visible",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Community Button */}
          <Link href="/community">
            <div
              onClick={() => isMobile && setMenuOpen(false)}
              style={{
                width: isMobile ? "100%" : "12.4vw",
                maxWidth: isMobile ? "none" : 200,
                minWidth: isMobile ? "none" : 120,
                height: isMobile ? "56px" : "2.64vw",
                minHeight: isMobile ? "56px" : 34,
                maxHeight: isMobile ? "56px" : 44,
                position: "relative",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  isMobile && menuOpen
                    ? "translateY(0)"
                    : isMobile
                    ? "translateY(-10px)"
                    : "none",
                transitionDelay: isMobile ? "0.1s" : "0s",
              }}
              className="nav-button"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: "linear-gradient(135deg, #630063, #8e2a8e)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                  borderRadius: 28,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
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
                  fontSize: isMobile ? "18px" : "1rem",
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "400",
                  letterSpacing: isMobile ? 0.8 : 0.96,
                  whiteSpace: "nowrap",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                Community
              </div>
            </div>
          </Link>

          {/* Pro Member Button */}
          <Link href="/member">
            <div
              onClick={() => isMobile && setMenuOpen(false)}
              style={{
                width: isMobile ? "100%" : "12.4vw",
                maxWidth: isMobile ? "none" : 200,
                minWidth: isMobile ? "none" : 120,
                height: isMobile ? "56px" : "2.64vw",
                minHeight: isMobile ? "56px" : 34,
                maxHeight: isMobile ? "56px" : 44,
                position: "relative",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  isMobile && menuOpen
                    ? "translateY(0)"
                    : isMobile
                    ? "translateY(-10px)"
                    : "none",
                transitionDelay: isMobile ? "0.2s" : "0s",
              }}
              className="nav-button"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: "linear-gradient(135deg, #630063, #8e2a8e)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                  borderRadius: 28,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
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
                  fontSize: isMobile ? "18px" : "1rem",
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "400",
                  letterSpacing: isMobile ? 0.8 : 0.96,
                  whiteSpace: "nowrap",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                Pro Member
              </div>
            </div>
          </Link>

          {/* Login/Sign up Button */}
          <Link href="/login">
            <div
              onClick={() => isMobile && setMenuOpen(false)}
              style={{
                width: isMobile ? "100%" : "12.4vw",
                maxWidth: isMobile ? "none" : 200,
                minWidth: isMobile ? "none" : 120,
                height: isMobile ? "56px" : "2.64vw",
                minHeight: isMobile ? "56px" : 34,
                maxHeight: isMobile ? "56px" : 44,
                position: "relative",
                cursor: "pointer",
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform:
                  isMobile && menuOpen
                    ? "translateX(0)"
                    : isMobile
                    ? "translateX(-20px)"
                    : "none",
                transitionDelay: isMobile ? "0.3s" : "0s",
              }}
              className="nav-button"
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  background: "linear-gradient(135deg, #630063, #8e2a8e)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
                  borderRadius: 28,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
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
                  fontSize: isMobile ? "18px" : "1rem",
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "400",
                  letterSpacing: isMobile ? 0.8 : 0.96,
                  whiteSpace: "nowrap",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                login / sign up
              </div>
            </div>
          </Link>
        </div>

        {/* Click Here button */}
        <Link href="/home2">
          <div
            style={{
              position: "absolute",
              width: isMobile ? "220px" : "10.9vw",
              minWidth: isMobile ? "220px" : 120,
              maxWidth: isMobile ? "220px" : 220,
              height: isMobile ? "64px" : "1.67vw",
              minHeight: isMobile ? "64px" : 24,
              maxHeight: isMobile ? "64px" : 40,
              top: isMobile ? "calc(100% - 100px)" : "64.9%",
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
                borderRadius: 32,
                border: "2px solid rgba(255, 255, 255, 0.3)",
                boxShadow:
                  "0px 10px 20px rgba(0, 0, 0, 0.5), inset 0px 2px 4px rgba(255, 255, 255, 0.1)",
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
                fontSize: isMobile ? "20px" : "0.9rem",
                fontFamily: "Kalnia, sans-serif",
                fontWeight: "500",
                letterSpacing: isMobile ? 1.5 : 0.84,
                textShadow: "0px 3px 8px rgba(0,0,0,0.6)",
                animation: "pulse 2s infinite",
              }}
            >
              Enter
            </div>
          </div>
        </Link>
      </div>

      {/* Enhanced styles */}
      <style jsx>{`
        .nav-button:hover div:first-child {
          transform: translateY(-2px);
          box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.5);
          background: linear-gradient(135deg, #7a1a7a, #a033a0);
        }

        .nav-button:active {
          transform: scale(0.98);
        }

        .click-here-button:hover div:first-child {
          transform: translateY(-3px);
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.6),
            inset 0px 3px 6px rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, #3d1a6b, #5c1a8b);
          border-color: rgba(255, 255, 255, 0.5);
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
            opacity: 0.85;
          }
        }

        /* Mobile hamburger hover effect */
        @media (max-width: 768px) {
          .hamburger-menu:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
