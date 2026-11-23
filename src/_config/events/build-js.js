import esbuild from 'esbuild';

/** Every script in src/assets/scripts/bundle, minified into _includes so the head can inline it. */
export const buildAllJs = () =>
  esbuild.build({
    target: 'es2020',
    entryPoints: ['src/assets/scripts/bundle/*.js'],
    bundle: true,
    minify: true,
    outdir: 'src/_includes/scripts'
  });
