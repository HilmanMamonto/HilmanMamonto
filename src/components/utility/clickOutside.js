import { useState, useEffect, useRef } from "react";

export const useClickOutside = () => {
  const ref = useRef();

  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (ref && !ref.current.contains(e.target)) {
      setShow(false);
      console.log("outside");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });

  const onToggle = () => {
    setShow(!show);
  };

  return { show, ref, onToggle };
};
