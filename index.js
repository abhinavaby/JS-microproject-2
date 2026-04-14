const password=["25CS007","25CS008","25CS009","25CS010"];
function check(){
    let pass=document.getElementById("password").value;
    if(password.includes(pass)){
        
        window.location.href = "https://abhinavaby.github.io/Abhinav-Aby-portfolio/";

    }
    else{
        alert("Login failed");
    }
}

