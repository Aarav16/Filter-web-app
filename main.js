noseX=0;
noseY=0;

function preload() {
Mustache=loadImage("https://i.postimg.cc/63GQ94w4/Mustache.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
  console.log('poseNet is initialized');
  poseNet.on('pose',gotPoses);
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
   noseX=results[0].pose.nose.x-35;
    noseY=results[0].pose.nose.y-5;
   console.log("nose x= "+noseX);
    console.log("nose y= "+noseY);
  }
}

function draw() {
image(video,0,0,300,300);
//circle(noseX,noseY,20);
image(Mustache,noseX,noseY,70,50);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
//https://i.postimg.cc/wM6xn3m2/clownnose2.png
