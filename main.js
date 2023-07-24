// Variaveis

var pulsoDX = 0;
var pulsoDY = 0;

video = "";

// Carrega objetos de fora
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	img = loadImage("mario.jpg");
}

// Prepara algumas variaveis
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotResult);

	video = createCapture(VIDEO);
	video.size(640, 400);

	video.parent('console');
}

// Carrega o Modelo
function modelLoaded()
{
	console.log("Modelo Carregado");
}

// Consegue o Resultado
function gotResult(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(noseX + ":Horizontal " + noseY + ":Vertical");
	}
}

// Desenha o Jogo
function draw() {
	game()
}






