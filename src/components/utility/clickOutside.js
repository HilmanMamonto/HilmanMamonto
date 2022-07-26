import { useState, useEffect, useRef } from "react";

export const useClickOutside = (initial = undefined) => {
  const ref = useRef();

  const [show, setShow] = useState(initial ? initial : false);

  const handleClick = (e) => {
    if (ref && !ref.current.contains(e.target)) {
      setShow(false);
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
