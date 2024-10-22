import { useEffect, useState } from "react";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { PiHandWaving } from "react-icons/pi";

const HelloAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  // const greetings = ["Hello", "नमस्ते"];
  const greetings = ["Hello"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  const isHello = greetings[greetingIndex] === "Hello";

  return (
    <div
      className={`transition-transform duration-1000 ease-in-out ${
        isVisible
          ? "opacity-100 transform scale-110"
          : "opacity-0 transform scale-90"
      } bounce-animation`}
    >
      <div className="flex justify-center gap-3 font-kalam">
        <h3 className="text-4xl lg:text-6xl">{greetings[greetingIndex]}</h3>
        <span className="text-3xl lg:text-5xl">
          {isHello ? <PiHandWaving /> : <LiaPrayingHandsSolid />}
        </span>
      </div>
    </div>
  );
};

export default HelloAnimation;
