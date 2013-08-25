function GameEngine() {

	var canvas;
	var context;
	var backBuffer;
	var gameObjects;
	var self = this;

	this.init = function (canvasName) {
		canvas = document.getElementById(canvasName);
		context = canvas.getContext("2d");
		
		backBufferCanvas = document.createElement('canvas');
		backBufferCanvas.width = canvas.width;
		backBufferCanvas.height = canvas.height;
		backBuffer = backBufferCanvas.getContext('2d');
		
		gameObjects = new Array();
		
    var accelerator = new Accelerator();
    accelerator.init(canvas);
    gameObjects.push(accelerator);

		var planet = new Planet(accelerator);
		gameObjects.push(planet);

		var man = new Man(accelerator);
		gameObjects.push(man);

    var utopic = new Utopic(accelerator);
    gameObjects.push(utopic);
    
    // quiero agregar sonido
    //var background = new Background(accelerator);
    //gameObjects.push(background);
    //background.init(canvas);
		
		setInterval(runGame, 1000 / 30);
	}

	function runGame() {
		var thisFrame = new Date().getTime();
		var delta = (thisFrame - this.lastFrame) / 1000;
		if (!delta) delta = 0;
		this.lastFrame = thisFrame;
		
		backBuffer.fillStyle = "rgb(255,255,255)";
		backBuffer.fillRect(0, 0, canvas.width, canvas.height);
		
		for (var i = 0; i < gameObjects.length; i++) {
			gameObjects[i].update(delta);
			if (gameObjects[i].draw) {
				gameObjects[i].draw(backBuffer);
			}
		}
		
		//Loop finished, draw everything
		context.drawImage(backBufferCanvas, 0, 0);
	};

}