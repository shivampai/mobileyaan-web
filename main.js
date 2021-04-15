var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 50 ;
block_img_height =100 ;
var player_object = "" ;
var block_object = "" ;

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
    if(keypress == '86'){
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
    if(keypress == '83'){
         
    }
}


    function drp() {
    if(document.getElementById('drpdwn').value == 'Hawk Engine') {
        new_image('hawk.png');
    }
    if(document.getElementById('drpdwn').value == 'Cryogenic Fuel Tank (18 Ton)') {
        new_image('fuel4.png');
    }
    if(document.getElementById('drpdwn').value == 'Solid Fuel Tank (18 Ton)') {
        new_image('fuel4.png');
    }
    if(document.getElementById('drpdwn').value == 'Side Separator') {
        new_image('side separator.svg');
    }
    if(document.getElementById('drpdwn').value == 'Vertical Separator') {
        new_image('vertical Separator.svg');
    }
    if(document.getElementById('drpdwn').value == 'Aerodynamical Parabolloid Cone') {
        new_image('Capsule Module White.png');
    }
    if(document.getElementById('drpdwn').value == 'Aerodynamical Nose Cone') {
        new_image('AERODYNAMIC NOSE CONE _ WHITE.png');
    }
    if(document.getElementById('drpdwn').value == 'Vikas Engine') {
        new_image('engine.png');
    }
    if(document.getElementById('drpdwn').value == 'Fairing (Curve)') {
        new_image('fairing.png');
    }
}