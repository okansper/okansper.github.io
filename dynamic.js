const longDescriptMap = new Map();
const shortDescriptMap = new Map();
const picDescriptMap = new Map();
const descriptformatMap = new Map();

$(document).ready(() => {
   hide('expandedobj');
   hide('expandedphotos');
});
var FADEDOPACITY = '0.05';

let banner;
banner = $('#infinitypic');

/*function hide_elem(class_name) {
  var list_class_elem = document.getElementsByClassName(class_name);
    var i;
    for (i=0; i<list_class_elem.length; i++){
        if (list_class_elem[i].style.display === "none") {
            list_class_elem[i].style.display = "block";
          } else {
            list_class_elem[i].style.display = "none";
          }
    }
}*/

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

function fadeClass(class_name){
    var list_class_elem = document.getElementsByClassName(class_name);
    var i;
    for (i = 0; i < list_class_elem.length; i++) {
        list_class_elem[i].style.opacity = FADEDOPACITY;
    }
}
function unFadeClass(class_name){
    var list_class_elem = document.getElementsByClassName(class_name);
    var i;
    for (i = 0; i < list_class_elem.length; i++) {
        list_class_elem[i].style.opacity = "1";
    }
}

//currently not being used. 
function enableButtons(){
    var list_class_elem = document.getElementsByClassName('button');
    var i;
    for (i = 0; i < list_class_elem.length; i++) {
        list_class_elem[i].removeAttribute("disabled");
    }
}

function hide(obj_id){
    document.getElementById(obj_id).style.opacity = '0.0';
    document.getElementById(obj_id).style.zIndex='-40';
}

function unexpandWorkObj(){
    hide('expandedobj');
    hide('expandedphotos');
    document.getElementById('x_outpic').style.opacity='0.0';
    document.getElementById('x_out').setAttribute("disabled", "disabled");
    unFadeClass("workobj");
    unFadeClass('banner');
   /* try{
       document.getElementById('mermaidvid').pause(); 
    }catch(err){
        console.log("error");
    }*/
    
}
function expandWorkObj(obj_id){
    fadeClass("workobj");
    fadeClass("banner");
    var shortdescript = shortDescriptMap.get(obj_id);
    var longdescript = longDescriptMap.get(obj_id);

    var picdescript = picDescriptMap.get(obj_id);

    var descriptformat = descriptformatMap.get(obj_id);
    document.getElementById('expandedobj').style.opacity='1.0';
    document.getElementById('expandedphotos').style.opacity='1.0';
    document.getElementById('x_outpic').style.opacity='1.0';
    document.getElementById('x_out').removeAttribute("disabled");
    
    document.getElementById('expandedobj').style = descriptformat;
    document.getElementById('expandedobj').innerHTML = longdescript;
    document.getElementById('expandedphotos').innerHTML = picdescript;
        
}

function getWritingObj(){
// document.getElementById("codepic").innerHTML = "My First JavaScript";
    hide_elem("codeobj");
    hide_elem("altrealobj");
    show_elem("writingobj");
    //document.getElementById("cvpic").style.opacity = "0.5"; 
    document.getElementById("codepic").style.opacity = "0.5";
    fadeClass("altreality");
    unFadeClass("writing"); 
}

function getAltRealObj(){
      // document.getElementById("codepic").innerHTML = "My First JavaScript";
      hide_elem("codeobj");
      hide_elem("writingobj");
      show_elem("altrealobj");
      //document.getElementById("cvpic").style.opacity = "0.5"; 
      document.getElementById("codepic").style.opacity = "0.5";
      fadeClass("writing");
    unFadeClass("altreality");   
}

function getCodeObj(){
      // document.getElementById("codepic").innerHTML = "My First JavaScript";
      hide_elem("altrealobj");
      hide_elem("writingobj");
      show_elem("codeobj");
      //document.getElementById("cvpic").style.opacity = "0.5"; 
      fadeClass("writing");
    fadeClass("altreality");
      document.getElementById("codepic").style.opacity = "1";  
}

shortDescriptMap.set('pigeons', '');
longDescriptMap.set('pigeons', '');
picDescriptMap.set('pigeons', 
                   '<img src="index_files/pigeons1.png" id="pigeons2pic" style="position:fixed; left:25px; top:25px;width:460px;height:auto;">'+
        '<img src="index_files/pigeons4.png" style="position:fixed; left:25px; top:300px;width:460px;height:auto;">'+
        '<img src="index_files/pigeons3.png" style="position:fixed; left:500px; top:25px;width:460px;height:auto;">'+
                  '<img src="index_files/pigeons2.png" id="pigeons1pic" style="position:fixed; left:500px; top:300px;width:460px;height:auto;">');
descriptformatMap.set('pigeons', 'position:fixed; left:510px; top:350px; background-color: #gray; z-index:10; padding-right: 25px');


shortDescriptMap.set('frisatsun', 'December 2017 <br> <i>Fri/Sat/Sun (Material Girl in a 3D world)</i>, a VR Play<br><div class="workdescript"><img src="index_files/fri.png" id="fripic" style="float:left;padding-right:5px;width:150px;height:100px;"> An interactive, immersive narrative piece created for Brown University\'s <a class="mylink" href="http://writing3d.xyz/#Cave%20Writing">CAVE VR space</a>. A study of mood and atmosphere, intimate places and interior dialogues through sound, language, and image.  <button type="button" onclick=\'expandWorkObj("frisatsun", "fripic")\'>SEE MORE...</button></div>');
longDescriptMap.set('frisatsun', 'December 2017. <i>Fri/Sat/Sun (Material Girl in a 3D world)</i>, a VR Play<br><br>An interactive, immersive narrative piece created for Brown University\'s <a class="mylink" href="http://writing3d.xyz/#Cave%20Writing">CAVE VR space</a>. A study of mood and atmosphere, intimate places and interior dialogues through sound, language, and image. <br> <br> The ways in which texts such as music, movies, material objects, and critical theory mold experience are interrogated over the course of a fun weekend! The girls(?) in Fri/Sat/Sun both seek to process their lives through this web of texts/media, and struggle with ideas of selfhood and emotional “reality” in the face of this mediation. Here, the material takes center stage; differences between the “characters” and the “scenery” are elided, and dialogue, in a form reminiscent of the language of digital communication, is “texted” by both people and their props. The piece tries to find a form of theater commensurate to digital language and virtual experience. In taking seriously and taking pleasure in things, Fri/Sat/Sun is also interested in questioning the idea of human selfhood as independent from the materials and media that surround us.');
picDescriptMap.set('frisatsun', '<img src="index_files/fri.png" id="fripic" style="position:fixed; left:25px; top:25px;width:450px;height:300px;">'+
        '<img src="index_files/sat.png" style="position:fixed; left:25px; top:350px;width:450px;height:300px;">'+
        '<img src="index_files/sun.png" style="position:fixed; left:500px; top:25px;width:450px;height:300px;">');
descriptformatMap.set('frisatsun', 'position:fixed; left:510px; top:350px; background-color: #gray; z-index:10; padding-right: 25px');

shortDescriptMap.set('courtdebt', "April 2019. <i>The College Hill Independent</i>: Data journalism on court debt in Rhode Island <br> <img class=\"workpic\" src=\"index_files/courtdata.jpg\"> With a team of journalists investigating the cycle of court debt in RI, I wrote a program to scrape and crunch data from files from the RI Judiciary's case portal. The piece won a regional collegiate <a class='mylink' href='https://rinewstoday.com/college-journalists-win-spj-awards/'>award</a> for in-depth reporting. <button type='button' onclick='expandWorkObj('courtdebt')'>SEE MORE</button>");
longDescriptMap.set('courtdebt', "April 2019. <i>The College Hill Independent</i>: Data journalism.<br> <br> With a team of journalists investigating the cycle of court debt in RI, I wrote a program to scrape and crunch data from files from the RI Judiciary's case portal. Statistics such as percentage of Rhode Islanders in debt to the judiciary and total debt to courts were previously unavailable to the public. The project was praised by journalists and local activist groups. View all data, read about data collection method, and download my Java program <a class='mylink' href='https://drive.google.com/drive/folders/10iylFx--L8zDoUufrE1KHlPUK04ia4jG'>here</a>. Read article <a class='mylink' href='https://www.theindy.org/1739'>here</a>");
picDescriptMap.set('courtdebt', "<img src='index_files/debt_ability.jpg' style='position:fixed; left:25px; top:25px;width:450px;height:300px;'\>"+
        '<img src="index_files/courtdata.jpg" style="position:fixed; left:25px; top:350px;width:450px;height:300px;opacity:1.0;">'+
        '<img src="index_files/debt_collection.png" style="position:fixed; left:500px; top:25px;width:350px;height:180px;">'+
        '<img src="index_files/debt_percent.png" style="position:fixed; left:500px; top:240px;width:240px;height:170px;">')
descriptformatMap.set('courtdebt', 'position:fixed; left:510px; top:450px; width:450px; height:300px;')

shortDescriptMap.set('mermaid', 'December 2016 <br> Video/audio/digitally mediated performance: <i>the Drowning</i> or <i>Adventures of a GoPro</i><br><br><div class="workdescript"><img class=\'workpic\' src="index_files/mermaidpic.jpg" style="float:left;padding-right:5px;width:150px;height:100px;">Cheap, water-proof cameras have birthed an obscure Youtube genre: dads and surfers showing off their GoPros, only to have them ripped away by waves, the camera recording its own drowning. At the same time, the deep sea remains one of the most unexplored areas of the Earth, and discoveries rely on cameras that sit on the ocean-floor, recording the marine life that passes by. This immersive audiovisual performance combines these cinematic forms to explore: fact vs. fiction, man vs. ocean, sailor vs. mermaid, and male gaze vs. female subjectivity in the digital age. Found footage --> cam found by mermaid and used to create deep sea creature pageant play. With Marcel Zaes (music composition) and Maurice Decaul (music text).<button type="button" onclick=\'expandWorkObj("mermaid")\'>SEE MORE</button>');
longDescriptMap.set('mermaid', 'December 2016 <br> Video/audio/digitally mediated performance: <i>the Drowning</i> or <i>Adventures of a GoPro</i><br><br><div class="workdescript">Cheap, water-proof cameras have birthed an obscure Youtube genre: dads and surfers showing off their GoPros, only to have them ripped away by waves, the camera recording its own drowning. At the same time, the deep sea remains one of the most unexplored areas of the Earth, and discoveries rely on cameras that sit on the ocean-floor, recording the marine life that passes by. This immersive audiovisual performance combines these cinematic forms to explore: fact vs. fiction, man vs. ocean, sailor vs. mermaid, and male gaze vs. female subjectivity in the digital age. Found footage --> cam found by mermaid and used to create deep sea creature pageant play. With Marcel Zaes (music composition) and Maurice Decaul (music text).');
descriptformatMap.set('mermaid', 'position:fixed; width:460px; left:510px; top:350px; background-color: #gray; z-index:10; padding-right: 25px');
picDescriptMap.set('mermaid', "<img src='index_files/mermaidpic.jpg' style='position:fixed; left:25px; top:25px;width:450px;height:300px;'\>"+
        '<img src="index_files/mermaid1.png" style="position:fixed; left:25px; top:350px;width:450px;height:300px;opacity:1.0;">'+
        '<img src="index_files/mermaid_broad.png" style="position:fixed; left:500px; top:25px;width:450px;height:300px;">')

/*shortDescriptMap.set('mermaid', 'December 2016 <br> Digital Performance class: <i>Mermaid/Dark Night</i><br><div class="workdescript"><img src="index_files/mermaidpic.jpg" style="float:left;padding-right:5px;width:150px;height:100px;">Installation/performance project/opera: ideo created from found Youtube footage of GoPros swept away from their owners and into the waves --> found by mermaid and used to create deep sea creature panorama. With Marcel Zaes (music composition) and Maurice Decaul (music text).<button type="button" onclick="expandWorkObj("mermaid")">WATCH HERE</button></div>');
picDescriptMap.set('mermaid', '<video id="mermaidvid" width="960px" height="540px" controls><source src="index_files/mermaid.mp4" type="video/mp4"></video>');
longDescriptMap.set('mermaid', '');
descriptformatMap.set('mermaid', '');*/