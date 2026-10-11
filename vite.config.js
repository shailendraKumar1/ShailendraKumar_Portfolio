import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Change this to "/YOUR_REPOSITORY_NAME/" for a GitHub Pages project site.
  // For a repository named shailendra-portfolio, use "/shailendra-portfolio/".
  base: "/shailendra-portfolio/",
});