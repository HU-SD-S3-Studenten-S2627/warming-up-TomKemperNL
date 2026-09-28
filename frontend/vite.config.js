import { defineConfig } from "vite";

export default defineConfig({
  input: {
    main: "/index.html",
    another: "/another.html",
  },
  build: {
    outDir: "../backend/src/main/resources/public",
  },
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
