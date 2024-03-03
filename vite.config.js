import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dosc',
  },
  server: {
    port: 3000
  },
});