import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // This is the port which we will use in docker
    // add the next lines if you're using windows and hot reload doesn't work
    //  watch: {
    //    usePolling: true
    //  }
  },
  optimizeDeps: {
    include: ['react-icons'],  // Include react-icons in optimization
  },
  build: {
    rollupOptions: {
      external: ['react-icons'], // Treat react-icons as an external dependency during build
    },
  },
})
