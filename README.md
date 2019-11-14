# Angular-NestJS-SSR

Angular Server Side Rendering with Nest.js Schematics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Yarn](https://yarnpkg.com)

[Angular](https://angular.io/)

[AngularCLI](https://cli.angular.io/)

[Jest](https://jestjs.io)

[Angular Style Guide](https://angular.io/guide/styleguide)

[RxJS]https://rxjs-dev.firebaseapp.com/)

[Firebase](https://firebase.google.com/docs/)

[Firebase CLI](https://firebase.google.com/docs/cli/)

[AngularFire](https://github.com/angular/angularfire2)

## Common NPM commands in Yarn

|NPM Command                                                                                | Yarn Command              | Description (_wherever necessary_)                                                 |
|:------------------------------------------------------------------------------------------|:--------------------------|------------------------------------------------------------------------------------|
|npm install                                                                                |yarn <br/> yarn install    |Will install packages listed in the `package.json` file                             |
|npm install `pkg-name` <br/> npm install --save `pkg-name`                                 | yarn add `pkg-name`       |By default Yarn adds the `pgk-name` to `package.json` and `yarn.lock` files         |
|npm install `pkg-name@1.0.0`                                                               | yarn add `pgk-name@1.0.0` |                                                                                    |
|npm install `pkg-name` --save-dev                                                          | yarn add `pkg-name` --dev |                                                                                    |
|npm install `pkg-name` --peer                                                              | yarn add `pkg-name`--peer |                                                                                    |
|npm install `pkg-name` --optional                                                          | yarn add --optional       |                                                                                    |
|npm install -g `pkg-name`                                                                  | yarn global add `pkg-name`| Careful, yarn add global `pkg-name` adds packages `global` and `pkg-name` locally! |
|npm update                                                                                 | yarn upgrade              | Note: It's called **upgrade** in yarn                                              |
|npm uninstall `pkg-name`                                                                   | yarn remove `pkg-name`    |                                                                                    |
|npm run `script-name`                                                                      | yarn run `script-name`    |                                                                                    |
|npm init                                                                                   | yarn init                 |                                                                                    |
|npm pack                                                                                   | yarn pack                 | Creates a compressed gzip archive of the package dependencies                      |
|npm link                                                                                   | yarn link                 |                                                                                    |
|npm outdated                                                                               | yarn outdated             |                                                                                    |
|npm publish                                                                                | yarn publish              |                                                                                    |
|npm run                                                                                    | yarn run                  |                                                                                    |
|npm cache clean                                                                            | yarn cache clean          |                                                                                    |
|npm login                                                                                  | yarn login (and logout)   |                                                                                    |
|npm test                                                                                   | yarn test                 |                                                                                    |
|npm install --production                                                                   | yarn --production         |                                                                                    |
|npm  --version                                                                             | yarn version              |                                                                                    |
|npm  info | yarn info|


### New Commands in Yarn

|Yarn Command                      | Description                                                               |
|----------------------------------|---------------------------------------------------------------------------|
|yarn why `pkg-name`               | Builds a dependency graph on why this package is being used               |
|yarn clean                        | Frees up space by removing unnecessary files and folders from dependencies|
|yarn licenses ls                  | Inspect the licenses of your dependencies                                 |
|yarn licenses generate-disclaimer | Automatically create your license dependency disclaimer                   |

## Install the Angular CLI

### NPM

```
npm install -g @angular/cli
```

### Yarn

```
yarn global add @angular/cli
```

## Install TypeScript

### NPM

```
npm install -g typescript
```

### Yarn

```
yarn global add typescript
```

## Install Firebase Tools

### NPM

```
npm install -g firebase-tools  
```

### Yarn

```
yarn global add firebase-tools  
```

## Install NPM Check Updates

### NPM

```
npm install -g npm-check-updates
```

### Yarn

```
yarn global add npm-check-updates
```

## Code scaffolding

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

When true, does not initialize a git repository.

#### --minimal=[true|false]

When true, creates a project without any testing frameworks. (Use for learning purposes only.)

## ng new

```
ng new angular-ssr-nestjs --routing --style=scss --skip-install --skip-git --minimal=true
```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Modify .gitignore

Add the following to the .gitignore file

```
# node
package-lock.json

# yarn
yarn.lock
yarn-error.log

# Firebase
.firebase/*
firebase-debug.log
```

## Install Angular Universal module for Nest

```
ng add @nestjs/ng-universal
```

## Add Firebase Polyfills to Express

```
xhr2 bufferutil utf-8-validate
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
