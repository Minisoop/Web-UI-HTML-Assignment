//Enable button when user inputs data
function tryEnableButton(){
    let username = $("#username").val();
    let password = $("#password").val();
    (username.length > 0 && password.length > 0) ? 
    $("#log-in-btn").removeClass("disabled") : 
    $("#log-in-btn").addClass("disabled");
}

//Log in if details match
function logInClicked(){
    if(!$("#log-in-btn").hasClass("disabled")){
        $("#log-in-btn").addClass("disabled");
        if(!$("#log-in-btn").hasClass("btn-danger")){
            $("#log-in-btn").addClass("btn-danger");
            //console.log($("#log-in-btn").hasClass("btn-danger") + " | " + !$("#log-in-btn").hasClass("btn-danger"))
        }
        console.log("Hello");
        setInterval(() => {
            if($("#log-in-btn").hasClass("btn-danger")){
                $("#log-in-btn").removeClass("btn-danger");
            }
        }, 1000);
    }
}