import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// GitHub Pages: this repo is a user site (username.github.io),
// so the site is served at the domain root. Keep base as '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js'
  }
});

