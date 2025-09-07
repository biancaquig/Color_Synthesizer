var mode = 0;

let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-csCmknap/';

// Video
let video;

// To store the classification   
let label = "";

let osc;
let playing = false;
let octaveSlider;
let harmonizerButton;
let octaveMin = 3;
let octaveMax = 7;
let harmonizerActive = false;
let osc2;
let osc3;
let waveform = 'sine';

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

  // Start classifying
  classifyVideo();
  
  osc = new p5.Oscillator();
  osc.setType(waveform);
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  
  octaveSlider = createSlider(octaveMin, octaveMax, 4);
  octaveSlider.position(1100, 75);
  octaveSlider.size(200);
  octaveSlider.addClass("mySliderStyle");
  octaveSlider.hide();
  
  let harmonizerButton = createButton(' harmonizer ');
  harmonizerButton.style('font-family: Helvetica, sans-serif');
  harmonizerButton.style('color:rgb(159,128,180)')
  harmonizerButton.style('font-style: bold')
  harmonizerButton.style('font-weight: 1000');
  harmonizerButton.style('font-size:24px');
  harmonizerButton.position (1100, 185);
  // harmonizerButton.hide();
  // harmonizerButton.mousePressed(toggleHarmonizer);
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
    octaveSlider.show();
    // harmonizerButton.show();

    let wav = createDiv('waveform type');
    wav.style('font-family: Helvetica, sans-serif');
    wav.style('color:rgb(159,128,180)')
    wav.style('font-style: bold')
    wav.style('font-weight: 1000');
    wav.style( 'font-size:24px')
    wav.position(1100, 250);
    
    let octave = createDiv(' octave ')
    octave.style('font-family: Helvetica, sans-serif');
    octave.style('color:rgb(159,128,180)')
    octave.style('font-style: bold')
    octave.style('font-weight: 1000');
    octave.style( 'font-size:24px')
    octave.position(1100, 125);
   
    background(300);
  
    // Draw the flipped video
    push();
    translate(video.width, 0);
    scale(-1, 1);
    image(video, 0, 0);
    pop();

    // Draw the label
    fill(255);
    textSize(16);
    textFont('Helvetica');
    textAlign(CENTER);
    text(label, 440, height - 10);
    
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
    let triwave = abs((i % (wmax * 1)) - wmax*0.5); 
    let x = map(i, 0, numPoints - 1, 0, width - 50); 
    let y = 0;

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
    if (x >= 300) break; 
  }
  endShape();
}

// Helper function to get the sign of a number
function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && octaveSlider.value() > octaveMin) {
    octaveSlider.value(octaveSlider.value() - 1);
  } else if (keyCode === RIGHT_ARROW && octaveSlider.value() < octaveMax) {
    octaveSlider.value(octaveSlider.value() + 1);
  }
  
  if (key === 'a') {
    drawType = 'Sine';
    redraw(); 
    waveform = 'sine';
    osc.setType(waveform);
  } else if (key === 'b') {
    drawType = 'Sawtooth';
    redraw();
    waveform = 'sawtooth';
    osc.setType(waveform);
  } else if (key === 'c') {
    drawType = 'Square';
    redraw();
    waveform = 'square';
    osc.setType(waveform);
  } else if (key === 'd') {
    drawType = 'Triangle';
    redraw();
    waveform = 'triangle';
    osc.setType(waveform);
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult);
}

// When we get a result
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}


