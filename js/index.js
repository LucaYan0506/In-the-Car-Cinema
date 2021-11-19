var prev_link = document.getElementById("welcome-link");
prev_link.style.color = "white";


function check(){
    var ls = ["welcome","location","film","food","feedback","footer"];

    for (var i = 0; i < ls.length;i++){
        var location = document.getElementById(ls[i]);
        var vh = window.innerHeight + 1;
        if (location.getBoundingClientRect().bottom <= vh & location.getBoundingClientRect().bottom >= 50){
            console.log(location.getBoundingClientRect().bottom + ls[i]);
            prev_link.style.color = "";
            prev_link = document.getElementById(ls[i] + "-link");
            prev_link.style.color = "white";
        }
    }
    



}
