var robot = require("robotjs");
var cron = require('node-cron')
;

//Move the mouse to 100, 100 on the screen.
function move(){
    // Speed up the mouse.
robot.setMouseDelay(2);
robot.moveMouse(100, 100);
}

function moveup(){
    // Speed up the mouse
robot.setMouseDelay(2);
robot.moveMouse(700, 100);
}

cron.schedule('*/15 * * * * *', () => {
  moveup()
});

cron.schedule('*/30 * * * * *', () => {
  move()
});
