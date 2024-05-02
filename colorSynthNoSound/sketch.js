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

let drawType = 'Sine';
let drawAmp = 60;
let drawFreq = 0.05;
let wmax = 20;
let numPoints = 200;



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
  
  octSlide = createSlider(0, 255);
  octSlide.position(1100, 75);
  octSlide.size(200);
  octSlide.addClass("mySliderStyle");
  octSlide.hide();
  
  volSlide = createSlider(0, 255);
  volSlide.position(1100, 75);
  volSlide.size(200);
  volSlide.addClass("mySliderStyle");
  volSlide.hide();
  


}


function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}


function draw() {
  
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
    octSlide.show();
    volSlide.show();



    
  let harmonizer = createButton(' harmonizer ');
  harmonizer.style('font-family: Helvetica, sans-serif');
  harmonizer.style('color:rgb(159,128,180)')
  harmonizer.style('font-style: bold')
  harmonizer.style('font-weight: 1000');
  harmonizer.style( 'font-size:24px')
  harmonizer.position (1100, 185);

  // Call repaint() when the button is pressed.
  // harmonizer.mousePressed(repaint);
    
  // let col = color
  
  let wav = createDiv('waveform type');
  wav.style('font-family: Helvetica, sans-serif');
  wav.style('color:rgb(159,128,180)')
  wav.style('font-style: bold')
  wav.style('font-weight: 1000');
  wav.style( 'font-size:24px')
  // wav.style( 'color-background' col)
  wav.position(1100, 250);
    
  let octave = createDiv(' octave ')
  octave.style('font-family: Helvetica, sans-serif');
  octave.style('color:rgb(159,128,180)')
  octave.style('font-style: bold')
  octave.style('font-weight: 1000');
  octave.style( 'font-size:24px')
  octave.position(1100, 125);

     

    
  background(300);
  
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textFont('Helvetica');
  textAlign(CENTER);
  text(label, width / 2, height - 10);
    

    translate(1100, 375);
    stroke(159,128,180);
    strokeWeight(8); 
    noFill();
    drawWave();
}
}  

function drawWave() {
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let triwave = abs((i % (wmax * 1)) - wmax*0.5); // Twice the period
    let x = map(i, 0, numPoints - 1, 0, width - 50); // Adjust x range
    let y = 0;
    
//  if (i === 0) {
//       stroke(255);
//       strokeWeight(borderSize);
//       line(width - borderSize / 2, -height / 2, width - borderSize / 2, height / 2);
//     }
    
    switch (drawType) {
      case 'Sine':
        y = sin(x * drawFreq) * drawAmp;
        break;
      case 'Square':
        y = sign(sin(x * drawFreq)) * drawAmp;
        break;
      case 'Sawtooth':
        y = map(x % (TWO_PI / drawFreq), 0, TWO_PI / drawFreq, -drawAmp, drawAmp);
        break;
      case 'Triangle':
        y = (triwave * 12) - 60;
        break;
    }
    vertex(x, y);
    if (x >= 300) break; // Stop drawing when x reaches canvas width
  }
  endShape();
}

// Helper function to get the sign of a number
function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}

function keyPressed() {
  if (key === 'a') {
    drawType = 'Sine';
    redraw(); // Redraw the canvas when wave type changes
  } else if (key === 'b') {
    drawType = 'Sawtooth';
    redraw();
  } else if (key === 'c') {
    drawType = 'Square';
    redraw();
  } else if (key === 'd') {
    drawType = 'Triangle';
    redraw();
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
  // console.log(results[0]);
  label = results[0].label;
  // Classify again!
  classifyVideo();
  
//    if (label == red) {
//     mode = 1
     
//     if (millis() - timer > slider.value()){
      
      
//     if(mouseX>200 && mouseY>200){
//       sound1();
//     }
//     if(mouseX<200 && mouseY>200){
//       sound2();
//     }
//     if(mouseX>200 && mouseY<200){
//       sound3();
//     }
//     if(mouseX<200 && mouseY<200){
//       sound4();
//     }  
      
//     }
     




}