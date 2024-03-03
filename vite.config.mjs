import { defineConfig } from 'vite';

// PLUGINS
// import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../docs',
    copyPublicDir: false,
  },
  server: {
    port: 3000
  },
  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       {
  //         src: 'src/test.txt',
  //         dest: '/'
  //       }
  //     ]
  //   })
  // ]
});