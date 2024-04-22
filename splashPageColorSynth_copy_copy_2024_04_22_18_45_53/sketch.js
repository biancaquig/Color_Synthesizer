var mode = 0;

let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-csCmknap/';

// Video
let video;

let flippedVideo;
// To store the classification
let label = "";

let audioStarted = false;

let carrier; // this is the oscillator we will hear

let modulator; // this oscillator will modulate the amplitude of the carrier

let env;

let tempo;

let timer = 0;

let slider;

let osc, playing, freq, amp;

// function setup() {
  
  // createCanvas(400, 400)




// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
  video = createCapture(VIDEO);
  video.size(890, 720);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
  


}




function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}


function draw() {
  if (mouseIsPressed == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();

    
  background(300);
  
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}
}  

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  label = results[0].label;
  // Classify again!
  classifyVideo();
  
   if (label == red) {
    mode = 1
     
    if (millis() - timer > slider.value()){
    if(mouseX>200 && mouseY>200){
      sound1();
    }
    if(mouseX<200 && mouseY>200){
      sound2();
    }
    if(mouseX>200 && mouseY<200){
      sound3();
    }
    if(mouseX<200 && mouseY<200){
      sound4();
    }  
     
     
    }   
     
  }
     

  
function mousePressed(){
  let harmonizer = createButton('harmonizer');
  harmonizer.style('font-family: Helvetica, sans-serif');
  harmonizer.style('color:rgb(159,128,180)')
  harmonizer.style('font-style: bold')
  harmonizer.style('font-weight: 1000');
  harmonizer.style( 'font-size:3vw')
  harmonizer.position(0, 100);

  // Call repaint() when the button is pressed.
  harmonizer.mousePressed(repaint);

  
}
  
}
