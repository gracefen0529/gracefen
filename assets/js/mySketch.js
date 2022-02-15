let sw;

let yStep = 10;
let arcSize = 200;

function setup(){
  createCanvas(windowWidth,windowHeight)
	//設定麥克風接收音源
	// mic = new p5.AudioIn()
	// mic.start()	
}

function draw(){
  background("#eeeeee");
  mouseX = constrain(mouseX,10,width);
	mouseY = constrain(mouseY,10,height);
	yStep = mouseY;
	arcSize = mouseX;
	translate(-200,height)
	rotate(-PI/2)
	crl1(0,0)
	
}
// var lerpeMicLevel = 0 //micLevel剛開始是0
function crl1(){
	noFill();
	stroke(20);
	// var micLevel = mic.getLevel()  //取得當下音量
	for(let y=+arcSize/2; y<height*2+arcSize;y+=yStep){
		let alpha = (frameCount*5);
		sw = map(sin(radians(y+alpha)),-1,1,2,yStep);
		strokeWeight(sw);
		for (let x1=arcSize/2;x1<width*2+arcSize;x1+=arcSize){
			arc(x1,y,arcSize/2,(arcSize/2),0,PI);
		}
		sw = map(sin(radians(y-alpha)),-1,1,2,yStep);
		strokeWeight(sw);
		for (let x2=0;x2<width+arcSize;x2+=arcSize){
			arc(x2,y,arcSize/2,arcSize/2,PI,TWO_PI);
		}
	}
}
