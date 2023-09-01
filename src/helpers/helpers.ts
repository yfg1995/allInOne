import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const generateRandomUniqueId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
