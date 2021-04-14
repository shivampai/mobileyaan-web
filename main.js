var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 50 ;
block_img_height =100 ;
var player_object = "" ;
var block_object = "" ;

function player_update() {
    fabric.Image.fromURL("MOBILEYAAN LOGO 512x512.png" , function(IMG){
        player_object = IMG ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object) ;
    });
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
    if(keypress == '38'){
        up();
    }
    if(keypress == '40'){
        down();
    }
    if(keypress == '37'){
        left();
    }
    if(keypress == '39'){
        right();
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
    if(keypress == '52'){
        new_image('Capsule Module White.png'); 
    }
        if(keypress == '90'){
        canvas.remove(block_object); 
    }
    if(keypress == '83'){
         
    }
}


function up() {
    if(player_y >= 0){
        player_y = player_y - block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if(player_y <= 500){
        player_y = player_y + block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if(player_x >= 0){
        player_x = player_x - block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if(player_x <= 800){
        player_x = player_x + block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}