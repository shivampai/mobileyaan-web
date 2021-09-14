var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 50 ;
block_img_height =100 ;
var player_object = "" ;
var block_object = "" ;
var elem = document.documentElement;
  
function openFullScreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function show(elemID){
  document.getElementById(elemID).style.display = "block";
}
function hideAll(){
  elems = ["flag-comp" , "ad-comp" , "basic-comp", "man-comp" , "eng-comp" , "elec-comp"];
  for (let i = 0; i < elems.length; i++) {
  document.getElementById(elems[i]).style.display = "none";
}
}
function load(){
 if(localStorage.getItem("voucher") == null){
   location.href = "reg.html";
   console.log("null");
 }
}
function openNav() {
  document.getElementById("panel-whole").style.width = "50%";
}
function sendWhatsapp() {
  var sendWhatsappLink = "https://api.whatsapp.com/send?text=" + imgLink + "This Rocket Is Made By Me Using MobileYaan. Click here to open MobileYaan - https://mobileyaan-web.shivampai.repl.co/v2/"
  window.open(sendWhatsappLink , "_blank" , "width=10");
}
function generateLink() {
imgLink = canvas.toDataURL('image/jpeg', 1.0);
document.getElementById("downloadedimg").src = imgLink;
document.getElementById("imglink").value = imgLink;
}
function closeNav() {
  document.getElementById("panel-whole").style.width = "0%";
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image , function(IMG){
        block_object = IMG ;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object) ;
    });
    //for closing sidenav panel
    closeNav();
}
function addText() {
 lbltxt =  window.prompt("Label Text");
 var text = new fabric.Text(lbltxt, {
  fontSize: 30,
  fontFamily:'Arial',
  originX: '100',
  originY: '100'
});
canvas.add(text)
}

window.addEventListener("keydown" , myKeyDown);
function myKeyDown(e) {
    keypress = e.keyCode ;
    if(e.shiftKey == true && keypress == '80') {
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keypress == '77') {
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(keypress == '49'){
        new_image('fuel4.png'); 
    }
    if(keypress == '50'){
        new_image('AERODYNAMIC NOSE CONE _ WHITE.png'); 
    }
    if(keypress == '51'){
        new_image('hawk.png'); 
    }
    if(keypress == ''){
        new_image('vertical Separator.svg'); 
    }
    if(keypress == '52'){
        new_image('Capsule Module White.png'); 
    }
    if(keypress == '53'){
        new_image('side separator.svg'); 
    }
        if(keypress == '90'){
        canvas.remove(block_object); 
    }
}
function download_ig(element){
  window.alert("Sorry For Inconvience. We are Developing Download Button");
}
function download_img(){
  var fullQuality = canvas.toDataURL('image/jpeg', 1.0);
console.log(fullQuality);
document.getElementById("downloadedimg").src = fullQuality;
document.getElementById("download").href = fullQuality;
}   
function addLOGO() {
  var new_imagePrompt = window.prompt("URL Of The Image");
  if(new_imagePrompt != null){
    new_image(new_imagePrompt);
    document.getElementById("customComponents").innerHTML += '<td><img class="component-img" width="100" src="' +new_imagePrompt + '" title="Custom component" onclick="new_image(this.src)"></td><hr>';
    localStorage.setItem("customComponents" , document.getElementById("customComponents").innerHTML);
;
  }
}
