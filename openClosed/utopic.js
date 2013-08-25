function Utopic(anAccelerator) {
	var accelerator = anAccelerator;
	var x = 450;
	var y = -355;
	var frame = 1;
	var distance = 0;
  var width = 150;
  var height = 66;
  var halfWidth = width / 2;
  
	this.update = function(delta) {
		var velocity = accelerator.getVelocity();
    distance += delta * velocity;
		if (distance > 0.1) {
			frame = frame + 1 > 1 ? 0 : 1;
			distance = 0;
		}
	}
	
	this.draw = function(context) {
		var image = new Image();
		image.src = "utopic.png";
		
    context.save();
    context.rotate(0.8); 
		context.drawImage(image, 0 + halfWidth * frame, 0, halfWidth, height, x, y, halfWidth, height);
    context.restore();
	}
}