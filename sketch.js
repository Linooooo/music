let synth;
let cymbal;
let loop;
let counter=0;
let melody;
var fft;

function setup() {
  createCanvas(400, 400);
  melody = new Tone.AMSynth().toMaster();
  synth = new Tone.MembraneSynth().toMaster();
  cymbal = new Tone.MetalSynth({
    
frequency : 600 ,
envelope : {
attack : 0.001 ,
decay : 1.4 ,
release : 0.2
} ,
harmonicity : 9.1 ,
modulationIndex : 32 ,
resonance : 4000 ,
octaves : 1.5
}).toMaster();
  loop = new Tone.Loop(playSound,'12n');// 2 parameter. what sound, after how long it play
  loop.start();
  Tone.Transport.start();
  
    mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

}

function draw() {
  background("rgba(0,0,0,0.05)");
  let spectrum = fft.analyze();
  drawspectrum(spectrum);
  
}

function mousePressed(){
  playSound();

}

function playSound(){
  
  if(counter ===1 ) {
    melody.triggerAttackRelease('E3','4n');    
  }
  
  if(counter ===3 ) {
    melody.triggerAttackRelease('A3','2n');  
  }
  
  if(counter ===6 ) {
    melody.triggerAttackRelease('C4','4n');   
  }
  
  if(counter ===7 ) {
    melody.triggerAttackRelease('B3','4n');   
  }
  if(counter ===9 ) {
    melody.triggerAttackRelease('A3','2n');   
  }
  
  //
  
  if(counter ===13 ) {
    melody.triggerAttackRelease('E4','4n');   
  }
  if(counter ===15 ) {
    melody.triggerAttackRelease('D4','n');   
  }
  if(counter ===21 ) {
    melody.triggerAttackRelease('B3','2n');   
  }
  
  //
  
  if(counter ===27 ) {
    melody.triggerAttackRelease('A3','2n');  
  }
  
  if(counter ===30 ) {
    melody.triggerAttackRelease('C4','8n');   
  }
  
  if(counter ===31 ) {
    melody.triggerAttackRelease('B3','4n');   
  }
  
  //
  
  if(counter ===33 ) {
    melody.triggerAttackRelease('G3','2n');   
  }
  if(counter ===37 ) {
    melody.triggerAttackRelease('B3','2n');   
  }
  if(counter ===39 ) {
    melody.triggerAttackRelease('E3','2n');   
  }
  
  //
  
  if(counter ===51 ) {
    melody.triggerAttackRelease('E3','4n');    
  }
  
  if(counter ===53 ) {
    melody.triggerAttackRelease('A3','2n');  
  }
  
  if(counter ===56 ) {
    melody.triggerAttackRelease('C4','8n');   
  }
  
  if(counter ===57 ) {
    melody.triggerAttackRelease('B3','4n');   
  }
  if(counter ===59 ) {
    melody.triggerAttackRelease('A3','2n');   
  }
  //finish
  //
  if(counter ===63 ) {
    melody.triggerAttackRelease('E4','2n');   
  }
  if(counter ===65 ) {
    melody.triggerAttackRelease('G4','2n');   
  }
  if(counter ===69 ) {
    melody.triggerAttackRelease('F4','2n');   
  }
  if(counter ===71 ) {
    melody.triggerAttackRelease('F4#','2n');   
  }
  
  ////
  
   if(counter ===75 ) {
    melody.triggerAttackRelease('D4','2n');   
  }
   if(counter ===77 ) {
    melody.triggerAttackRelease('F4','2n');   
  }
   if(counter ===80 ) {
    melody.triggerAttackRelease('E4','4n');   
  }
   if(counter ===81 ) {
    melody.triggerAttackRelease('D4#','2n');   
  }
  
  //
  if(counter ===83 ) {
    melody.triggerAttackRelease('E3','2n');   
  }
   if(counter ===87 ) {
    melody.triggerAttackRelease('C4','2n');   
  }
   if(counter ===89 ) {
    melody.triggerAttackRelease('A3','2n');   
  }
  
  counter = (counter+1)%100;
//synth.triggerAttackRelease('G1','8n');
  console.log(counter);
}
function drawspectrum(spectrum){
beginShape();
  for (i = 0; i < spectrum.length; i++) {
    fill("rgba(255,255,255,0.3)");
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();

}
