// watch.js
const browserSync = require('browser-sync').create();
const { spawn } = require('child_process');
const chokidar = require('chokidar');
const path = require('path');

// 1. Start esbuild in watch mode (calls esbuild.config.js)
const esbuildProcess = spawn('node', ['esbuild.config.js'], {
    stdio: 'inherit',
});

// 2. Start a live server on /public
browserSync.init({
    server: 'public',
    files: ['public/*.html', 'public/*.css', 'public/*.js'],
    open: true,
    port: 3000,
    notify: false,
});

// 3. Watch all files in src/ and reload browser on change
chokidar.watch('src/**/*.{tsx,ts,scss,css,html}').on('change', (filePath) => {
    console.log(`🔁 File changed: ${filePath}`);
    browserSync.reload();
});
