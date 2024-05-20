import { useEffect, useRef } from 'react';

interface UseTimeoutProps {
  callback: () => void;
  delay: number;
}

export const useTimeout = ({ callback, delay }: UseTimeoutProps) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};
