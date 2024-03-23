/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import path from 'path'

/* PLUGINS */ 
import { viteStaticCopy } from 'vite-plugin-static-copy'

/* SOURCE =================================================================== */ 
const STATIC_SOURCE = [
  {
    src: path.resolve(__dirname, './src/card') + '/[!.]*',
    dest: "card",
  },
  {
    src: path.resolve(__dirname, './src/seo') + '/[!.]*',
    dest: ".",
  },
];

/* CONFIG =================================================================== */ 
export default defineConfig({
  root: 'src',
  envDir: path.resolve(__dirname),
  envPrefix: 'GWZ_',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    copyPublicDir: false,
  },
  server: {
    port: 3000,
    host: true,
  },
  plugins: [
    viteStaticCopy({
      targets: STATIC_SOURCE
    }),
  ]
});