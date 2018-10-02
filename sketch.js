function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background(0);
frameRate(60);
angleMode(DEGREES)

}

function draw() {
var x;
var y;


translate(windowWidth/2,windowHeight/2);
noFill();

stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/360));


var x = cos(frameCount)*200;
var y = sin(frameCount)*200;
if(frameCount > 360){
    x = sin(frameCount) * 2;
    y = cos(frameCount) * 2;
  }

line(0,x,x,y);
stroke(lerpColor(color('#F4511E'), color('#66BB6A'), frameCount/360));
for(var a=0;a<TWO_PI;a+=PI/60){
var sx = cos(frameCount)*200;
var sy = sin(frameCount)*200;
beginShape();
vertex(200,0);
vertex(sx,sy);
endShape();

}


}
