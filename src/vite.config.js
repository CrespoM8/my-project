// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", 
  build: {
    outDir: "../docs", // Requisito de entrega
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        formulario: resolve(__dirname, "src/formulario.html"), 
      },
    },
  },
  base: "./",
});