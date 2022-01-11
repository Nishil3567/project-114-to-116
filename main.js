noseX = 0;
noseY = 0;

function preload(){
    nose = loadImage("https://i.postimg.cc/mDSGt7nb/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Iintilized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 170;
        noseY = results[0].pose.nose.y - 45;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function draw(){
    image(video ,0,0,300,300);
    image(nose ,noseX,noseY,30,30);

}

function take_snapshot(){
    save('myClownImage.png');
}