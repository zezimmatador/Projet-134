function setup(){
    video = createCapture(VIDEO)
    canvas = createCanvas(550, 550);
    canvas.position(450, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
}