var bx;
var by;
var boxSize = 75;
var overBox = false;
var clicking = false;
var money = Number(0);
var clickWorth = 1;
var shop;

function setup() {
    createCanvas(720, 400);
    bx = width/2.0;
    by = height/2.0;
    strokeWeight(2);
    shop = new Shop(width - (width/4), 0);
}

function draw() { 
    background(255);
    
    // Test if the cursor is over the box 
    isOverBox();
    
    // Draw the box
    drawBox();
    
    // Draw the money
    fill(0);
    stroke(0);
    textSize(40);
    text("$" + money, 100, 100);

    // Draw the shop
    shop.show();
}

function drawBox(){
    if(overBox){
        if(!clicking) { 
            stroke(255); 
            fill(244,122,158);
        }
    } else {
        stroke(156,39,176);
        fill(244,122,158);
    }
    
    strokeWeight(2);
    rectMode(RADIUS);
    rect(bx, by, boxSize, boxSize);
}

function isOverBox(){
    overBox = (mouseX > bx-boxSize && mouseX < bx+boxSize && 
               mouseY > by-boxSize && mouseY < by+boxSize);
}

function addMoney(amountToAdd){
    console.log("money", money);
    console.log("amt to add", amountToAdd);
    money = +money + +amountToAdd;
    money = Number(money.toFixed(2));
}

function mousePressed() {
    if(overBox) { 
        clicking = true; 
        fill(255, 255, 255);
        addMoney(clickWorth);
    } else {
        clicking = false;
    }

    shop.items.forEach(i => {
        if(i.mouseOver){
            i.clicked();
        }
    });
}

function mouseReleased() {
    clicking = false;
}