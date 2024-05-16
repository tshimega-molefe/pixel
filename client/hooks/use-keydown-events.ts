"use client";
import { useEffect } from "react";

/**
 * Custom hook for handling specific keydown events.
 * @param handler An object mapping key identifiers to handler functions.
 */
const useKeydownEvents = (handler: { [key: string]: () => void }) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (handler[event.key]) {
        handler[event.key](); // Call the handler corresponding to the key
      }
    };

    // Add event listener for the 'keydown' event on the document
    document.addEventListener("keydown", handleKeydown);

    return () => {
      // Remove event listener when the component unmounts or dependencies change
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handler]); // Re-run the effect if handler change
};

export default useKeydownEvents;
