// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
production: false,
firebase: {
  apiKey: "AIzaSyDnKLhL71OhkIXtx5jFtwWjLUyoEphcxWk",
  authDomain: "camemorize-gallery.firebaseapp.com",
  databaseURL: "https://camemorize-gallery.firebaseio.com",
  projectId: "camemorize-gallery",
  storageBucket: "camemorize-gallery.appspot.com",
  messagingSenderId: "719213587118"
  }
};
