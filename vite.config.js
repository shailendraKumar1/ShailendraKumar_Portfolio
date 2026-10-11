import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Vercel serves at the domain root; GitHub Pages uses the repository path.
  base: process.env.VERCEL ? "/" : "/ShailendraKumar_Portfolio/",
});
