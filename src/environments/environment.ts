// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDVoFO7ZsVLq_cTJpDsXPCyfxcWjG2i_tQ',
    authDomain: 'angular-ssr-nestjs.firebaseapp.com',
    databaseURL: 'https://angular-ssr-nestjs.firebaseio.com',
    projectId: 'angular-ssr-nestjs',
    storageBucket: 'angular-ssr-nestjs.appspot.com',
    messagingSenderId: '473099260685',
    appId: '1:473099260685:web:b83a802b0eaa3586261644'
  }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
