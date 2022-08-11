function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO); //VIDEO means that the createCapture function is only meant for interacting with the web camera's live view!//
    video.size(300, 300); //Giving the same size of the canvas to the video camera is used so that the video camera is on the canvas and that there's no extra component for the web camera.//
    video.hide(); //This hides the video space which is being created by the p5.js.//
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses); //Pose contains all the 17 different given body parts. gotPoses will help us to only get the x and y coordinates of a certain part of the body, in this case.. a mustache. We only need a mustache for this project.//
 }
 
 function gotPoses(results){
     if(results.length > 0){
         console.log(results);  //console.log(results) specifically puts and consoles the results on the screen and in the console of the code.//
 
         console.log("Mustache x = "+results[0].pose.mustache.x); //OF THE 17 POSES OF BODY PARTS pose.mustache.x uses SPECIFICALLY and ONLY the nose part of the body for the x coordinate. Same goes for pose.mustache.y for the y coordinate.//
         
         console.log("Mustache y = "+results[0].pose.mustache.y)  //results[0] gives the highest priority to a specific part of the body and keeps it at the top. 0 is the first place (starts with 0 and first thing it will detect is 0) that will only work when it sees a face on the screen.//
     }
 }
 
 function modelloaded(){
     console.log("Pose Net is Initialized For you Already!")
 }
 
 function take_snapshot(){
     save('JosephIsDumb.png');
 }
 
 function draw(){
     image(video, 0, 0, 300, 300); //The first 0 is the x coordinate and the second is the y. 300, 300 is the height and the width numbers.// 
 }
 
 function preload(){

 }
 