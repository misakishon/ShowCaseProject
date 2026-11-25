import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('C:/TrainAi/BEZ_HAIR_STUDIO/package.json');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

export default defineConfig({
    root: path.resolve('C:/TrainAi/ShowCaseProject/standalone-builders/bez'),
    base: '/apps/bez-hair-studio/',
    plugins: [react()],
    css: {
        postcss: 'C:/TrainAi/BEZ_HAIR_STUDIO',
    },
    resolve: {
        alias: {
            '@inertiajs/react': 'C:/TrainAi/ShowCaseProject/standalone-builders/bez/inertia-shim.jsx',
            '@': 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js',
            'react': 'C:/TrainAi/BEZ_HAIR_STUDIO/node_modules/react',
            'react-dom': 'C:/TrainAi/BEZ_HAIR_STUDIO/node_modules/react-dom',
            'lucide-react': 'C:/TrainAi/BEZ_HAIR_STUDIO/node_modules/lucide-react',
            'chart.js': 'C:/TrainAi/BEZ_HAIR_STUDIO/node_modules/chart.js',
        },
        dedupe: ['react', 'react-dom'],
    },
    build: {
        outDir: 'C:/TrainAi/ShowCaseProject/public/apps/bez-hair-studio',
        emptyOutDir: true,
    },
});
