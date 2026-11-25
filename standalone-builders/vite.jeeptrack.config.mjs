import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire('C:/TrainAi/JeepTrackWebsiteapp/package.json');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

export default defineConfig({
    root: path.resolve('C:/TrainAi/ShowCaseProject/standalone-builders/jeeptrack'),
    base: '/apps/jeeptrack/',
    plugins: [react()],
    css: {
        postcss: 'C:/TrainAi/JeepTrackWebsiteapp',
    },
    resolve: {
        alias: {
            '@': 'C:/TrainAi/JeepTrackWebsiteapp/resources/js',
        },
        dedupe: ['react', 'react-dom'],
    },
    build: {
        outDir: 'C:/TrainAi/ShowCaseProject/public/apps/jeeptrack',
        emptyOutDir: true,
    },
});
