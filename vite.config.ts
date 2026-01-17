import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Use esbuild for minification (built-in, faster)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Manual chunk splitting for vendor code
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-popover', '@radix-ui/react-slot', '@radix-ui/react-tabs'],
          'date-vendor': ['date-fns', 'react-day-picker'],
        },
        // Better chunk naming for caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Target modern browsers for smaller output
    target: 'esnext',
  },
})
