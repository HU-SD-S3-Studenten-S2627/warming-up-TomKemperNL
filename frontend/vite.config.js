import { defineConfig } from "vite";

export default defineConfig({
  input: {
    main: "/index.html",
  },
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
