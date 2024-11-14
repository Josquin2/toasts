import { useState } from "#app";
import type { Toast, ToastOptions, Position } from "@/types/toasts";

// generates a unique ID for each toast
const uniqueId = (): number => Math.floor(Math.random() * 10000);

export const useToastsStore = () => {
  // state for storing all active toasts
  const allToasts = useState<Toast[]>("toasts", () => []);

  const defaultDuration = 2500;
  const defaultPosition: Position = "bottom-right";

  const toast = (text: string, options?: Partial<ToastOptions>) => {
    const newToast: Toast = {
      id: uniqueId(),
      text,
      options: {
        duration: options?.duration ?? defaultDuration,
        position: options?.position ?? defaultPosition,
        theme: options?.theme ?? "dark",
      },
    };

    // add the toast to the list
    allToasts.value.push(newToast);

    // automatically remove the toast after its duration
    setTimeout(() => {
      const index = allToasts.value.findIndex((t) => t.id === newToast.id);
      if (index !== -1) {
        allToasts.value.splice(index, 1);
      }
    }, newToast.options.duration);
  };

  /**
   * retrieves all toasts for a specific position.
   * @param position - the position to filter toasts by.
   * @returns a filtered list of toasts matching the position.
   */

  const getToastsByPosition = (position: Position): Toast[] =>
    allToasts.value.filter((toast) => toast.options.position === position);

  return {
    toast, // function to add a new toast
    getToastsByPosition, // function to get toasts by position
  };
};
