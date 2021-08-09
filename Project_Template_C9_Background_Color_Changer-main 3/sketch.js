// colors +

var btn_red;
var btn_green;
var btn_blue;

//colors -
var btn_redM;
var btn_greenM;
var btn_blueM;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(2000, 1000);  

//red +
btn_red = createButton("Add Red");
btn_red.position(30,50);
btn_red.mousePressed(red_bg);

//red -
btn_redM = createButton("Remove Red");
btn_redM.position(20,100);
btn_redM.mousePressed(redM_bg);

//green +
btn_green = createButton("Add Green");
btn_green.position(275,50);
btn_green.mousePressed(green_bg);


//green -
btn_greenM = createButton("Remove Green");
btn_greenM.position(265,100);
btn_greenM.mousePressed(greenM_bg);


//blue +
btn_blue = createButton("Add Blue");
btn_blue.position(155,50);
btn_blue.mousePressed(blue_bg);

//blue -
btn_blueM = createButton("Remove Blue");
btn_blueM.position(145,100);
btn_blueM.mousePressed(blueM_bg);


}

function draw() {
  background(r,g,b);
}

//backgrounfs
  //reds
function red_bg()
{
r = r + 10;
g = g + 0;
b = b - 0;
}
function redM_bg()
{
r = r - 10;
g = g - 0;
b = b - 0;
}
  
  //greens
function green_bg()
{
r = r - 0;
g = g + 10;
b = b - 0;
}
function greenM_bg()
{
r = r - 0;
g = g - 10;
b = b - 0;
}

  //blues
function blue_bg()
{
r = r - 0;
g = g - 0;
b = b + 10;
}
function blueM_bg()
{
r = r - 0;
g = g - 0;
b = b - 10;
}