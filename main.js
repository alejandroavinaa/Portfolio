
let darkbutton = document.getElementById("darkMode");

let lightbutton = document.getElementById("lightMode");

let changeColorLight = function(){
    document.body.style.backgroundColor ="";
    document.body.style.color="";
};

let changeColorDark = function(){
    document.body.style.backgroundColor="rgb(88,88,88)";
    document.body.style.color = "white";
};


darkbutton.onclick = changeColorDark;

lightbutton.onclick = changeColorLight;

