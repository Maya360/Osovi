import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import * as glob from "glob";
import path from 'path';
import { resolve } from 'path';


const getHtmlEntries = () => {
  return Object.fromEntries(
    glob.sync('./**/*.html', { ignore: ['./dist/**', './node_modules/**'] }).map((file) => [
      path.relative(__dirname, file).replace(/\\/g, '/'), // Use relative paths for cross-platform compatibility
      resolve(__dirname, file),
    ])
  );
};



export default defineConfig({

  base: '/Osovi', 
  plugins: [
    handlebars({
      // Carpeta donde estarán los parciales de Handlebars
      partialDirectory: './src/partials',
      // Contexto global para las plantillas Handlebars
      context: {
        siteTitle: 'Mi Sitio Web',
        footerText: 'Todos los derechos reservados - 2024',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // Configuración para LESS (opcional: personaliza variables globales aquí si las necesitas)
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: getHtmlEntries(), // Dynamically get all HTML files
    },
  },
 
 

  server: {
    
    port: 3000, // Cambia el puerto si lo necesitas
    open: true, // Abre automáticamente el navegador al iniciar el servidor
  },
});
