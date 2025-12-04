let myFont;
let colorpicker=document.getElementById('colorpicker');
function preload(){
  myFont = loadFont("../fonts/Unica77LLGrk-ExtraBlackItalic.otf");

}
function setup() {
  var c=createCanvas(500, 500);
  c.parent("canvasWrapper");
}

function draw() {
  background(colorpicker.value);
  textAlign(CENTER);
  textSize(80);
  textFont(myFont);
  text("bondia", width / 2, height / 2);
}