rightEyeX=0;
rightEyeY=0;
glasses="";
function preload(){
    glasses=loadImage('https://i.postimg.cc/YCCqWpvD/sp.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(glasses, rightEyeX-20, rightEyeY-15, 95, 45);

}

function take_snapshot(){
    save("my_glasses_pic.png");}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

 function gotPoses(results){
     if(results.length>0){
         console.log(results);

         rightEyeX=results[0].pose.rightEye.x;
         rightEyeY=results[0].pose.rightEye.y;
         console.log("rightEye x=");
         console.log("rightEye y=");
     }
 }