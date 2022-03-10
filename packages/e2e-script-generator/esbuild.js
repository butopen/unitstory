
const watch = process.argv.includes("-w")


const options = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: 'dist/index.js',
}
if (watch) {
    options.watch = {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        },
    }
}

require('esbuild').build(options)
