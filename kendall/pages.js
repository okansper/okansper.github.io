//change this during development
var PAGENUMBER=2; //default initialization should be 2
//CHANGE ICONS BACK TO DISPLAY NONE DEFAULT AFTER DEV

//CONSTANTS
let NEXTMORNING1 =16;
let FINALPAGENUM=74;

//IMAGES
const PAGESTRINGPREFIX="assets/bookpages/Island%20Time%201%20-%20Oblique%20Strategies_Page_";
const IMGURL_SIDEWALK="sidewalkshadows.JPG";
const IMGURL_BENEFIT="benefit3.png";

var SPREADTYPE;
let leftPage=document.getElementById("pageleft");
let rightPage=document.getElementById("pageright");
let pageA=document.getElementById("pageA");
let pageB=document.getElementById("pageB");
let pageC=document.getElementById("pageC");
let pageD=document.getElementById("pageD");

let leftarrow=document.getElementById("arrowleft");
let rightarrow=document.getElementById("arrowright");
let title=document.getElementById("title");

let eye =document.getElementById("eye");
let coin =document.getElementById("coin");
let sparkle =document.getElementById("sparkle");
let infinity =document.getElementById("infinity");
let cat =document.getElementById("cat");
let rug =document.getElementById("rug");
let bigcat =document.getElementById("bigcat");
let bigsparkle = document.createElement('img');
bigsparkle.src='assets/sparkle.png';
bigsparkle.setAttribute('id', "bigsparkle");
let musicnotes_img = document.createElement('img');
let modal = document.getElementById("myModal");
let modal_span = document.getElementsByClassName("close")[0];
let modalparagraph = document.getElementById("modal-paragraph");

//BOOLEANS
var NIGHTTIME = false;
var FLASHBACK = false;

var POPUP = false;

var NEW_CHARACTER = false;
var SHOWCHARCARD = false;
var KENDALL_UNLOCKED = false; //change this at end
var GRIMES_UNLOCKED = false;
var GUS_UNLOCKED = false;
var SARAH_UNLOCKED = false;

var NEW_MAP = false;
var SHOWMAP = false;
var CAFE_UNLOCK = false;
var BEACH_UNLOCK = false;
var TEXTRON_UNLOCK = false;
var LAKE_UNLOCK = false;
var SCIENCEPARK_UNLOCK = false;
var FOXPOINT_UNLOCK = false;

function loadPageGraphics(){
    console.log(PAGENUMBER);
      
    switch (PAGENUMBER){
        case 1:
            leftarrow.style.display="none";
            break;
        case 2:
            leftarrow.style.display="block";
            rug_background();
            break;
        case 3:
             rug_background();
            musicnotes_img.src='assets/musicnotes.png';
            musicnotes_img.setAttribute('id', "musicnotes");
            document.body.appendChild(musicnotes_img);
            break;
        case 4:
            eye.style.display="block";
            NEW_MAP = true;
            break;
        case 5:
            background_image(IMGURL_SIDEWALK);
            musicnotes_img.style.display="none";
            break;
         case 6: 
            coin.style.display="block";
             background_image(IMGURL_SIDEWALK);
             break;
        case 7:
             NEW_MAP = true;
             CAFE_UNLOCK = true;
             background_image(IMGURL_SIDEWALK);
             break;
        case 8:
             background_image(IMGURL_SIDEWALK);
             break;
        case 9:   
             background_image(IMGURL_SIDEWALK);
             NEW_CHARACTER = true;
             GRIMES_UNLOCKED = true;
             try {
                 document.body.removeChild(bigsparkle);
                 bigsparkle.style.display="none";
            } catch (error) {}
             break;
        case 10:
             background_image("kendalltear.png");
             document.body.appendChild(bigsparkle);
             break;
        case 11:
             //WICKED WHALERS BAR (1)
             try {
                 document.body.removeChild(bigsparkle);
                 bigsparkle.style.display="none";
            } catch (error) {}
             sparkle.style.display="block";
             background_image(IMGURL_BENEFIT);
             NIGHTTIME = true;
             NEW_MAP= true;
             BEACH_UNLOCK = true;
             break;
         case 12:
             NIGHTTIME = true;
             background_image(IMGURL_BENEFIT);
             break;
         case 13:
             NIGHTTIME = true;
             infinity.style.display="none";
             bigcat.style.display="none";
             background_image(IMGURL_BENEFIT);
             break;
         case 14:
             //MIDNIGHT (1);
             NIGHTTIME = true;
             bigcat.style.display="block";
             cat.style.display="none";
            infinity.style.display="block";
             bigcat.style.zIndex="4";
             rug_background();
             break;
         case 15:
             NIGHTTIME = true;
             cat.style.display="none";
             bigcat.style.display="block";
             bigcat.style.zIndex="10";
             rug_background();
             popup("nixon");
             break;
         case 16:
             //THE NEXT MORNING (1)
             NIGHTTIME = false;
             NEW_CHARACTER = true;
             GUS_UNLOCKED = true;
             cat.style.display="block";
             bigcat.style.display="none";
             rug_background();
             break;
        case 17:
             //THE NEXT MORNING (1)
             rug_background();
             break;
        case 18:
             //DREAM
             background_image("bigrug.png");
             //popup("lana");
             break;
        case 19:
             background_image("bigrug.png");
             break;
        case 20:
             rug_background();
             break;
        case 21:
             TEXTRON_UNLOCK = true;
             NEW_MAP = true;
             rug_background();
             break;
        case 22:
             background_image(IMGURL_SIDEWALK);
             break;
        case 23:
            NEW_MAP = true;
            SCIENCEPARK_UNLOCK = true;
             background_image("pinkknot.png");
            FLASHBACK = false;
             break;
         case 24:
             FLASHBACK = true;
            playflashback();
             break;
        case 25:
            FLASHBACK = false;
            break;
        case 26:
             FLASHBACK = false;   
             break;
        case 27:
             FLASHBACK = true;
            playflashback();
             break;
         case 28:
             FLASHBACK = false;
            popup("cheerleader");
             break;
         case 29:
            NIGHTTIME = false;
             background_image("pinkknot.png");
            popup("textron");
             break;
         case 30:
            //WICKED WHALERS BAR (2)
            NEW_MAP=true;
            FOXPOINT_UNLOCK =true;
             background_image(IMGURL_BENEFIT);
             NIGHTTIME = true;
            FLASHBACK = false;
             break;
        case 32:
            FLASHBACK=false;
            break;
        case 33:
            FLASHBACK = true;
            playflashback();
            break;
        case 34: 
            FLASHBACK = true;
            break;
        case 35:
            FLASHBACK = false;
            popup("gymclass");
            rug_background();
            break;
        case 36:
            rug_background();
            break;
        case 37:
            NIGHTTIME = true;
            background_image("bigrug.png");
            depressioncloud_gone();
            break;
        case 38:
            //NEXT MORNING 2
            NIGHTTIME = false;
            document.getElementById("depressioncloud").style.display = "block";
            rug_background();
            break;
        case 39:
            background_image(IMGURL_SIDEWALK);
            break;
        case 40:
            background_image(IMGURL_SIDEWALK);
            break;
        case 41:
            //cemetery
            background_image(IMGURL_SIDEWALK);
            color_icon(infinity, "infinity.png");
            break;
         case 44:
            document.getElementById("depressioncloud").src="assets/beach_cloudgray.png";
            background_image(IMGURL_SIDEWALK);
            break;
        case 45:
            depressioncloud_gone();
            NIGHTTIME = true;
            LAKE_UNLOCK = true;
            NEW_MAP = true;
             background_image("icecream.png");
             break;
        case 47:
            background_image("icecream.png");
            break;
        case 48:
            background_image("scooter.png");
            break;
        case 49:
            background_image("bigrug.png");
            break;
        case 50:
            background_image("bigrug.png");
            NIGHTTIME = true;
            break;
        case 51:
            NIGHTTIME = false;
            rug_background();
            break;
        case 52:
            background_image(IMGURL_SIDEWALK);
            break;
        case 53:
            background_image("pngfabricombre.png");
            break;
        case 55:
            NEW_CHARACTER = true;
            SARAH_UNLOCKED = true;
            background_image("pngfabricombre.png");
            break;
        case 58:
            background_image("pngfabricombre.png");
            break;
        case 60:
            background_image("pngfabricombre.png");
            document.getElementById("alphacloth").style.display="none"; 
            break;
        case 61:
            background_image(IMGURL_SIDEWALK);
            popup("twilight");
            document.getElementById("alphacloth").style.display="block"; 
            break;
        case 63:
            NIGHTTIME = false;
            background_image(IMGURL_SIDEWALK);
            break;
        case 64:
            NIGHTTIME=true;
            background_image("nightwave.png");
            break;
        case 65:
            NIGHTTIME=true;
            background_image("nightwave.png");
            break;
        case 66:
            NIGHTTIME=false;
            background_image("sparkle.png");
            document.getElementById("alphacloth").style.display="none"; 
            break;
        case 68:
            background_image("sparkle.png");
            break;
        case 69:
            background_image("lake.jpeg");
            break;
        case 70:
            background_image("lake.jpeg");
            NEW_CHARACTER = true;
            KENDALL_UNLOCKED = true;
            FLASHBACK=false;
            break;
        case 71:
            FLASHBACK=true;
            playflashback();
            rightarrow.style.display="none";
            background_image("pngfabricwindow.png");
            setTimeout(function(){
                rightPage.src=PAGESTRINGPREFIX+PAGENUMBER+".png";
                rug_background();
                musicnotes_img.style.display="block";
                rightarrow.style.display="block";
        }, 6000);
            
            break;
        case 72:
            background_image("foxpointatdusk.png");
            popup("providence");
            break;
        case 73:
            rightarrow.style.display="block";
            FLASHBACK=true;
            break;
        case 74:
            FLASHBACK=false;
            rightarrow.style.display="none";
            popup("acknowledgments");
            break;

        default:
            break;
    }
    
    if (FLASHBACK){
        gray_icon(eye, "eyegray.gif");
        gray_icon(coin, "coin.gif");
        gray_icon(sparkle, "sparklegray.png");
        gray_icon(infinity, "infinity.gif");
        gray_icon(cat, "cat.gif");
       
        if (NIGHTTIME){
            title.src="assets/titleoutline.gif";
        }else{
            title.src="assets/title.gif";
        }
    }else{
        
      if (NIGHTTIME){
            title.src="assets/titleoutline.png";
          gray_icon(cat, "cat.gif");
        }else{
            title.src="assets/title.png";
            gray_icon(cat, "cat.png");
        }
        if (POPUP){
            color_icon(infinity, "infinity.png");
        }else{
            gray_icon(infinity, "infinity.png")
        }
        if (NEW_CHARACTER){
            color_icon(coin, "doublecoin.png");
            document.getElementById("facedowncard").style.display="block";
            if (GRIMES_UNLOCKED){document.getElementById("grimescard").src = "assets/grimes_card.jpg";}
            if (GUS_UNLOCKED){document.getElementById("guscard").src = "assets/gus_card.jpg";}
            if (SARAH_UNLOCKED){document.getElementById("sarahcard").src = "assets/sarah_card.jpg";}
            if (KENDALL_UNLOCKED){document.getElementById("kendallcard").src = "assets/kendall_card.jpg";}
        }else{
            if (!(PAGENUMBER in [1,2,3,4,5,6])){
                gray_icon(coin, "doublecoingray.png");
            }
                document.getElementById("facedowncard").style.display="none";
        }

        if (NEW_MAP){
          color_icon(eye, "eye.png");
            if (CAFE_UNLOCK){document.getElementById("corpocafe_cloud").src="assets/corpocafe_cloud.png";}
            if (BEACH_UNLOCK){document.getElementById("beach_cloud").src="assets/beach_cloud.png";}
            if (TEXTRON_UNLOCK){document.getElementById("textron_cloud").src="assets/textron_cloud.png";}
            if (LAKE_UNLOCK){document.getElementById("lake_cloud").src="assets/lake_cloud.png";}
            if (SCIENCEPARK_UNLOCK){document.getElementById("sciencepark_cloud").src="assets/sciencepark_cloud.png";}
            if (FOXPOINT_UNLOCK){document.getElementById("foxpoint_cloud").src="assets/foxpoint_cloud.png";}
        }else{
          if (!(PAGENUMBER in [1,2,3,4])){
              gray_icon(eye, "eyegray.png"); }      
        }
        
    }
}

window.onload = function() {   
    //NECESSARY FOR DEVELOPMENT ONLY
    loadPageGraphics();
    if ((PAGENUMBER % 2) == 0){
        SPREADTYPE = 'LEFTPAGESPREAD'; 
        leftPage.classList.add("toppage");
        populatePages(PAGENUMBER);
        
    }else{
        SPREADTYPE = 'RIGHTPAGESPREAD'; 
        rightPage.classList.add("toppage");
        populatePages(PAGENUMBER-1);
    }
//    if (SPREADTYPE === 'ONEPAGE'){
//        //fill in at some point - optimize for small screen
//    }
    
   
};
                  

function depressioncloud_gone(){
    document.getElementById("depressioncloud").style.display = "none";
}

function show_character_cards(){
    if (SHOWCHARCARD){ //this unshows the cards
        hide_class("charactercard");
        SHOWCHARCARD = false;
        NEW_CHARACTER = false;
        gray_icon(coin, "doublecoingray.png");
        
    }else{ //this shows the cards
        unhide_class("charactercard");
        SHOWCHARCARD = true;
        document.getElementById("facedowncard").style.display="none";
    } 
}

function show_map(){
    if (SHOWMAP){ //this unshows the map
        hide_class("map");
        SHOWMAP = false;
        NEW_MAP = false;
        unhide_class("arrow");
        gray_icon(eye, "eyegray.png");
    }else{
        unhide_class("map");
        SHOWMAP = true;
        hide_class("arrow");
        color_icon(eye, "eye.png");
    } 
}

function popup(popuptype){
    POPUP=true;
    if (popuptype === "nixon"){
        modalparagraph.innerHTML="From Henry Kissinger's <i>The White House Years</i>, chapter: Encounters at the Pierre Hotel. I didn't actually read this book... But I read this quote in journalist/'hacker-whistleblower'/'Anonymous'/satirist Barrett Brown's writing: https://www.dmagazine.com/frontburner/2014/03/the-barrett-brown-review-of-arts-and-letters-and-jail-enter-the-kissinger/."
    }else if (popuptype === "lana"){
        //music video
    }else if (popuptype === "awfulthings"){
        modalparagraph.innerHTML='https://www.youtube.com/watch?v=zOujzvtwZ6M';
    }else if(popuptype === "cheerleader"){
        modalparagraph.innerHTML = '<img src="assets/cheerleader.png">';
    }else if (popuptype === 'textron'){
        modalparagraph.innerHTML='https:/en.wikipedia.org/Textron';
    }else if (popuptype === 'gymclass'){
        modalparagraph.innerHTML='https://www.youtube.com/watch?v=heJNHYCSsIc&ab_channel=LilPeep';
    }else if (popuptype === 'twilight'){
        modalparagraph.innerHTML='<img src="assets/twilight.png">';
    }else if (popuptype === 'providence'){
        modalparagraph.innerHTML='https://www.youtube.com/watch?v=tCWkfetk6BM&ab_channel=WICCAPHASESPRINGSETERNAL';
    }else if (popuptype === 'acknowledgments'){
        modalparagraph.innerHTML='The photo of blurry trees at night (Benefit St) is by <a class="mylink" href="https://eveoshea.com/">Eve O’Shea</a>, who also read an early draft. The leaf border I photoshopped out of a 13th century illuminated manuscript, and the coin is Ancient Roman (Agrippina & Nero): <a class="mylink" href="http://www.romancoins.info/Wives1.html">http://www.romancoins.info/Wives1.html</a>. The other icons and rug are random stock images; the sound effects are from YouTube. The pink knot is from a WikiHow article on How To Tie Celtic Knots. The gif of sparkles on water is an image someone uploaded to Reddit about their trip to Malta. Photos of Kendall, Grimes, and Sarah are IG screenshots; Lil Peep is a screenshot of the Awful Things music vid. <br><br> The other assets are from my camera roll and desktop. <br> <br>Thanks to Lucia Kan-Sperling, <a class="mylink" href="https://libbymarrs.net/">Libby Mars</a>, and <a href="http://libyhays.net/">Liby Hays</a> for reading, testing, and generally informing/inspiring the basic sensibility of this project <3.';
    }
    
    infinity.onclick = function() {
      modal.style.display = "block";
      gray_icon(infinity, "infinity.png");
    }

    // When the user clicks on <span> (x), close the modal
    modal_span.onclick = function() {
        modal.style.display = "none";
        POPUP=false;
        modalparagraph.innerHTML='No link';
    }

}
function rug_background(){
    rug.style.display="block";
    document.body.style.background="";
}
function background_image(imageurl){
    document.body.style="background-image: url('assets/"+imageurl+"')";
    rug.style.display="none";
}

function playflashback(){
    const audioObj = new Audio("assets/sounds/flashback.mp3");
    audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();});
}
function color_icon(elem, elem_name){
    elem.src="assets/"+elem_name;
    elem.classList.add("pulse");
}
function gray_icon(elem, elem_name){
    elem.src="assets/"+elem_name;
    try{
        elem.classList.remove("pulse");
    }catch(error){
        console.log(error)
    }
}

function get_pageAsset_src(pagenum){
    
    if (pagenum < 10){
        return (PAGESTRINGPREFIX+"0"+pagenum+'.png');
    }else if (pagenum == 71){return ('assets/pathwatergray.gif');}

    return (PAGESTRINGPREFIX+pagenum+'.png');
}

function populatePages(pagenum){
    leftPage.src = get_pageAsset_src(pagenum);
      rightPage.src =get_pageAsset_src(pagenum+1);
    
    if((pagenum-2) > 0){
         pageB.style.display = "block"; 
        pageB.src =get_pageAsset_src(pagenum-2);
    }else{
         pageB.style.display = "none"; 
    }
    if((pagenum-1) > 0){
        pageA.style.display = "block"; 
        pageA.src =get_pageAsset_src(pagenum-1);
    }else{
         pageA.style.display = "none"; 
    }
    if((pagenum+3) < FINALPAGENUM){
        pageD.style.display = "block"; 
        pageD.src =get_pageAsset_src(pagenum+3);
    }else{
         pageD.style.display = "none"; 
    } 
    if((pagenum+2) < FINALPAGENUM){
         pageC.style.display = "block"; 
        pageC.src =get_pageAsset_src(pagenum+2);
    }else{
        pageC.style.display = "none"; 
    }
    
}

function click_next_page(){
    PAGENUMBER+=1;
    loadPageGraphics();
   
    if (SPREADTYPE === 'LEFTPAGESPREAD'){
        leftPage.classList.remove("toppage");
        rightPage.classList.add("toppage");
        SPREADTYPE = 'RIGHTPAGESPREAD';  
    }else if (SPREADTYPE === 'RIGHTPAGESPREAD'){
        leftPage.classList.add("toppage");
        rightPage.classList.remove("toppage");
        populatePages(PAGENUMBER);
        SPREADTYPE = 'LEFTPAGESPREAD';
    }
     
}

function click_prev_page(){
    PAGENUMBER-=1;
    loadPageGraphics();
    if (SPREADTYPE === 'RIGHTPAGESPREAD'){
        leftPage.classList.add("toppage");
        rightPage.classList.remove("toppage");
        SPREADTYPE = 'LEFTPAGESPREAD';  
    }else if (SPREADTYPE === 'LEFTPAGESPREAD'){
        leftPage.classList.remove("toppage");
        rightPage.classList.add("toppage");
        populatePages(PAGENUMBER-1);
        SPREADTYPE = 'RIGHTPAGESPREAD';
    }
}

function make_opaque(elem_name) {
  document.getElementById(elem_name).style.opacity = "100%"; 
}
function hide_elem(elem_name) {
  document.getElementById(elem_name).style.display = "none"; 
}
function show_elem(elem_name) {
  document.getElementById(elem_name).style.display = "block"; 
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
 