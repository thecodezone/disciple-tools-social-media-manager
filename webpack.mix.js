let mix = require('laravel-mix');
const {browserSync} = require("laravel-mix");

mix.webpackConfig({
  output: {
    publicPath: "/wp-content/plugins/disciple-tools-social-media-manager/dist/",
  }
})

mix.setPublicPath('dist')
  .js('assets/js/smm_scripts.js', 'dist/smm_scripts.js')
  .postCss('assets/css/styles.css', 'dist/styles.css')
  .browserSync({
    proxy: "https://dt.local",
    files: [
      'dist/*.js',
      'dist/*.css',
    ]
  })
