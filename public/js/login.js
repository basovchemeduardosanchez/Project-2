$(document).ready(function(){
    var emailLogin = $("#emailLogin");
    var passwordLogin = $("#passwordLogin")
    var submitLogin = $("#submitLogin");

    submitLogin.on("click", ()=>{
        var email = emailLogin.val()
        var password = passwordLogin.val()

        console.log("Email", email)
        console.log("Password", password)
    })

})