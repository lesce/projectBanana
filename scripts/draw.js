function drawww(){
	var cnvs = document.getElementById("hexagon");
	var context = cnvs.getContext("2d");
	//context.strokeRect(50,25,150,100);	
	var pic = new Image();
	pic.src = "images/hexagonrgb.png";
	context.drawImage(getPic(),0,90,100,100);//coloana1
	context.drawImage(getPic(),0,180,100,100);
	context.drawImage(getPic(),0,270,100,100);
	context.drawImage(getPic(),78,45,100,100);//coloana2
	context.drawImage(getPic(),78,135,100,100);
	context.drawImage(getPic(),78,225,100,100);
	context.drawImage(getPic(),78,315,100,100);
	context.drawImage(getPic(),156,0,100,100);//coloana3
	context.drawImage(getPic(),156,90,100,100);
	context.drawImage(getPic(),156,180,100,100);
	context.drawImage(getPic(),156,270,100,100);
	context.drawImage(getPic(),156,360,100,100);
	context.drawImage(getPic(),234,45,100,100);//coloana4
	context.drawImage(getPic(),234,135,100,100);
	context.drawImage(getPic(),234,225,100,100);
	context.drawImage(getPic(),234,315,100,100);
	context.drawImage(getPic(),312,90,100,100);//coloana5
	context.drawImage(getPic(),312,180,100,100);
	context.drawImage(getPic(),312,270,100,100);
}
var indexOre = 0;//0
var indexBrick = 0;//1
var indexLumber = 0;//2
var indexWool = 0;//3
var indexGrain = 0;//4
var list = new Array(1,0,2,1,4,3,2,1,3,0,0,1,3,2,4,4,3,2,5);

function getPic(){
	testPic = new Image();
	val = Math.floor(Math.random()*list.length);
	console.log(val);
	testPic.src="images/"+list[val]+".png";
	list.splice(val,1);
	return testPic;
}
function getRandExcept(x){
	val = Math.floor(Math.random()*5);
	if(x===val)
		return getRandExcept(x);
	else 
		return val;
}