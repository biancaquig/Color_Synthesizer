class Splash {

 constructor() {
   

  this.splashBorder = 50;
fill(255, 180, 193);
  noStroke()
  rect(this.splashBorder, this.splashBorder, windowWidth-this.splashBorder*2, windowHeight-this.splashBorder*2);
   
  stroke(245, 53, 118);
   
  strokeWeight(8)
   
    line(windowWidth-this.splashBorder-40, this.splashBorder+20,windowWidth-this.splashBorder-20, this.splashBorder+40)
   line(windowWidth-this.splashBorder-20, this.splashBorder+20,windowWidth-this.splashBorder-40, this.splashBorder+40)
  
     noStroke()

  this.title16 = createDiv("color synthesizer");
  this.title16.style('font-family: Helvetica, sans-serif');
  this.title16.style('color:#F53576')
  this.title16.style('font-style: bold')
  this.title16.style('font-weight: 900');
  this.title16.style( 'font-size:8vw')
  this.title16.position(this.splashBorder+20, this.splashBorder+20);
  this.title15 = createDiv("color synthesize");
  this.title15.style('font-family: Helvetica, sans-serif');
  this.title15.style('color:rgb(138,97,179)')
  this.title15.style('font-style: bold')
  this.title15.style('font-weight: 900');
  this.title15.style( 'font-size:8vw')
  this.title15.position(this.splashBorder+20, this.splashBorder+20);
  this.title14 = createDiv("color synthesiz");
  this.title14.style('font-family: Helvetica, sans-serif');
  this.title14.style('color:rgb(10,128,180)')
  this.title14.style('font-style: bold')
  this.title14.style('font-weight: 900');
  this.title14.style( 'font-size:8vw')
  this.title14.position(this.splashBorder+20, this.splashBorder+20);
  this.title13 = createDiv("color synthesi");
  this.title13.style('font-family: Helvetica, sans-serif');
  this.title13.style('color:#22A87B')
  this.title13.style('font-style: bold')
  this.title13.style('font-weight: 900');
  this.title13.style( 'font-size:8vw')
  this.title13.position(this.splashBorder+20, this.splashBorder+20);
  this.title12= createDiv("color synthes");
  this.title12.style('font-family: Helvetica, sans-serif');
  this.title12.style('color:#F98706')
  this.title12.style('font-style: bold')
  this.title12.style('font-weight: 900');
  this.title12.style( 'font-size:8vw')
  this.title12.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title11 = createDiv("color synthe");
  this.title11.style('font-family: Helvetica, sans-serif');
  this.title11.style('color:#F53576')
  this.title11.style('font-style: bold')
  this.title11.style('font-weight: 900');
  this.title11.style( 'font-size:8vw')
  this.title11.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title10 = createDiv("color synth");
  this.title10.style('font-family: Helvetica, sans-serif');
  this.title10.style('color:rgb(138,97,179)')
  this.title10.style('font-style: bold')
  this.title10.style('font-weight: 900');
  this.title10.style( 'font-size:8vw')
  this.title10.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title9 = createDiv("color synt");
  this.title9.style('font-family: Helvetica, sans-serif');
  this.title9.style('color:rgb(10,128,180)')
  this.title9.style('font-style: bold')
  this.title9.style('font-weight: 900');
  this.title9.style( 'font-size:8vw')
  this.title9.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title8 = createDiv("color syn");
  this.title8.style('font-family: Helvetica, sans-serif');
  this.title8.style('color:#22A87B')
  this.title8.style('font-style: bold')
  this.title8.style('font-weight: 900');
  this.title8.style( 'font-size:8vw')
  this.title8.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title7 = createDiv("color sy");
  this.title7.style('font-family: Helvetica, sans-serif');
  this.title7.style('color:#F98706')
  this.title7.style('font-style: bold')
  this.title7.style('font-weight: 900');
  this.title7.style( 'font-size:8vw')
  this.title7.position(this.splashBorder+20, this.splashBorder+20);
      
  this.title6 = createDiv("color s");
  this.title6.style('font-family: Helvetica, sans-serif');
  this.title6.style('color:#F53576')
  this.title6.style('font-style: bold')
  this.title6.style('font-weight: 900');
  this.title6.style( 'font-size:8vw')
  this.title6.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title5 = createDiv("color");
  this.title5.style('font-family: Helvetica, sans-serif');
  this.title5.style('color:rgb(138,97,179)')
  this.title5.style('font-style: bold')
  this.title5.style('font-weight: 900');
  this.title5.style( 'font-size:8vw')
  this.title5.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title4 = createDiv("colo");
  this.title4.style('font-family: Helvetica, sans-serif');
  this.title4.style('color:rgb(10,128,180)')
  this.title4.style('font-style: bold')
  this.title4.style('font-weight: 900');
  this.title4.style( 'font-size:8vw')
  this.title4.position(this.splashBorder+20, this.splashBorder+20);

  this.title3 = createDiv("col");
  this.title3.style('font-family: Helvetica, sans-serif');
  this.title3.style('color:#22A87B')
  this.title3.style('font-style: bold')
  this.title3.style('font-weight: 900');
  this.title3.style( 'font-size:8vw')
  this.title3.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title2 = createDiv("co");
  this.title2.style('font-family: Helvetica, sans-serif');
  this.title2.style('color:#F98B06')
  this.title2.style('font-style: bold')
  this.title2.style('font-weight: 900');
  this.title2.style( 'font-size:8vw')
  this.title2.position(this.splashBorder+20, this.splashBorder+20);
   
  this.title1 = createDiv("c");
  this.title1.style('font-family: Helvetica, sans-serif');
  this.title1.style('color:#F53576')
  this.title1.style('font-style: bold')
  this.title1.style('font-weight: 900');
  this.title1.style( 'font-size:8vw')
  this.title1.position(this.splashBorder+20, this.splashBorder+20);
  
  this.name = createDiv("Bianca Quigley");
  this.name.style('font-family: Helvetica, sans-serif');
  this.name.style('color:rgb(159,128,180)')
  this.name.style('font-style: bold')
  this.name.style('font-weight: 1000');
  this.name.style( 'font-size:3vw')
  this.name.position(this.splashBorder+20, this.splashBorder+160);
  
  this.info = createDiv("<p> This is an equal temperament synthesizer that changes pitch based on the dominant color shown in the video screen. You can manipulate this by adding or subtracting different colors from your web camera.<p> <a href=https://github.com/biancaquig/Color_Synthesizer.git >view code</a>");
  this.info.style('font-family: Helvetica, sans-serif');
  this.info.style('color:rgb(159,128,180)')
  this.info.style('font-style: bold')
  this.info.style('font-weight: 900');
  this.info.style( 'font-size:3vw')
  
  this.info.position(this.splashBorder+20, this.splashBorder+220);
  this.info.size(windowWidth-this.splashBorder*2-50, windowHeight-this.splashBorder*2-100)
  
}
 
  update(){
       if(mouseX > windowWidth-this.splashBorder-40 && 
          mouseX < windowWidth-this.splashBorder-20 && 
          mouseY < this.splashBorder+40&& 
          mouseY > this.splashBorder+20
     ){
     
     return true
   }
  }
  
  hide(){
    this.title16.remove()
    this.title15.remove()
    this.title14.remove()
    this.title13.remove()
    this.title12.remove()
    this.title11.remove()
    this.title10.remove()
    this.title9.remove()
    this.title8.remove()
    this.title7.remove()
    this.title6.remove()
    this.title5.remove()
    this.title4.remove()
    this.title3.remove()
    this.title2.remove()
    this.title1.remove()
    this.name.remove()
    this.info.remove()
  }
}

