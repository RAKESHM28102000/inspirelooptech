import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import TextTransition, { presets } from "react-text-transition";

// Hero text
const TEXTS = ["Websites", "Branding", "Mockups", "AI Apps", "Logos"];

// 3D STARFIELD COMPONENT
function StarsBackground({ count = 1200 }) {
  const ref = React.useRef();

  // Generate random star positions
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 50; // X
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30; // Y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 50; // Z
    }
    return arr;
  }, [count]);

  // Animate gentle rotation for dynamic effect
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.03;
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00C8FF"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

// HERO SECTION
const HeroSection = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setIndex((i) => i + 1), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex justify-center items-center text-center min-h-screen overflow-hidden">
      {/* 3D STARFIELD BACKGROUND */}
      <Canvas
        className="absolute inset-0 -z-20"
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <StarsBackground count={1500} />
      </Canvas>

      {/* Gradient + subtle glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#0f0f0f] via-[#1e1e1e] to-[#121212] opacity-80"></div>
      <div className="absolute w-80 h-80 bg-[#FFC107] opacity-10 rounded-full blur-3xl top-1/3 left-1/4 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-[#7C4DFF] opacity-10 rounded-full blur-3xl top-2/3 right-1/3 animate-pulse delay-500"></div>
      <div className="absolute w-72 h-72 bg-[#18FFFF] opacity-10 rounded-full blur-3xl bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse delay-1000"></div>

      {/* TEXT CONTENT (centered, 80% width) */}
      <div className="relative z-10 px-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#E0E0E0] mb-6 leading-tight">
          We Create Stunning
        </h1>
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 text-[#00C8FF] drop-shadow-md">
          <TextTransition springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
        <p className="text-[#B0B0B0] mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Specializing in websites, logos, mockups, AI-powered apps, and complete brand
          identity to elevate your digital presence. We also provide coaching in design and
          tech to empower rural talent.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
