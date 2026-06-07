import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to prefix static assets for GitHub Pages deployment
export function asset(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Ensure we don't double slash if path starts with slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
