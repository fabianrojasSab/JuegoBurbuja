/* JUEGO BURBUJA **********************************
Michael Fabian Rojas Sabogal

Laura Viviana Gomez Urueña

version :1.0.3 
Mayo / 2021

nota: agregar los contadores de puntos 
****************************************************/
let colores = ["green","red", "black","blue","orange","gold","lightcoral"];
var cuadrados = [];
var burbuja
var canvas;
var ctx;
var velocidadCuadrado = 90;
var velocidadBurbuja = 2
var radioBurbuja = 30;
var radioCuadrado = 10;
var cantidadCuadrados = 15;
var posBurbuja = {x:400, y:200};
var numAleatorio
var xdirBurbuja = 0;
var ydirBurbuja = 0;

var vista = new Vista();

/*al cargar la pagina lanza el metodo iniciar asociado al evento LOAD*/
window.addEventListener("load", iniciar, false);

/*************************se ejecuta al cargar. crea los objetos ***********************************/

function iniciar (){
	vista.CargarElementos();
	main();
}

//**************************CONTROLA EL CICLO REPETITIVO *************************************/
//ESTRUCTURA minima, no ajusta por cambios de velocidad del hardware
function main(){
	requestAnimationFrame(main);

	ctx.clearRect(0,0,  canvas.width, canvas.height);

	//muestra la burbuja
	vista.MostrarBurbuja();

	//muestra los cuadrados
	vista.MostrarCuadrados();

	//mueve los objetos
	burbuja.mover();

	//mueve los cuadrados
	for(let i = 0; i < cantidadCuadrados ; i ++){
		cuadrados[i].mover();
	}
	
	//aumenta el tamaño de la burbuja
	vista.AumentarTamaño();
	
	//elimina el cuadrado cuando choca con la burbuja
	vista.DeleteCuadrados();
}


/************************************* FUNCIONES AUXILIARES ***************************************/
// generar un numero al azar entre min y max
function aleatorio(min, max){
	return Math.round((min + Math.random()*(max-min)));
}

//esta funcion se encuentra en el index
function control(event){
	var cod = event.keyCode;

	if(cod == 38){
		ydirBurbuja = -velocidadBurbuja;
		xdirBurbuja = 0;
	}
	if(cod == 40){
		ydirBurbuja = velocidadBurbuja;
		xdirBurbuja = 0;
	}

	if(cod == 37){
		ydirBurbuja = 0;
		xdirBurbuja = -velocidadBurbuja;
	}
	if(cod == 39){
		ydirBurbuja = 0;
		xdirBurbuja = velocidadBurbuja;
	}
	if(cod == null){
		ydirBurbuja = 0;
		xdirBurbuja = 0;
	}
}

function colicion(Obj1, Obj2){
	let distancia = Math.sqrt((Obj1.x - Obj2.x) * (Obj1.x - Obj2.x) + (Obj1.y - Obj2.y) * (Obj1.y - Obj2.y));

	if (Math.round(distancia) < (Obj1.r + Obj2.r)){
		return true;
	}
}














