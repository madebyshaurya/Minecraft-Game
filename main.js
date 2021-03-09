var canvas = new fabric.Canvas("myCanvas");

X = 10;
Y = 10;

blockImgWidth = 30;
blockImgHeight = 30;

var playerObject = "";
var blockImgObject = "";


function playerUpdate() {
    fabric.Image.fromURL("Player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: Y,
            left: X
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockImgObject = Img;
        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeight);
        blockImgObject.set({
            top: Y,
            left: X
        });
        canvas.add(blockImgObject);
    });
}
window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("P and Shift key are pressed together.");
        blockImgHeight = blockImgHeight + 10;
        blockImgWidth = blockImgWidth + 10;
        document.getElementById("current_height").innerHTML = blockImgHeight;
        document.getElementById("current_width").innerHTML = blockImgWidth;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("M and Shift key are pressed together.");
        blockImgHeight = blockImgHeight - 10;
        blockImgWidth = blockImgWidth - 10;
        document.getElementById("current_height").innerHTML = blockImgHeight;
        document.getElementById("current_width").innerHTML = blockImgWidth;
    }

    if (keyPressed == "38") {
        console.log("Up");
        up();
    }

    if (keyPressed == "40") {
        console.log("Down");
        down();
    }

    if (keyPressed == "37") {
        console.log("Left");
        left();
    }

    if (keyPressed == "39") {
        console.log("Right");
        right();
    }

    if (keyPressed == "87") {
        console.log("W");
        newImage("wall.jpg");
    }

    if (keyPressed == "71") {
        console.log("G");
        newImage("ground.png");
    }

    if (keyPressed == "76") {
        console.log("L");
        newImage("light_green.png")
    }
    if (keyPressed == "84") {
        console.log("T");
        newImage("trunk.jpg");
    }

    if (keyPressed == "82") {
        console.log("R");
        newImage("roof.jpg");
    }

    if (keyPressed == "89") {
        console.log("Y");
        newImage("yellow_wall.png");
    }

    if (keyPressed == "68") {
        console.log("D");
        newImage("dark_green.png");
    }

    if (keyPressed == "85") {
        console.log("U");
        newImage("unique.png");
    }

    if (keyPressed == "67") {
        console.log("C");
        newImage("cloud.jpg");
    }
}

function up() {
    if (Y >= 0) {
        Y = Y - 15;
        console.log("Block Image height = " + blockImgHeight);
        console.log("When Up arrow is pressed, new X and Y values = " + "X - " + X + " and " + "Y - " + Y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if (Y <= 650) {
        Y = Y + 15;
        console.log("Block Image height = " + blockImgHeight);
        console.log("When Down arrow is pressed, new X and Y values = " + "X - " + X + " and " + "Y - " + Y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right() {
    if (X <= 850) {
        X = X + 15;
        console.log("Block Image width = " + blockImgWidth);
        console.log("When right arrow is pressed, new X and Y values = " + "X - " + X + " and " + "Y - " + Y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if (X >= 0) {
        X = X - 15;
        console.log("Block Image width = " + blockImgWidth);
        console.log("When left arrow is pressed, new X and Y values = " + "X - " + X + " and " + "Y - " + Y);
        canvas.remove(playerObject);
        playerUpdate();
    }
}