// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyDub2skpWcmg8YxfgQ0EdyFVeiXogI7tk8",
    authDomain: "angularfs-3b1fa.firebaseapp.com",
    databaseURL: "https://angularfs-3b1fa.firebaseio.com",
    projectId: "angularfs-3b1fa",
    storageBucket: "angularfs-3b1fa.appspot.com",
    messagingSenderId: "515858685952"
  }
};
