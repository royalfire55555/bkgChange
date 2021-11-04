function setup() {
    createCanvas(400,400);
}

function draw() {
    
    if (keyDown(UP_ARROW)) {
        console.log("Changing color to red");
        background("red");
    } else if (keyDown(DOWN_ARROW)) {
        console.log("Changing color to blue");
        background("blue");
    } else if (keyDown(RIGHT_ARROW)) {
        console.log("Changing color to green");
        background("green");
    } else if (keyDown(LEFT_ARROW)) {
        console.log("Changing color to black");
        background(30);
    }
    drawSprites();
}