import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('html2canvas')) {
            return 'html2canvas';
          }
          if (id.includes('jspdf')) {
            return 'jspdf';
          }
        },
      },
    },
  },
});
