import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(() => {
    const getKey = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", getKey);

    return () => {
      document.removeEventListener("keydown", getKey);
    };
  }, [action, key]);
}
