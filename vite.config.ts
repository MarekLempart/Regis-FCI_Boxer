import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  // base: "/Regis-FCI_Boxer/",
  // base: process.env.NODE_ENV === 'production' ? "/Regis-FCI_Boxer/" : "/",
  // base: process.env.VITE_DEPLOY_ENV === 'ghpages' ? "/Regis-FCI_Boxer/" : "/",
  // base: process.env.VITE_DEPLOY_ENV === 'ovh' ? './' : '/',
  base: './', // Poprawna baza dla hostingu OVH
  plugins: [react()],
    // ViteImageOptimizer({
    //   png: {
    //     quality: 80, // Dostosuj jakość
    //   },
    //   webp: {
    //     lossless:true,
    //   },
    // }),
  // ],

  build: {
    outDir: 'dist', // Katalog wyjściowy
    assetsDir: 'assets', // Folder na zasoby statyczne
    rollupOptions: {
      input: './index.html', // Wskazuje na główny plik HTML
    },
  },
});
