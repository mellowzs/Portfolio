import React, { useEffect, useRef, useState } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const isMobile = window.innerWidth <= 1000; // Tailwind's sm breakpoint

  useEffect(() => {
    const enableGyro = async () => {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        try {
          const response = await DeviceMotionEvent.requestPermission();
          if (response === "granted") {
            initVanta();
          }
        } catch (e) {
          // Permission denied or error
        }
      } else {
        initVanta();
      }
    };

    const initVanta = () => {
      if (window.VANTA && window.VANTA.NET && !vantaEffect) {
        setVantaEffect(
          window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 0.5,
            color: "#54D6BB",
            backgroundColor: "#0A192F",
            spacing: isMobile ? 25 : 18,
            points: 15,
            maxDistance: 25,
          })
        );
      }
    };

    enableGyro();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    // eslint-disable-next-line
  }, [vantaEffect]);

  return (
    <div className="fixed w-full h-screen overflow-hidden">
      {/* Vanta effect */}
      <div ref={vantaRef} className="top-0 left-0 w-full h-full" />

      {/* Opacity overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0A192F 10%, #135e4c 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
};

export default VantaBackground;
