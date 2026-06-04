import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repository.endsWith(".github.io");

export default defineConfig({
  plugins: [react()],
  base: isActions ? (isUserOrOrgSite ? "/" : `/${repository}/`) : "/",
  optimizeDeps: {
    entries: ["index.html"],
  },
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
});
