$(document).ready(() => {
    
let islanddetail = document.getElementById('islanddetail');
onmouseover = (event) => { 
islanddetail.style.display='block';
}
    
     var list_island_elem = document.getElementsByClassName('islandtime');
    var i;
    for (i=0; i<list_island_elem.length; i++){
        list_island_elem[i].addEventListener('mouseover', (event) => {
            
        });
    }


});


function show_id(button_name, popup_name){
    let popup = document.getElementById(popup_name);
    popup.style.display='block';
    let button = document.getElementById(button_name);
    button.setAttribute("onclick", "hide_id('"+button_name+"' , '"+popup_name+"')");
}

function hide_id(button_name, popup_name){
    let popup = document.getElementById(popup_name);
    popup.style.display='none';
    let button = document.getElementById(button_name);
    button.setAttribute("onclick", "show_id('"+button_name+"' , '"+popup_name+"')");
}

function hide_elem(class_name) {
  var list_class_elem = document.getElementsByClassName(class_name);
    var i;
    for (i=0; i<list_class_elem.length; i++){
        list_class_elem[i].style.display = "none";  
    }
}

function show_elem(class_name) {
  var list_class_elem = document.getElementsByClassName(class_name);
    var i;
    for (i=0; i<list_class_elem.length; i++){
        list_class_elem[i].style.display = "block";
          
    }
}