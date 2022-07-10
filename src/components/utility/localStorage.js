import { useState } from "react";

export const useLocalStorage = (key, init) => {
  const [storage, setStorage] = useState(() => {
    if (typeof window === "undefined") {
      return init;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : init;
    } catch (error) {
      return init;
    }
  });

  const setValue = (value) => {
    try {
      const valToStore = value instanceof Function ? value(storage) : value;
      setStorage(valToStore);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(valToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
