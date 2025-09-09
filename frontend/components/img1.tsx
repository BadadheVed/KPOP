import Link from "next/link";

export default function Img1() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        background: "#270157",
        overflow: "auto", // Enable scrolling
        margin: 0,
        padding: 0,
      }}
    >
      {/* Container for all images with fixed dimensions */}
      <div
        style={{
          width: "100%",
          minWidth: "1440px", // Ensure minimum width to show full image
          height: "1024px", // Fixed height to maintain aspect ratio
          position: "relative",
          margin: "0 auto", // Center the content
        }}
      >
        {/* Background layers - maintaining original dimensions */}
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "contain", // Show entire image without cropping
          }}
          src="./img2/lift-l.png"
          alt="Lift left"
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "contain",
          }}
          src="./img2/lift-r.png"
          alt="Lift right"
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "contain",
          }}
          src="./door-l.png"
          alt="Door left"
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "contain",
          }}
          src="./door-r.png"
          alt="Door right"
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "contain",
          }}
          src="./interior-hanguk.png"
          alt="Interior"
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "contain",
          }}
          src="./ext-hangukverse.png"
          alt="Exterior hangukverse"
        />

        {/* Navigation buttons - positioned according to original design */}
        <div
          style={{
            position: "absolute",
            top: "33px", // Using original pixel values
            right: "32px",
            display: "flex",
            gap: "20px",
            zIndex: 10,
          }}
        >
          {/* Community Button */}
          <Link href={"/community"}>
            <div
              style={{
                width: 179,
                height: 38,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  opacity: 0.66,
                  background: "#630063",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: 30,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "300",
                  letterSpacing: 0.96,
                  whiteSpace: "nowrap",
                }}
              >
                Community
              </div>
            </div>
          </Link>

          {/* Pro Member Button */}
          <Link href={"/member"}>
            <div
              style={{
                width: 179,
                height: 38,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  opacity: 0.66,
                  background: "#630063",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: 30,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "300",
                  letterSpacing: 0.96,
                  whiteSpace: "nowrap",
                }}
              >
                Pro Member
              </div>
            </div>
          </Link>

          {/* Login/Sign up Button */}
          <Link href={"/login"}>
            <div
              style={{
                width: 179,
                height: 38,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  opacity: 0.66,
                  background: "#630063",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: 30,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Kalnia, sans-serif",
                  fontWeight: "300",
                  letterSpacing: 0.96,
                  whiteSpace: "nowrap",
                }}
              >
                login / sign up
              </div>
            </div>
          </Link>
        </div>

        {/* Click Here button - positioned according to original design */}
        <div
          style={{
            width: 157,
            height: 24,
            position: "absolute",
            top: "664px", // Using original pixel value
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: 0.66,
              background: "#270157",
              borderRadius: 30,
            }}
          />
          <Link href={"/home2"}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: 14,
                fontFamily: "Kalnia, sans-serif",
                fontWeight: "300",
                letterSpacing: 0.84,
              }}
            >
              Click Here
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
