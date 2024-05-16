"use client";
import { RefObject, useEffect, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref.
 * @param ref Reference to the target element.
 * @param handler Function to call when an outside click is detected.
 * @param delay Debounce delay in milliseconds.
 * @param eventTypes Array of event types to listen for (e.g., ['mousedown', 'touchstart']).
 */
const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  delay: number = 400, // Default delay of 400ms
  eventTypes: Array<keyof DocumentEventMap> = ["mousedown", "touchstart"] // Default events
) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const eventListener = (event: MouseEvent | TouchEvent) => {
      if (
        !event.target ||
        !ref.current ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        handler();
      }, delay);
    };

    // Add event listeners based on the specified event types
    eventTypes.forEach((eventType) => {
      // Using `as keyof DocumentEventMap` to assure TypeScript of the event type
      document.addEventListener(eventType, eventListener as EventListener);
    });

    return () => {
      // Clean up event listeners and the timeout
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, eventListener as EventListener);
      });
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [ref, handler, delay, eventTypes]); // Include eventTypes in dependencies

  return debounceRef;
};

export default useOnClickOutside;
