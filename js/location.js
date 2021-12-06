//get all elements that have class="locations"
var elements = document.getElementsByClassName("locations");
//add the id of these elements in the ls
var ls = [];
for (var i = 0; i < elements.length; i++){
    ls.push(elements[i].id);
}

//set scrollbar value
function location_go_to(value){
    var h = 0;
    for (var i = 1; i < ls.length & ls[i - 1] != value; i++)
        h += document.getElementById(ls[i - 1]).offsetHeight;
    window.scrollTo({
        top: h - 80,
        left: 0,
        behavior: 'smooth'
      });

      console.log(h);
}