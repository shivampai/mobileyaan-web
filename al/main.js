var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 50 ;
block_img_height =100 ;
var player_object = "" ;
var block_object = "" ;
function load(){
  document.getElementById("customComponents").innerHTML = localStorage.getItem("customComponents");
}
function openNav() {
  document.getElementById("panel").style.width = "150px";
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
  document.getElementById("panel").style.width = "0";
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
