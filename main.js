var xdata;
function setup() {
  createCanvas(1200, 800);
  xdata = linspace(-2, 2,0.1);
}

i=0;

function draw(){
  
  background(255);
  CircularBar(i, 100, 255);
  Hpbar(i, 100);
  
  //line_plot(xdata,xdata);
  //line_plot([-3, -2,-1, 1, 2, 3], [9,4, 1,1,4,9]);
  
  i+=1
  if (i>100){
    i=0;
 }
}

function CircularBar(value, total,bg) {
  
  fill(255, 128, 0);
  val =  value
  val_mapped = map(val, 0,total, 0,TWO_PI); 
  stroke(bg);
  arc(50, 50, 80, 80, 0,val_mapped);
  fill(255);
  circle(50,50, 40);
  fill(0);
  text(val,45,55);
}


function Hpbar(value, total){
  smooth();
  fill(255, 0,128)
  rect(100, 40, value, 20);
  stroke(0)
  noFill();
  rect(100, 40, total, 20);
  stroke(255);
  fill(0);
  text(value, 140,55);
}

function line_plot(xs, ys){
  stroke(0);
  noFill();
  beginShape();
  for (var i=0; i<xs.length;i++){
    xv = map(xs[i], 0, max(xs), 0, 100);
    yv = map(ys[i], 0, max(ys), 0, 100);
    vertex(300+xv,100-yv);

  }
  endShape();
}


function linspace(start, end, step){
  space = [];
  for (let i=start;i<end;i+=step){
    space.push(i);
  }
  return space;
}


function feval(func, arr){
  y = []
  arr.forEach(function (item, index){
    y.push(func(item));
  })
}