const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js');
// mix.postCss('resources/assets/css/style.bundle.css', 'public/css');
// mix.postCss('resources/css/app.css', 'public/css', [
//     //
// ]);

// mix.js('resources/assets/plugins/global/plugins.bundle.js', 'public/assets/global')
mix.js('resources/assets/plugins/custom/prismjs/prismjs.bundle.js', 'public/assets/plugins/custom/prismjs')
.js('resources/assets/js/scripts.bundle.js', 'public/assets/js')
.js('resources/assets/js/pages/custom/profile/profile.js', 'public/assets/js/pages/custom/profile')

.postCss('resources/assets/plugins/global/plugins.bundle.css', 'public/assets/plugins/global')
.postCss('resources/assets/plugins/custom/prismjs/prismjs.bundle.css', 'public/assets/plugins/custom/prismjs')
.postCss('resources/assets/css/style.bundle.css', 'public/assets/css')
.postCss('resources/assets/css/themes/layout/header/base/light.css', 'public/assets/css/themes/layout/header/base')
.postCss('resources/assets/css/themes/layout/header/menu/light.css', 'public/assets/css/themes/layout/header/menu')
.postCss('resources/assets/css/themes/layout/aside/light.css', 'public/assets/css/themes/layout/aside')
.postCss('resources/assets/css/themes/layout/brand/light.css', 'public/assets/css/themes/layout/brand');
