function showpass()
{
    var x =document.getElementById("pass");
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");
    if(password.value.length >= 6  )
    {
        alert("Login Succesfull");
        window.location.replace("newpage.html");
        return false;
    }
    else
    {
        alert("Please check the credentials and try again");
    }
}

function logout()
{
    window.location.replace("index.html");
}