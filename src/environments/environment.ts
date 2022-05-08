// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrls = {
  host: 'http://localhost:5000/',
  address: 'http://localhost:5000/api/address/',
  flat: 'http://localhost:5000/api/flat/',
  user: 'http://localhost:5000/api/user/',
}
export const environment = {
  firebase: {
    projectId: 'flatrent-f92cb',
    appId: '1:408475068079:web:c6797bea5ae5fdb851d65a',
    storageBucket: 'flatrent-f92cb.appspot.com',
    apiKey: 'AIzaSyCsi22lIrZXwFt8mEfUNnJnwHzcE-mS0gQ',
    authDomain: 'flatrent-f92cb.firebaseapp.com',
    messagingSenderId: '408475068079',
  },
  production: false,
  apiUrls,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
