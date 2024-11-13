export type Theme = "dark" | "light";
export type Type = "warning" | "error" | "message";
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
  type: Type;
}
