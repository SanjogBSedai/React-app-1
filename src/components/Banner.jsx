import React, { useEffect, useState } from "react";

export default function Banner() {
  const strings = ["Web Developer", "Building Website", "As Developer"];
  const typeSpeed = 100;
  const backSpeed = 50;
  const pauseDuration = 1000;

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[loopIndex];
      let updatedIndex = currentIndex;

      if (isDeleting) {
        updatedIndex -= 1;
        if (updatedIndex <= 0) {
          setIsDeleting(false);
          setLoopIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      } else {
        updatedIndex += 1;
        if (updatedIndex >= currentString.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }

      setDisplayText(currentString.slice(0, updatedIndex));
      setCurrentIndex(updatedIndex);
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? backSpeed : typeSpeed
    );

    return () => clearInterval(typingInterval);
  }, [currentIndex, isDeleting, loopIndex, strings]);

  return (
    <div className="bg-black w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:p-[24px] text-[#00df9a]">
          Learn with us
        </div>
        <h2 className="text-white text-5xl md:text-[80px] md:p-[24px]">
          Grow with us.
        </h2>
        <div className="text-[20px] md:text-[50px] md:p-[24px] text-white">
          Learn
          <span className="pl-2">{displayText}</span>
        </div>
        <button className="bg-[#00df9a] text-white p-3 rounded">
          Get started
        </button>
      </div>
    </div>
  );
}
