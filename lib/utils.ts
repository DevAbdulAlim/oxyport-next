import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateName(name: string, maxLength: number) {
  if (name.length <= maxLength) {
    return name;
  } else {
    return name.slice(0, maxLength) + "...";
  }
}

export function genParams(params: {}) {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
    .join("&");
}
