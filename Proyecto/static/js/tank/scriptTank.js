var x = 350;
var y = 250;
var vida = 0;
var duracion = 0;
var rotacion = 0;
var rockets=4;
var msg = 0;
var ast = [[aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)],
		   [aleatorio(700),aleatorio(500)]];

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	var lienzo = $("#lienzo")[0];
	var contexto = lienzo.getContext("2d");
	var buffer = document.createElement("canvas");
	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");
	contextoBuffer.fillStyle = "#ffffff"; 
	contextoBuffer.clearRect(0,0,700,500);
	contextoBuffer.font = "bold 50px sans-serif";
	contextoBuffer.fillText("TANK WAR", 220, 200);
	contextoBuffer.fillStyle = "#ff0000"; 
	contextoBuffer.font = "bold 30px sans-serif";
	contextoBuffer.fillText("¡Bienvenido!", 260, 230);
	contextoBuffer.fillText("Da click en iniciar para jugar.", 150, 260);
	contexto.clearRect(0,0,700,500);
	contexto.drawImage(buffer, 0, 0);
	$('#brisa')[0].play();
	$("#iniciar").click(function(){	
		x = 350;
		y = 250;	
		vida = 100;
		duracion = 0;
		run();		
	});
    $("#enviar").click(function(){	
		$("#frmoculto").submit();
	});
	$("#recomendaciones").load("recomendaciones.html");
}

function aleatorio(tope){
	return Math.floor((Math.random() * tope) + 1);
} 

function capturaTeclado(event){
	if(event.which==38 || event.which==87){
            if((rotacion*Math.PI/180)==0){
                y +=10;
            }else if(rotacion > 0 && rotacion < 90){
                y = y + 10*(Math.cos(rotacion*Math.PI/180));
                x = x - 10*(Math.sin(rotacion*Math.PI/180))
            }else if(rotacion==90){
                x -=10;
            }else if(rotacion > 90 && rotacion < 180){
                y = y + 10*(Math.cos(rotacion*Math.PI/180));
                x = x - 10*(Math.sin(rotacion*Math.PI/180))
            }else if(rotacion==180){
                y -=10;
            }else if(rotacion > 180 && rotacion < 270){
                y = y + 10*(Math.cos(rotacion*Math.PI/180));
                x = x - 10*(Math.sin(rotacion*Math.PI/180))
            }else if(rotacion==270){
                x +=10;
            }else if(rotacion > 270 && rotacion < 360){
                y = y + 10*(Math.cos(rotacion*Math.PI/180));
                x = x - 10*(Math.sin(rotacion*Math.PI/180))
            }
        }
	if(event.which==39 || event.which==68)
            rotacion +=10;
	if(event.which==37 || event.which==65)
            rotacion -=10;

	x = (700 + x)%700;
	y = (500 + y)%500;
    rotacion = (360 + rotacion)%360;
	//alert(event.which);
	//if(event.which==38 || event.which==87)
		//y -= 10;
	//if(event.which==40 || event.which==83)
		//y += 10;
	//if(event.which==39 || event.which==68)
		//x += 10;
	//if(event.which==37 || event.which==65)
		//x -= 10;
	//x = (700 + x)%700;
	//y = (500 + y)%500;
}

function Nave(){
	this.img = [$("#ship")[0],$("#explosion")[0]];
	this.msgs = ["verifica el frente", "cuidado al lado", "mejor moverse", 
	             "ojo alrededor", "cuidado con el misil", "evita los misiles",
	             "acelera","no puedes colisionar mas","debes mantener la vida",
	             "atiende los controles"];
	
	this.dibujar = function(ctx,i){
		var img = this.img[i];
		//ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#aaaaff";
		ctx.font = "10px sans-serif";
		ctx.fillText("pos x: "+ x + " pos y: " + y, x - 25, y + 50);
		ctx.fillText("pos x1: "+ (-img.width/2) + " pos y1: " + (-img.height/2), x - 25, y + 70);
		ctx.fillStyle = "#ff8888";
		ctx.fillText(this.msgs[msg], x - 25, y + 60);
		
		
		ctx.translate(x+13,y+13);
        ctx.rotate(rotacion*Math.PI/180);
		ctx.drawImage(img,-img.width/2,-img.height/2);
		ctx.restore();
	}
	
	this.colision = function(xx,yy){
		var distancia=0;
		distancia=Math.sqrt( Math.pow( (xx-x), 2)+Math.pow( (yy-y),2));
		if(distancia>30)
		   return false;
		else
		   return true;	
	}
}

function Asteroid(){
	this.img = $("#asteroid")[0];			
	this.dibujar = function(ctx, x1, y1){
		var img = this.img;
		ctx.save();
		//ctx.translate(x1,y1);
		//ctx.rotate(rotacion*Math.PI/180);
		ctx.drawImage(img,x1,y1);
		ctx.restore();
	}
}

function run(){ 
	var lienzo = $("#lienzo")[0];
	var contexto = lienzo.getContext("2d");
	var buffer = document.createElement("canvas");
	buffer.width = lienzo.width;
	buffer.height = lienzo.height;
	contextoBuffer = buffer.getContext("2d");
	contextoBuffer.fillStyle = "#ffffff"; 
	if(vida >= 0){  		
		duracion++;
		if(duracion % 50 == 0)
			msg = aleatorio(9);
		var objnave = new Nave();
		var objasteroid = [new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid(),new Asteroid(),new Asteroid(),
						   new Asteroid()]; 	
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 25px sans-serif";
		contextoBuffer.fillText("vida = "+vida, 25, 25);
		contextoBuffer.fillText("puntos = "+parseInt(duracion/10), 250, 25);
        $("#oculto")[0].value = parseInt(duracion/10);
		objnave.dibujar(contextoBuffer,0);
		//rotacion -= 5;
		if((duracion/10)>20 && (duracion/10)<60 ){
			rockets=8;
		}else if((duracion/10)>60 && (duracion/10)<90 ){
			rockets=12;
		}else if((duracion/10)>90){
			rockets=16;
		}
		for(i=0;i<rockets;i++){
			
			objasteroid[i].dibujar(contextoBuffer,ast[i][0],ast[i][1]);
			if(objnave.colision(ast[i][0],ast[i][1])){
				vida -=1;
				objnave.dibujar(contextoBuffer,1);
				$('#explode')[0].play();
			}
			ast[i][0]-=3;
			ast[i][1]+=3;
			ast[i][0] = (700 + ast[i][0])%700;
			ast[i][1] = (500 + ast[i][1])%500;
		}
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		$("button").css("display","none");
	}else{
		$('#brisa')[0].pause();
		
		contextoBuffer.clearRect(0,0,700,500);

		contextoBuffer.font = "bold 50px sans-serif";
		contextoBuffer.fillText("JUEGO TERMINADO", 140, 200);
		contextoBuffer.fillText(parseInt(duracion/10)+" pts", 250, 250);
		contexto.clearRect(0,0,700,500);
		contexto.drawImage(buffer, 0, 0);
		$("button").css("display","inline");
		
	}
}
