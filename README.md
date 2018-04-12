# CamemorizeGallery

#### Week 5 Group Project, 4/13/2018

#### By [Ron Craig](https://github.com/r-craig73), [Alex Ficklin](https://github.com/AlexFicklin), [Jasun Feddema](https://github.com/jaybojaybojaybo), [Johnny Mayer](https://github.com/johnnymayer)

## Description

A Javascript application that will allow users to upload multiple photos and detect emotions on a single person in that photo. The website will also host that photo in the image gallery and will be able to be accessed by anyone. Log In and Log Out feature also included to keep our users privatized.

![alt text](https://i.imgur.com/BkzksH9.jpg)
![alt text](https://i.imgur.com/SoO9BUU.png)
![alt text](https://i.imgur.com/z02cjUc.png)

## User stories
* As a user, I would like to log into my site using an email and password.
* As a user, I would like to log out of the website.
* As a user, I would like to upload an image to a database.
* As a user, I would like view the image gallery.
* As a user, I would like to detect a person's primal emotion and wearing headwear (hat, hoodie, scarf, etc.).
* As a user, I would like to use the computer's webcam to upload an image (ongoing).

## Setup

* Open Terminal
* Clone the repository 'https://github.com/AlexFicklin/Camemorize-Gallery' with the Git Clone command
* Run NPM Install
* Run NG Build
* Run NG Serve --Open
* The browser should open and direct itself to Localhost:4200

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase Installation Setup
### In order to run the database, please follow the instructions below...
* In the top directory, install AngularFire and Firebase npm packages using the terminal command below:
`$ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save`
* Signup and Log into Firebase (https://console.firebase.google.com/).
* Create a new project by providing a name for your project and selecting your Contry/region.
* In the "Overview" section, select 'Add Firebase to your web app'.
* Copy the initializing settings into a clipboard.
* Within the Firebase dashboard, select 'Realtime Database'.  Then select start in Test Mode.
* For Firebase credentials, create a new file called 'api-keys.ts' in the 'src/app/'' directory.
* Place your Firebase credentials and other information as shown below:
```
export let masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

* Add the following lines in the .gitignore file..
```
#Firebase credentials
/src/app/api-keys.ts
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
