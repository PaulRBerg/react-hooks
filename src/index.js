/* eslint-disable import/prefer-default-export */
import { useEffect } from "react";

/**
 * Delays side effects declaratively
 * https://twitter.com/PaulRBerg/status/1199150020085342209
 */
export function useEffectWithDelay({ condition = false, func = () => {}, delay = 1000 }) {
  useEffect(() => {
    if (condition) {
      const timeout = setTimeout(func, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
    return undefined;
  }, [condition, delay, func]);
}
