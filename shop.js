//import { setInterval } from "timers";

function Shop(x, y){
    this.x = x;
    this.y = y;
    this.items = [];

    this.items.push(new item(this.items.length, this.x, "Multi-Client Clicking", 5, 1, false));
    this.items.push(new item(this.items.length, this.x, "Scripted Click", 35, 1, true));
    console.log(this.items);

    this.show = function(){
        rectMode(CORNER);
        fill(169,169,169);
        rect(this.x, this.y, width - this.x, height);

        this.items.forEach(i => {
            i.show();
        });
    }
}


function item(index, x, label, cost, inc, automatic) {
    this.index = index;
    this.h = 40;
    this.x = x;
    this.y = index * this.h;
    this.w = width - this.x;
    this.mouseOver = false;
    this.label = label;
    this.textHeight = this.y + (this.h / 2) - 3;
    this.cost = cost;
    this.inc = inc;
    this.automatic = automatic;
    this.level = 0;
    this.interval;
    console.log(this.inc);

    this.show = function(){
        this.isMouseOver();
        if(this.mouseOver){
            stroke(255, 204, 0);
        }

        rectMode(CORNER);
        noFill();
        rect(this.x, this.y, this.w, this.h);

        fill(0);
        stroke(0);
        strokeWeight(1);
        textSize(10);
        text(this.label, this.x + 10, this.textHeight);
        text("$" + this.cost, width - 30, this.textHeight);
        if(this.level > 0){
            text("Lv." + this.level, this.x + 10, this.textHeight + 10);
        }
    }

    this.clicked = function(){
        if(money >= this.cost){
            addMoney(-this.cost);
            this.level++;
            this.cost = (this.cost * 1.15).toFixed(2);
            if(!this.automatic){
                clickWorth += this.inc;
            } else {
                clearInterval(this.interval);
                this.interval = setInterval(this.activate, 1000);
            }
        }
    }

    this.activate = function(){
        addMoney(this.inc);
    }

    this.isMouseOver = function(){
        this.mouseOver = 
            (mouseX > this.x && mouseX < width &&
             mouseY > this.y && mouseY < this.y + this.h);
    }
}
