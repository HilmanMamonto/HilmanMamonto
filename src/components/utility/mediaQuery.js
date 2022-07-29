import { useState, useEffect } from "react";

const useMediaQuery = (minMax, size) => {
  const [matches, setMatches] = useState(false);

  const sizes = {
    max: {
      xs: "(max-width : 0)",
      sm: "(max-width : 576px)",
      md: "(max-width : 768px)",
      lg: "(max-width : 992px)",
      xl: "(max-width : 1200px)",
      xxl: "(max-width : 1200px)",
    },
    min: {
      xs: "(min-width : 0)",
      sm: "(min-width : 576px)",
      md: "(min-width : 768px)",
      lg: "(min-width : 992px)",
      xl: "(min-width : 1200px)",
      xxl: "(min-width : 1200px)",
    },
  };

  useEffect(() => {
    const media = window.matchMedia(sizes[minMax][size]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    media.addEventListener("change", () => {
      setMatches(media.matches);
    });
  }, [matches, size]);

  return matches;
};

export default useMediaQuery;
