import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  entry: 'src/home/home.module.js',
  dest: 'src/home.js', // output a single application bundle
  sourceMap: false,
  format: 'umd',
  moduleName: 'home',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    // intercepts in some rollup versions
    if ( warning.indexOf("The 'this' keyword is equivalent to 'undefined'") > -1 ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated'
    // 'src/app'
  ],
  globals: {
    '@angular/common' : '_angular_common',
    '@angular/compiler' : '_angular_compiler',
    '@angular/core' : '_angular_core',
    '@angular/http' : '_angular_http',
    '@angular/platform-browser' : '_angular_platformBrowser',
    '@angular/platform-browser-dynamic' : '_angular_platformBrowserDynamic',
    '@angular/router' : '_angular_router',
    '@angular/forms' : '_angular_forms'
    // 'src/app': '_app_'
  },
  plugins: [
      nodeResolve({
        jsnext: true, 
        module: true, 
        skip: ['src/app']
      }),
      commonjs({
        include: 'node_modules/rxjs/**',
      })
  ]

}
