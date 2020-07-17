const firebase = require("firebase");

//Authenticated and methods related to our project
var firebaseConfig = {
    apiKey: "AIzaSyDT03SPTpGApl0ThIYRRoRjh4KL6luALT4",
    authDomain: "dailyplanner-78.firebaseapp.com",
    databaseURL: "https://dailyplanner-78.firebaseio.com",
    projectId: "dailyplanner-78",
    storageBucket: "dailyplanner-78.appspot.com",
    messagingSenderId: "726907895682",
    appId: "1:726907895682:web:761388e25b3e55fa21d99b"
  };
  // Initialize Firebase - using the above Object
  firebase.initializeApp(firebaseConfig);

  //Auth method - one of the tiers in order to identify, verify and authenticate users through different methods
  //Firebabse allows - google FB, Apple ID, Yahoo, Microsoft, Telephone number (SMS)
  //In the UI could let users choose their method of login (using GOOGLE or FB BUTTONS)
  var auth = firebase.auth();

  //Create a new user (SIGN UP)
//   auth.createUserWithEmailAndPassword("kyle@bootcamp.com", "123456")
//     .then((response)=>{
//         console.log("Response", response);
//         // Take the req.body.email and password -> insert into our database (create a user)
//         // We use FIREBASE in order not to hash the password ourselves.

//   }).catch((error)=>{
//       console.log("Error", error);
//   });

  //LOGIN an existing user
  auth.signInWithEmailAndPassword("kyle@bootcamp.com", "123456")
  .then((response)=>{
    console.log("Response", response);

}).catch((error)=>{
  console.log("Error", error);
});