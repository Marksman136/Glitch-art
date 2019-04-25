let img;

function preload(){

img = loadImage('https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjT2trhwOvhAhWBw8QBHXGqA3gQjRx6BAgBEAU&url=https%3A%2F%2Fblog.hootsuite.com%2Finstagram-hashtags%2F&psig=AOvVaw0b8tysoc024oNhIlUE0OHE&ust=1556290689332416');
}



function setup(){
createCanvas (1000,1000);
image(img, 0, 0);

}

function draw(){
background(100);


}