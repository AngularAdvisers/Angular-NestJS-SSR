// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

const WebpackConfigFactory = require('@nestjs/ng-universal').WebpackConfigFactory;

// module.exports = WebpackConfigFactory.create(webpack, {
//   mode: 'none',
//   entry: {
//     // This is our Express server for Dynamic universal
//     server: './server/main.ts'
//   },
//   target: 'node',
//   resolve: { extensions: ['.ts', '.js'] },
//   optimization: {
//     minimize: false
//   },
//   output: {
//     // Puts the output at the root of the dist folder
//     path: path.join(__dirname, 'dist'),
//     library: 'app',
//     libraryTarget: 'umd',    
//     filename: '[name].js'
//   },
//   module: {
//     rules: [
//       { test: /\.ts$/, loader: 'ts-loader' },
//       {
//         // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
//         // Removing this will cause deprecation warnings to appear.
//         test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
//         parser: { system: true },
//       },
//     ]
//   },
//   plugins: [
//     new webpack.ContextReplacementPlugin(
//       // fixes WARNING Critical dependency: the request of a dependency is an expression
//       /(.+)?angular(\\|\/)core(.+)?/,
//       path.join(__dirname, 'src'), // location of your src
//       {} // a map of your routes
//     ),
//     new webpack.ContextReplacementPlugin(
//       // fixes WARNING Critical dependency: the request of a dependency is an expression
//       /(.+)?express(\\|\/)(.+)?/,
//       path.join(__dirname, 'src'),
//       {}
//     )
//   ]
// });



module.exports = WebpackConfigFactory.create(webpack, {
  // Nest server for SSR
  server: './server/main.ts'
});
