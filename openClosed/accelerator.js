function Accelerator() {
  var state = "stop";
  var velocity = 0;
  var aceleration = 0.02;
  var maxVelocity = 0.5;
  
  this.init = function(canvas) {
    canvas.addEventListener("click", push , false);
	}
  
  this.update = function () {
    if (state == "starting") {
      accelerate();
    } else if (state == "stoping") {
      deAccelerate();
    }
  }
  
  this.getVelocity = function () {
    return velocity;
  }

  var push = function () {
    state = "starting";
    maxVelocity += 0.1;
  }  

  var accelerate = function () {
    if (velocity >= maxVelocity) {
      state = "stoping";
      velocity = maxVelocity;
    } else if (velocity < maxVelocity) {
      velocity += aceleration;
    }
  }
  
  var deAccelerate = function () {
    if (velocity <= 0) {
      state = "stop";
      velocity = 0;
    } else if (velocity > 0) {
      velocity -= aceleration * 2;
    }
    resetMaxVelocity();
  }
  
  var resetMaxVelocity = function () {
    maxVelocity = 0.5;
  }
}