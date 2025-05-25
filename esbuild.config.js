const path = require('path');
const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

(async () => {
    const ctx = await esbuild.context({
        entryPoints: ['src/index.tsx'],
        bundle: true,
        outdir: 'public',
        minify: false,
        sourcemap: true,
        entryNames: 'site.min',
        assetNames: 'assets/[name]-[hash]',
        write: true,
        metafile: true,
        loader: {
            '.png': 'file',
            '.svg': 'file',
            '.jpg': 'file',
            '.jpeg': 'file',
            '.webp': 'file',
        },
        external: [
            'src/assets/images/*.png',
            'src/assets/images/*.jpg',
            'src/assets/images/*.jpeg',
            'src/assets/images/*.svg',
        ],
        define: {
            'process.env.NODE_ENV': '"development"',
        },
        plugins: [
            sassPlugin({
                type: 'css',
                loadPaths: [path.resolve(__dirname, 'src/assets/styles')], // ✅ Make variables available globally
                transform: (source, resolveDir) => {
                    const globalImport = `@use "variables.scss" as *;\n`; // ✅ Use only filename
                    return globalImport + source;
                }
            })
        ]
    });

    await ctx.watch();
    console.log('🚀 Watching with esbuild...');
})();
