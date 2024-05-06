var mode = 0;

let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-csCmknap/';

// Video
let video;

let flippedVideo;
// To store the classification   
let label = "";

let osc;
let playing = false;
let octaveSlider;
let harmonizerButton;
let octaveMin = 2;
let octaveMax = 6;
let harmonizerActive = false;
let osc2;
let osc3;
let waveform = 'sine';

let osc2Playing = false;
let osc3Playing = false;

let drawType = 'Sine';
let drawAmp = 60;
let drawFreq = 0.05;
let wmax = 20;
let numPoints = 200;

let prevFrequency = 0;

let colorIndicator;

let labelColors = {
    'Red': [245, 53, 228],
    'Orange': [249, 135, 6],
    'Yellow': [247, 235, 158],
    'Green': [34, 168, 123],
    'Blue': [10, 128, 180],
    'Purple': [138, 97, 179],
    'Pink': [245, 53, 118],
    'Teal': [7, 216, 196],
    'Brown': [121, 85, 72],
    'Black': [0, 0, 0],
    'Grey': [179, 179, 179],
    'White': [255, 255, 255]
};




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
  
  osc = new p5.Oscillator();
  osc.setType(waveform);
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  
  octaveSlider = createSlider(octaveMin, octaveMax, 4);
  octaveSlider.position(1100, 75);
  octaveSlider.size(200);
  octaveSlider.addClass("mySliderStyle");
  octaveSlider.hide();
  
  harmonizerButton = createButton(' harmonizer ');
  harmonizerButton.style('font-family: Helvetica, sans-serif');
  harmonizerButton.style('color:rgb(159,128,180)')
  harmonizerButton.style('font-style: bold')
  harmonizerButton.style('font-weight: 1000');
  harmonizerButton.style('font-size:24px');
  harmonizerButton.position (1100, 185);
  harmonizerButton.hide();
  harmonizerButton.mousePressed(toggleHarmonizer);
  
}



function draw() {
  
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
    octaveSlider.show();
    
    harmonizerButton.show();
    // volSlide.show();

  let wav = createDiv('waveform type');
  wav.style('font-family: Helvetica, sans-serif');
  wav.style('color:rgb(159,128,180)')
  wav.style('font-style: bold')
  wav.style('font-weight: 1000');
  wav.style( 'font-size:24px')
  // wav.style( 'color-background' col)
  wav.position(1100, 250);
  
  let wavInstructions = createDiv('spacebar = begin playing <p> a = set oscillator to sine <p> b = set oscillator to sawtooth <p> c = set oscillator to square <p> d = set oscillator to triangle');
  wavInstructions.style('font-family: Helvetica, sans-serif');
  wavInstructions.style('color:rgb(159,128,180)')
  wavInstructions.style('font-style: bold')
  wavInstructions.style('font-weight: 1000');
  wavInstructions.style( 'font-size:18px')
  // wav.style( 'color-background' col)
  wavInstructions.position(1100, 480);
    
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

    

    translate(1100, 375);
    stroke(159,128,180);
    strokeWeight(8); 
    noFill();
    drawWave();
}
}  

  function updateColorIndicator(label) {
    let col = labelColors[label] || [0]; // Default to black if color not found
    colorIndicator = createDiv('');
    colorIndicator.style('background-color', `rgb(${col[0]}, ${col[1] || 0}, ${col[2] || 0})`);
    colorIndicator.position(950, -10); // Adjust position as needed
    colorIndicator.size(80, 720); // Adjust size as needed
  }
  
  // Update color indicator
  if (label !== "") {
    updateColorIndicator(label);
  
}


function drawWave() {
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let triwave = abs((i % (wmax * 1)) - wmax*0.5); // Twice the period
    let x = map(i, 0, numPoints - 1, 0, width - 50); // Adjust x range
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
    if (x >= 300) break; // Stop drawing when x reaches canvas width
  }
  endShape();
}

// Helper function to get the sign of a number
function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}

// function mousePressed() {
//   if (!playing) {
//     osc.start();
//     playing = true;
//   } else {
//     osc.stop();
//     playing = false;
//   }
// }

function keyPressed() {
    if (keyCode === 32) { 
    if (!playing) {
      osc.start();
      playing = true;
    } else {
      osc.stop();
      playing = false;
    }
    }
      
    if (keyCode === LEFT_ARROW && octaveSlider.value() > octaveMin) {
    octaveSlider.value(octaveSlider.value() - 1);
  } else if (keyCode === RIGHT_ARROW && octaveSlider.value() < octaveMax) {
    octaveSlider.value(octaveSlider.value() + 1);
  }
  
  if (key === 'a') {
    drawType = 'Sine';
    redraw(); // Redraw the canvas when wave type changes
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
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}



function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  // Get the top classification result
  let label = results[0].label;
  
  classifyVideo();
  
  updateColorIndicator(label);

  // Map the classification result to a pitch or frequency
  let frequency = mapLabelToFrequency(label) * pow(2, octaveSlider.value() - 4);
  
  if (frequency !== prevFrequency) {
    // If it's different, update the previous frequency
    prevFrequency = frequency;
    
    // Trigger the harmonizer function
    if (frequency > 0) {
      playSound(frequency);
      if (harmonizerActive) {
        playHarmonizer(frequency);
      }
    }
  }
}

function mapLabelToFrequency(label) {
  // Define a mapping from labels to frequencies
  let labelToFrequencies = {
    'Red': 261.63, // C
    'Black': 277.18, // C# / Db
    'Orange': 293.66, // D
    'Blue': 311.13, // D# / Eb
    'White': 329.63, // E
    'Purple': 349.23, // F
    'Pink': 369.99, // F# / Gb
    'Green': 392.00, // G
    'Teal': 415.30, // G# / Ab
    'Grey': 440.00, // A
    'Yellow': 466.16, // A# / Bb
    'Brown': 493.88, // B
  };

  // Return the corresponding frequency based on the label
  return labelToFrequencies[label] || 0; // Return 0 if label is not found
}

function playSound(freq) {
  osc.freq(freq);
  osc.amp(0.5);
}


function playHarmonizer(freq) {
  let third = freq * pow(2, 4/12); // Major third interval
  let fifth = freq * pow(2, 7/12); // Perfect fifth interval
  
  if (harmonizerActive) {
    osc2.freq(third);
    osc3.freq(fifth);
    osc2.amp(0.3);
    osc3.amp(0.3);
    osc2.start();
    osc3.start();
  } else {
    osc2.amp(0);
    osc3.amp(0);
    osc2.stop();
    osc3.stop();
  }
}

function toggleHarmonizer() {
  harmonizerActive = !harmonizerActive;
}

