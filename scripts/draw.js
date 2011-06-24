function drawww(){
	var cnvs = document.getElementById("hexagon");
	var context = cnvs.getContext("2d");
	//context.strokeRect(50,25,150,100);	
	var pic = new Image();
	pic.src = "images/hexagonrgb.png";
	context.drawImage(pic,0,90,100,100);//coloana1
	context.drawImage(pic,0,180,100,100);
	context.drawImage(pic,0,270,100,100);
	context.drawImage(pic,78,45,100,100);//coloana2
	context.drawImage(pic,78,135,100,100);
	context.drawImage(pic,78,225,100,100);
	context.drawImage(pic,78,315,100,100);
	context.drawImage(pic,156,0,100,100);//coloana3
	context.drawImage(pic,156,90,100,100);
	context.drawImage(pic,156,180,100,100);
	context.drawImage(pic,156,270,100,100);
	context.drawImage(pic,156,360,100,100);
	context.drawImage(pic,234,45,100,100);//coloana4
	context.drawImage(pic,234,135,100,100);
	context.drawImage(pic,234,225,100,100);
	context.drawImage(pic,234,315,100,100);
	context.drawImage(pic,312,90,100,100);//coloana5
	context.drawImage(pic,312,180,100,100);
	context.drawImage(pic,312,270,100,100);
}
function reset(){
	var cnvs = document.getElementById("hexagon");
	cnvs.width = cnvs.width;
}