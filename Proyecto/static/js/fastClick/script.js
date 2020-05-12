var contador = 0;
var time; 
var on = true;
var seconds = 0;


var startTime = function(){
	time = setTimeout("startTime()",1000);
	
	if(seconds < 11){ 
		document.getElementById("segundos").value = seconds;	
		seconds++;
	}else{
		on = true;
		clearTimeout(time);
		alert("¡TIEMPO AGOTADO!");
	}	
		
}

function cambiar()
{
	if(seconds > 10 || (on) ){
		document.getElementById('contador').innerHTML = contador + 0;
	}else{
		document.getElementById('contador').innerHTML = contador += 1;
		document.getElementById('oculto').value = contador;
	}
}

function nuevo()
{
	document.getElementById('contador').innerHTML = contador = 0;
	seconds = 0;	
	if(on){
		startTime();
		on=false;
	}
}
