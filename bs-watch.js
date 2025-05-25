const browserSync = require('browser-sync').create();
const { spawn } = require('child_process');
const chokidar = require('chokidar');

// Start esbuild in watch mode
const esbuild = spawn('node', ['esbuild.config.js'], { stdio: 'inherit' });

// Start browser-sync
browserSync.init({
    server: 'public',
    files: ['public/*.html', 'public/*.css', 'public/*.js'],
    open: true,
    port: 3000,
    notify: false,
});

// Optional: watch HTML files and reload
chokidar.watch('public/*.html').on('change', () => {
    browserSync.reload();
});
