let img;

function preload(){

img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/1024px-June_odd-eyed-cat_cropped.jpg');
img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/1024px-June_odd-eyed-cat_cropped.jpg');
}



function setup(){
createCanvas (2000,1700, WEBGL);
img.loadPixels();
img2.loadPixels();

}

function draw(){
background(250);
let col;
image(img, 0, 0, 1000, 700);

push();
translate(-600,-400);
image(img2,0,0,600,400);
copy(img2,0,150,img2.width,1,0,150,img2.width,-img2.height-150);
pop();

for(var x = 0; x<1000; x+=10){
for(var y = 0; y<700; y+=10){

console.log(x);
console.log(y);
col = img.get(x,y);
fill(col);
//
//box(40);
//
//ellipse(x,y,10,20);
//
push();
translate(x,y);
box(8);
pop();

}
}
}