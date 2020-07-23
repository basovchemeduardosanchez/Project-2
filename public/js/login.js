
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
firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();




console.log(firebaseConfig);
var emailInput = "";  
var passwordInput = "";
var nameInput = "";
//$(".helper-text").css("display", "none");
$("#regSubmitBtn").on("click", function(){
  emailInput = $("#regEmail").val();
  console.log(emailInput);
  passwordInput = $("#regPassword").val();
  console.log(passwordInput);
  nameInput = $("#regName").val();
  console.log(nameInput);
  if (emailInput || passwordInput) {
    firebase.auth().createUserWithEmailAndPassword(emailInput, passwordInput).then((response)=>{
      console.log(response);
      addUser({
        "name": $("#regName").val(),
        "email": $("#regEmail").val()
    }, (pData)=>{
       console.log("pData:", pData);
        localStorage.setItem('currentUserId', pData.id);
       console.log("pData.Id", pData.id);
        // window.location.assign('/welcome');
    });
    }).catch(function(){
    console.log("action verification");
    })
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      }).catch(function(){
        console.log('Error');
        //$(".helper-text").text("Wrong Password");
      });
      // [END sendemailverification]
    }
    sendEmailVerification();
  } else{
    $(".helper-text").text("Enter a valid email and password");
  }
})

$( "#submitLogin" ).on( "click", function(){
  //console.log("si funciona")
  emailInput = $("#emailLogin").val();
  //console.log(emailInput);
  passwordInput = $("#passwordLogin").val();
  //console.log(passwordInput);
  if (emailInput || passwordInput) {
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput).then((response)=>{
      //window.location.assign('/userDashboard');
      //console.log('RESPONSE', response);
      //console.log( getUserByEmail );
      getUserByEmail( response.user.email, function( pData ){
        if( pData ){
          localStorage.setItem( 'currentUser', JSON.stringify( pData ) );
          window.location.assign( `/userDashboard` );
        } else {
          console.log(  response );

          addUser( {
            name: response.user.email,
            email: response.user.email
          }, function( pData ){
            localStorage.setItem( 'currentUser', JSON.stringify( pData ) );
            window.location.assign( `/userDashboard` );
          } );
        }
      } );
    }).catch(function(){
      // $("#password").addClass("invalid");
      // $("#password").prop("aria-invalid", "true");
      // $(".helper-text").css("display", "block");
      // $("#enterButton").attr("href", "./events.html");
      alert("Incorrect Details");
      //$(".helper-text").text("Wrong Password");
    });
  } else {//if (emailInput === "" || passwordInput === ""){
    alert("Enter a valid email and password");
  }/* else {
    console.log("hi");

    //window.location.assign('/userDashboard');

  }*/
} );


