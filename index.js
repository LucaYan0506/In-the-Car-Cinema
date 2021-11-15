


function check(){
    var ls = ["welcome","location","film","food","feedback","footer"];

    for (var i = 0; i < ls.length;i++){
        var location = document.getElementById(ls[i]);
        console.log(location.getBoundingClientRect().top + ls[i]);

        if (location.getBoundingClientRect().top == 0){
            document.getElementById(ls[i] + "-link").style.color = "white";
        }
        else{
            document.getElementById(ls[i] + "-link").style.color = ""
        }
    }


}
