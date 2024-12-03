import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

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
    // Configuración de la salida (opcional)
    outDir: 'dist', // Carpeta donde se generarán los archivos de producción
    assetsDir: 'assets', // Carpeta para los archivos estáticos dentro de dist
  },
  server: {
    
    port: 3000, // Cambia el puerto si lo necesitas
    open: true, // Abre automáticamente el navegador al iniciar el servidor
  },
});
