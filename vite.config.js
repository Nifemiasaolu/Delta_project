import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// import { resolve } from 'path';
// import { readFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});