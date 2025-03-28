import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['balajimalathi.com'], // For dev server
  },
  preview: {
    port: 9000, // Optional: Explicitly set port (if needed)
    host: true, // Allow external access
    allowedHosts: ['balajimalathi.com'], // Required for preview
  },
});
