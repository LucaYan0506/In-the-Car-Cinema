//get all elements that have class="container"
var elements = document.getElementsByClassName("container");
//add the id of these elements in the ls
var ls = [];
for (var i = 0; i < elements.length; i++){
    ls.push(elements[i].id);
}

//update the position of ls
function update(){
    //set the height of all section of index page
    var h = 0;
    for (var i = 1; i < ls.length; i++){
        h += document.getElementById(ls[i - 1]).offsetHeight;
        document.getElementById(ls[i]).style.top = h + 'px';
    }
}

//every time the browser is resized update the position 
window.addEventListener("resize", update);

//use update() function when the user launch the browser
update();

//change the color of nav-link when the page is scrolled
var prev_link = document.getElementById(document.getElementById("prev-link").name);
prev_link.style.color = "white";

function check(){
    for (var i = 0; i < ls.length;i++){
        var location = document.getElementById(ls[i]);
        var vh = window.innerHeight + 1;
        if (location.getBoundingClientRect().bottom <= vh & location.getBoundingClientRect().bottom >= 50){
            prev_link.style.color = "";
            prev_link = document.getElementById(ls[i] + "-link");
            prev_link.style.color = "white";
        }
    }
}


//show an pop up message
function message(form,m){
    alert(m);
    form.reset();
}

//set scrollbar value
function go_to(value){
    var h = 0;
    for (var i = 1; i < ls.length & ls[i - 1] != value; i++)
        h += document.getElementById(ls[i - 1]).offsetHeight;
        if (value == "film")h+= 60;
    window.scrollTo({
        top: h - 80,
        left: 0,
        behavior: 'smooth'
      });

      console.log(h);
}

function loads_animation(url){
    document.querySelector('.animation').classList.add('active');
    setTimeout(() =>{
        window.location.replace(url)
    },500)
}

window.onload = () =>{
    const animation = document.querySelector('.animation');
    setTimeout(() =>{
        animation.classList.remove('active');
    },500)


}


function change_color(value){
    var i = value[5];
    var imgs = ["c_emoji1.png","c_emoji2.png","c_emoji3.png","c_emoji4.png","c_emoji5.png"]
    document.getElementById(value).src = "Image&assets/Feedback/" + img[i];
    console.log("feS");
}