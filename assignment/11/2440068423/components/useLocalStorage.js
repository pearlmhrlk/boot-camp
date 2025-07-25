import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Gagal menyimpan ke localStorage", err);
    }
  }, [key, value]);

  return [value, setValue];
}
