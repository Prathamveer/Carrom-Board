var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(200, 50, 250, 10);
var wall2 = createSprite(200, 350, 250, 10);
var wall3 = createSprite(350, 200, 10, 250);
var wall4 = createSprite(50, 200, 10, 250);

var design = createSprite(200,200,50,50);
var line1= createSprite(200,200,2,300)
var line2 = createSprite(200,200,300,2)
var line3= createSprite(204,200,2,300)
var line4 = createSprite(200,204,300,2)

var target = createSprite(200, 200, 10, 10);
var striker = createSprite(200, 334, 20, 20);


function draw() {
    background("gold");
    
    text("CARROM BOARD GAME",140,40);
    textSize(32);
    textFont("Georgia");
    textStyle(BOLD);
    
    striker.shapeColor="purple";
    target.shapeColor="blue";
    design.shapeColor="silver";
    line1.shapeColor="red";
    line2.shapeColor="red";
    line3.shapeColor="red";
    line4.shapeColor="red";
    
    
    if (keyDown("UP_ARROW")) {
      striker.velocityX = 0;
      striker.velocityY = -5;
    }
    if (keyDown("DOWN_ARROW")) {
      striker.velocityX = 0;
      striker.velocityY = 5;
    }
    if (keyDown("LEFT_ARROW")) {
      striker.velocityX = -5;
      striker.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      striker.velocityX = 5;
      striker.velocityY = 0;
    }
    
    target.bounceOff(wall1);
    target.bounceOff(wall2);
    target.bounceOff(wall3);
    target.bounceOff(wall4);
    
    striker.bounceOff(wall1);
    striker.bounceOff(wall2);
    striker.bounceOff(wall3);
    striker.bounceOff(wall4);
    
    if (striker.bounce(target)) {
    
    if (keyDown("UP_ARROW")) {
      target.velocityX = 0;
      target.velocityY = -1;
    }
    if (keyDown("DOWN_ARROW")) {
      target.velocityX = 0;
      target.velocityY = 1;
    }
    if (keyDown("LEFT_ARROW")) {
      target.velocityX = -1;
      target.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      target.velocityX = 1;
      target.velocityY = 0;
    }
    }
    
    if ((target.x < 70 && target.y < 70) || (target.x > 332 && target.y < 68) || 
        (target.x < 69 && target.y > 328) || (target.x > 327 && target.y > 330) ){
        
    }
    
    createEdgeSprites();
    if(striker.bounce(edges)){
      striker.x = 200;
      striker.y = 334;
    }
    drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
