import { useEffect, useRef } from "react";
import { keyBoardSthortCuts } from "./shortcut.config";

export function useKeyboardShortCuts(onAction) {
  const sequenceState = useRef({});
  useEffect(() => {
    const handleKeyDown = (event) => {
      let handled = false;
      keyBoardSthortCuts.forEach((shortcut) => {
        // All shortcuts now use sequence (even single-key)
        const seq = shortcut.sequence;
        const state = sequenceState.current[shortcut.id] || 0;
        const step = seq[state];
        if (
          (!step.alt || event.altKey) &&
          (!step.ctrl || event.ctrlKey) &&
          (!step.shift || event.shiftKey) &&
          event.key.toLowerCase() === step.key
        ) {
          sequenceState.current[shortcut.id] = state + 1;
          if (state + 1 === seq.length) {
            event.preventDefault();
            onAction?.(shortcut.action);
            sequenceState.current[shortcut.id] = 0;
            handled = true;
          }
        } else {
          sequenceState.current[shortcut.id] = 0;
        }
      });
      // Optionally, reset all sequences if a non-matching key is pressed
      if (!handled) {
        Object.keys(sequenceState.current).forEach(
          (id) => (sequenceState.current[id] = 0),
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onAction]);
}
