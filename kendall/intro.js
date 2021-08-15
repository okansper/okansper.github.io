let modal = document.getElementById("myModal");
let modal_span = document.getElementsByClassName("close")[0];
let modalparagraph = document.getElementById("modal-paragraph");
var audioObj;
const BEFOREKNOT=9;
const KNOTANIMATIONLEN=9;

window.onload = function() {
  
    setTimeout(function(){
        modal.style.display='block';
    }, 1600);
    modal_span.onclick = function() {
        modal.style.display = "none";
        audioObj = new Audio("assets/sounds/walking.m4a");
        audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();});
        
    }
    
    
    setTimeout(function(){
        make_opaque("pinkknot");
        imageflashing(1.5);
        setTimeout(function(){
            imageflashing(.5);
        }, (1.5*7*1000));
        setTimeout(function(){
            imageflashing(.3);
        }, ((1.5*7*1000)+(.5*6*1000)));
        
        setTimeout(function(){
            unhide_elem("title");  
            setTimeout(function(){
                unhide_class("pagecloud");  
                setTimeout(function(){
                    unhide_elem("arrow");
                }, 5000);
            }, 8000);
        }, KNOTANIMATIONLEN*1000);
    }, BEFOREKNOT*1000);
    
    
};

var OUTRO = true;
function arrow_click(){
    if (OUTRO){
        audioObj.pause();
        hide_class("kendallpic");
     setTimeout(function(){
        hide_elem("pinkknot");
        setTimeout(function(){
            hide_elem("cloudright");
            hide_elem("cloudleft");
            flip_each_page_to_card();
            setTimeout(function(){
                    
                setTimeout(function(){
                    document.getElementById("title").classList.add("titleup");
                    document.getElementById("toppage").classList.add("centerpage");
                    document.getElementById("title").style = "display:block; position:fixed; top:5%;left:40%;width:170px;height:50px;"
                    document.getElementById("toppage").style = "display:block; position:fixed;z-index:3;top:35%; left:40%; opacity:100%";
                    
                }, 2*1000);
                
                setTimeout(function(){
                    unhide_elem("background");
                    document.getElementById("arrow").classList.add("pulse");
                    OUTRO = false;
                }, 4*1000);
            }, 1000);
        }, 1000);
    }, 2*1000);   
    }
    else{
        window.location = "text.html";
    }
   
}

function imageflashing(SPEED){
    var list_class_elem = document.getElementsByClassName("kendallpic");
    var curr= document.getElementById("last");
    var prev = document.getElementById("last");
    
    for (i=0; i<list_class_elem.length; i++){
        (function (ind) {
            setTimeout(function(){
                prev.style.display="none";
                curr = list_class_elem[ind];
                curr.style.display="block";
                prev = curr;
            }, (ind*SPEED*1000));
        })(i);
    }
}

function flip_each_page_to_card(){
    var list_class_elem = document.getElementsByClassName("pagecloud");
    for (i=1; i<list_class_elem.length; i++){
        (function (ind) {
            setTimeout(function(){
                var element = list_class_elem[ind];
                element.src = "assets/rainbowlines.png";
                element.style.opacity="100%"
                element.style.height="400px";
                const audioObj = new Audio("assets/sounds/sparkle.mp3");
                    audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();});
            }, 1000 + (ind*300));
        })(i);
    }
}

function make_opaque(elem_name) {
  document.getElementById(elem_name).style.opacity = "100%"; 
}
function hide_elem(elem_name) {
  document.getElementById(elem_name).style.display = "none"; 
}
function unhide_elem(elem_name) {
  document.getElementById(elem_name).style.display = "block"; 
}
function unhide_class(class_name) {
    var list_class_elem = document.getElementsByClassName(class_name);
    for (i=0; i<list_class_elem.length; i++){
        var element = list_class_elem[i];
        element.style.display = 'block';
    }
}
function hide_class(class_name) {
    var list_class_elem = document.getElementsByClassName(class_name);
    for (i=0; i<list_class_elem.length; i++){
        var element = list_class_elem[i];
        element.style.display = 'none';
    }
}
 
