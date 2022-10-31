noseX = 0;
noseY = 0;
rightwristX = 0;
leftwristX = 0;
difference = 0;

function setup() {

    video = createCapture(VIDEO);
    video.size(350,350);
    video.position(200,200);
    
    canvas = createCanvas(550,300);
    canvas.position(600,225);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
    
    }

    function modelLoaded() {

        console.log("DONE 👍");
        
        }
        
        function gotPoses(results) {
        
        if (results.length > 0) {
        
        console.log(results);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        console.log("X "+noseX+" Y "+noseY);
        
        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        
        console.log("leftwrist "+leftwristX+" rightwrist "+rightwristX);
        
        difference = floor(leftwristX - rightwristX);
        console.log(difference);
        
        }
    }

    function draw() {

        background("#6C91C2");
        textSize(difference);
        fill("#FFE787");
        text("MARC",50,300);

    }