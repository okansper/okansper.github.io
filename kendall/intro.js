$(document).ready(() => {
    
//INTRODUCTORY SEQUENCE
    const BEFOREKNOT=14;
    const KNOTANIMATIONLEN=32;
    document.getElementById("pinkknot").onclick="openURL()";
    setTimeout(function(){
        
        make_opaque("pinkknot");
        setTimeout(function(){
            unhide_elem("title");  
            setTimeout(function(){
                unhide_class("pagecloud");  
                unhide_elem("arrow");
            }, 5*1000);
        }, KNOTANIMATIONLEN*1000);
    }, BEFOREKNOT*1000);
});

var OUTRO = true;
function arrow_click(){
    if (OUTRO){
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


function flip_each_page_to_card(){
    var list_class_elem = document.getElementsByClassName("pagecloud");
    //let prefix = "";
    for (i=1; i<list_class_elem.length; i++){
        (function (ind) {
            setTimeout(function(){
                var element = list_class_elem[ind];
                element.src = "assets/rainbowlines.png";
                element.style.opacity="100%"
                element.style.height="400px";
                
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
 
function unfade(class_name) {
    var list_class_elem = document.getElementsByClassName(class_name);
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
    if (op >= 1){
        clearInterval(timer);
    }
    var i;
    for (i=0; i<list_class_elem.length; i++){
        var element = list_class_elem[i];
        element.style.display = 'block';
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }
    }, 10); 
}