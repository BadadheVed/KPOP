export default function Img2() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "white",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: 3135,
          height: 2229,
          left: -830,
          top: -669,
          position: "absolute",
        }}
        src="./lift-int.png"
      />
      <img
        style={{
          width: 3135,
          height: 2229,
          left: -830,
          top: -669,
          position: "absolute",
        }}
        src="./img2/lift-r.png"
      />
      <img
        style={{
          width: 3135,
          height: 2229,
          left: -834,
          top: -669,
          position: "absolute",
        }}
        src="./img2/lift-r.png"
      />
      <img
        style={{
          width: 1440,
          height: 1024,
          left: 0,
          top: 0,
          position: "absolute",
        }}
        src="./zoom-int.png"
      />

      <img
        style={{
          width: 32,
          height: 32,
          left: 944.02,
          top: 659.02,
          position: "absolute",
          transform: "rotate(-90deg)",
          transformOrigin: "top left",
        }}
        src="./lift-arrow.png"
      />
      <img
        style={{
          width: 32,
          height: 32,
          left: 976.02,
          top: 659.02,
          position: "absolute",
          transform: "rotate(90deg)",
          transformOrigin: "top left",
        }}
        src="./lift-arrow.png"
      />
      <div
        data-property-1="Group 1"
        style={{
          width: 157,
          height: 24,
          left: 973,
          top: 631,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 157,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.66,
            background: "#FF98FF",
            borderRadius: 30,
          }}
        />
        <div
          style={{
            left: 37,
            top: 2,
            position: "absolute",
            color: "white",
            fontSize: 14,
            fontFamily: "Kalnia",
            fontWeight: "300",
            letterSpacing: 0.84,
            wordWrap: "break-word",
          }}
        >
          Call the Lift
        </div>
      </div>
      <img
        style={{
          width: 86,
          height: 86,
          left: 22,
          top: 573,
          position: "absolute",
        }}
        src="./left-arr.png"
      />
      <img
        style={{
          width: 86,
          height: 86,
          left: 1416,
          top: 659,
          position: "absolute",
          transform: "rotate(180deg)",
          transformOrigin: "top left",
        }}
        src="./left-arr.png"
      />
    </div>
  );
}
