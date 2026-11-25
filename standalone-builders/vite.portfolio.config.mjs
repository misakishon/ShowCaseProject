import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('C:/TrainAi/Portfolio/package.json');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

export default defineConfig({
    root: path.resolve('C:/TrainAi/ShowCaseProject/standalone-builders/portfolio'),
    base: '/apps/portfolio/',
    plugins: [react()],
    css: {
        postcss: 'C:/TrainAi/Portfolio',
    },
    resolve: {
        alias: {
            '@inertiajs/react': 'C:/TrainAi/ShowCaseProject/standalone-builders/portfolio/inertia-shim.jsx',
            '@': 'C:/TrainAi/Portfolio/resources/js',
            'framer-motion': 'C:/TrainAi/Portfolio/node_modules/framer-motion',
            'react': 'C:/TrainAi/Portfolio/node_modules/react',
            'react-dom': 'C:/TrainAi/Portfolio/node_modules/react-dom',
        },
        dedupe: ['react', 'react-dom'],
    },
    build: {
        outDir: 'C:/TrainAi/ShowCaseProject/public/apps/portfolio',
        emptyOutDir: true,
    },
});
