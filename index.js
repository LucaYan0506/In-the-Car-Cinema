


function check(){
    var ls = ["welcome","location","film","food","feedback","footer"];

    for (var i = 0; i < ls.length;i++){
        var location = document.getElementById(ls[i]);

        if (location.getBoundingClientRect().bottom == 0){
            console.log(location.getBoundingClientRect().bottom + ls[i]);
            document.getElementById(ls[i] + "-link").style.color = "white";
        }
        else{
            document.getElementById(ls[i] + "-link").style.color = ""
        }
    }


}
