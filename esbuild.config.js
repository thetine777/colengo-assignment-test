const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

(async () => {
    const ctx = await esbuild.context({
        entryPoints: ['src/index.tsx'],
        bundle: true,
        minify: true,
        sourcemap: false,
        plugins: [sassPlugin()],
        loader: {
            '.png': 'file',
            '.svg': 'file',
        },
        define: {
            'process.env.NODE_ENV': '"development"',
        },
        outdir: 'public',
        entryNames: 'site.min',
        assetNames: 'site.min',
        metafile: true,
    });

    await ctx.watch();
    console.log('🚀 Watching for changes...');
})();
