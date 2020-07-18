const firebase = require("firebase");

//Authenticated and methods related to our project
var firebaseConfig = {
  apiKey: "AIzaSyC4sjn4Q5FhCRrTdOQqKa0sb1vKxhVwdZI",
  authDomain: "daily-planner-621d4.firebaseapp.com",
  databaseURL: "https://daily-planner-621d4.firebaseio.com",
  projectId: "daily-planner-621d4",
  storageBucket: "daily-planner-621d4.appspot.com",
  messagingSenderId: "1047146204554",
  appId: "1:1047146204554:web:b8af2aae3183c84c8ecc73",
  measurementId: "G-79V0PXQ2DJ"
};
  // Initialize Firebase - using the above Object
  

  //Auth method - one of the tiers in order to identify, verify and authenticate users through different methods
  //Firebabse allows - google FB, Apple ID, Yahoo, Microsoft, Telephone number (SMS)
  //In the UI could let users choose their method of login (using GOOGLE or FB BUTTONS)
  //var auth = firebase.auth();

  //Create a new user (SIGN UP)
//   auth.createUserWithEmailAndPassword("kyle@bootcamp.com", "123456")
//     .then((response)=>{
//         console.log("Response", response);
//         // Take the req.body.email and password -> insert into our database (create a user)
//         // We use FIREBASE in order not to hash the password ourselves.

//   }).catch((error)=>{
//       console.log("Error", error);
//   });

firebase.initializeApp(firebaseConfig);

console.log(firebaseConfig);
var emailInput = "";  
var passwordInput = "";
$(".helper-text").css("display", "none");
$("#createAccount").on("click", function(){
  emailInput = $("#email").val();
  console.log(emailInput);
  passwordInput = $("#password").val();
  console.log(passwordInput);
  if (emailInput || passwordInput) {
    firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput).then((response)=>{
      console.log(response);
    }).catch(function(){
      $(".helper-text").text("Wrong Password");
    })
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      }).catch(function(){
        $(".helper-text").text("Wrong Password");
      });
      // [END sendemailverification]
    }
    sendEmailVerification();
  } else{
    $(".helper-text").text("Enter a valid email and password");
  }
})

$("#enterButton").on("click", function(){
  console.log("si funciona")
  emailInput = $("#email").val();
  console.log(emailInput);
  passwordInput = $("#password").val();
  console.log(passwordInput);
  if (emailInput || passwordInput) {
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput).then((response)=>{
    console.log(response);
    }).catch(function(){
      $("#password").addClass("invalid");
      $("#password").prop("aria-invalid", "true");
      $(".helper-text").css("display", "block");
      $("#enterButton").attr("href", "./events.html");
    });
  } else if (emailInput === "" || passwordInput === ""){
    alert("Enter a valid email and password");
  } else {
    console.log("hi");
   
  }
})


//LOGIN an existing user connect to App´s userDB

auth.signInWithEmailAndPassword("cvaz789@email.com", "123456")
  .then((response)=>{
    console.log("Response", response);

}).catch((error)=>{
  console.log("Error", error);
});