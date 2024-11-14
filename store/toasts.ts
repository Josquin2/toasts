// ~/store/toasts.ts
import { useState } from "#app";
import type { Toast, ToastOptions, Position } from "@/types/toasts";

const uniqueId = (): number => Math.floor(Math.random() * 10000);

export const useToastsStore = () => {
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

    allToasts.value.push(newToast);

    setTimeout(() => {
      const index = allToasts.value.findIndex((t) => t.id === newToast.id);
      if (index !== -1) {
        allToasts.value.splice(index, 1);
      }
    }, newToast.options.duration);
  };

  const getToastsByPosition = (position: Position): Toast[] =>
    allToasts.value.filter((toast) => toast.options.position === position);

  return {
    toast,
    getToastsByPosition,
  };
};
