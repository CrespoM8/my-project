// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

const isBuild = process.env.NODE_ENV === 'production';

export default defineConfig({
  // Solo usa root en desarrollo, no en producción
  root: isBuild ? undefined : "./src",

  build: {
    outDir: "dist", // Esto genera la carpeta en la raíz del proyecto
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), // Ruta absoluta desde la raíz
        about: resolve(__dirname, "src/formulario.html"),
      },
    },
  },

  base: "/my-project/",
});