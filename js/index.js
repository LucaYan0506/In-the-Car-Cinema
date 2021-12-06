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
    window.addEventListener("load",update);
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


    //check submission of the email in the footer is not empty
    function message(form,m){
        alert(m);
        form.reset();
    }

    //set scrollbar value
    function go_to(value){
        var h = 0;
        for (var i = 1; i < ls.length & ls[i - 1] != value; i++)
            h += document.getElementById(ls[i - 1]).offsetHeight;
        window.scrollTo({
            top: h - 80,
            left: 0,
            behavior: 'smooth'
        });
    }


    //loads animation
    function loads_animation(url){
        document.querySelector('.animation').classList.add('active');
        setTimeout(() =>{
            window.location.replace(url)
        },200)
    }

    window.onload = () =>{
        const animation = document.querySelector('.animation');
        setTimeout(() =>{
            animation.classList.remove('active');
        },200)


    }

    //feature for emotes, stars and thumbs on the feedback section
    var emojis = ["",false,false,false,false,false];
    var c_emotes = ["","c_emoji1.png","c_emoji2.png","c_emoji3.png","c_emoji4.png","c_emoji5.png"]
    var u_emotes = ["","u_emoji1.png","u_emoji2.png","u_emoji3.png","u_emoji4.png","u_emoji5.png"];

    //emotes
    function change_color(value){
        var i = value[5];
        if (emojis[i])return;

        document.getElementById(value).src = "Image&assets/Feedback/" + c_emotes[i];
    }

    function change_color_back(value){
        var i = value[5];
        if (emojis[i])return;

        document.getElementById(value).src = "Image&assets/Feedback/" + u_emotes[i];
    }

    function select(value){
        var i = value[5];
        emojis[i] = true;
        for (var j = 1; j <= 5; j++){
            if (emojis[j] == true & j != i){
                emojis[j] = false;
                document.getElementById("image" + j).src = "Image&assets/Feedback/" + u_emotes[j];
            }
            if (j == i){
                emojis[i] = true;
                document.getElementById(value).src = "Image&assets/Feedback/" + c_emotes[j];
            }
        }
    }

    //stars
    var stars = ["",false,false,false,false,false];
    function fill(value){
        var i = value[4];
        for (var j = 1; j <= 5;j++){
            if (j <= i)
                document.getElementById("star" + j).src = "Image&assets/Feedback/c_star.png";
            else
                document.getElementById("star" + j).src = "Image&assets/Feedback/u_star.png";
        }
    }

    function empty(value){
        var i = value[4];
        for (var j = 1; j <= 5;j++)
            document.getElementById("star" + j).src = "Image&assets/Feedback/c_star.png";
        
        for (var j = 5; j > 0;j--){
            if (stars[j] == true)break;
            document.getElementById("star" + j).src = "Image&assets/Feedback/u_star.png";
        }
    }

    function rate(value){
        i = value[4];
        for (var j = 1; j <= 5; j++)
            stars[j] = false;
        stars[i] = true;
    }

    var thumbs = false;

    //thumbs
    function change_thumbs(value,value2){
        thumbs = true;
        document.getElementById(value).src = "Image&assets/Feedback/c_" + value + ".png";
        document.getElementById(value2).src = "Image&assets/Feedback/u_" + value2 + ".png";
    }

    //check if the user can submit 
    function submit_check(form,m){
        var star_check = false;
        var emote_check = false;

        for (var i = 1; i <= 5; i++){
            if (emojis[i])emote_check = true;
            if (stars[i])star_check = true;
        }

        if (!emote_check || !star_check)
            return alert("Pls complete the form");

        if (!thumbs)
            return alert("Pls complete the form");

        //clear the form 
        alert(m);
        form.reset();
        for (var i = 1; i <= 5; i++){
            emojis[i] = false;
            stars[i] = false;
            document.getElementById("image" + i).src = "Image&assets/Feedback/" + u_emotes[i];
            document.getElementById("star" + i).src = "Image&assets/Feedback/u_star.png";
        }
        thumbs = false;
        document.getElementById("thumbs_down").src = "Image&assets/Feedback/u_thumbs_down.png";
        document.getElementById("thumbs_up").src = "Image&assets/Feedback/u_thumbs_up.png";

    }


    function check_re_password(method){
        var password = document.getElementById("password");
        var re_password = document.getElementById("re-passoword");
        var message = document.getElementById("message2");

        if (password.value != re_password.value)
            message.innerHTML = "not matching"
        else
            message.innerHTML = "";

        if (message.innerHTML == "not matching" & method == "Form"){
            alert("Pls, type the password correctly")
            return false;
        }
        if (!check_password() & method == "Form"){
            alert("Pls, type the password correctly")
            return false;
        }
    }

    function check_password(){
        var password = document.getElementById("password");
        var message = document.getElementById("message1");

        if (password.value.length < 8)
            message.innerHTML = "password must be at least 8 characters"
        else if (!/[A-Z]/.test(password.value))
            message.innerHTML = "password must have at least a uppercase letter"
        else if (!/[1-9]/.test(password.value))
            message.innerHTML = "password must have at least a number"
        else
            message.innerHTML = ""

        if (message.innerHTML == "")
            return true
        else 
            return false
    }
