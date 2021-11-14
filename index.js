


function check(){
    var home_top = document.getElementById("welcome");
    if (home_top.getBoundingClientRect().top == 0){
        console.log(home_top.getBoundingClientRect().top);
        document.getElementById("home").style.color = "white";
    }
    else{
        document.getElementById("home").style.color = ""
    }
}
