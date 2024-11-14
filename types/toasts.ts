export type Theme = "dark" | "light";
export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface Toast {
  id: number;
  text: string;
  options: ToastOptions;
}

export interface ToastOptions {
  duration: number;
  position: Position;
  theme: Theme;
}
