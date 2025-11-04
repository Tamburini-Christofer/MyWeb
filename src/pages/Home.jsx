import { useState } from "react";
import RotatingText from "../components/RotatingText";
import SplashCursor from '../components/SplashCursor'

const Home = () => {
  const colors = ["#6654ccff", "#EE9133", "#36b150ff", "#22afb6ff", "#bb13bbff"];
  const [bgColor, setBgColor] = useState(colors[0]);

  const handleNext = (index) => {
    setBgColor(colors[index % colors.length]);
  };

  return (
    <div className="containerHome text-center text-white">
      <h1 className="mb-6 text-3xl font-bold">Fai la tua scelta</h1>
      <SplashCursor />
      <div
        className="containerAnim flex justify-center items-center h-[80vh] rounded-xl"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 2s ease",
        }}
      >
        <RotatingText
          texts={[
            "WEB DEVELOPER",
            "BLENDER",
            "PHOTOGRAPHY",
            "VIDEODRONE",
            "STAMPA3D",
          ]}
          mainClassName="px-4 py-2 text-white overflow-hidden justify-center rounded-lg"
          staggerFrom="last"
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          staggerDuration={0}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          rotationInterval={2000}
          onNext={handleNext} // cambia colore a ogni parola
        />
      </div>
    </div>
  );
};

export default Home;
