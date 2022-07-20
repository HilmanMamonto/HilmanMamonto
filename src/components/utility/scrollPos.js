import React from "react";
import { useState, useEffect } from "react";

export const useScrollPos = () => {
  const [scrollPos, setScrollPos] = useState(0);

  console.log(scrollPos);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { scrollPos };
};
