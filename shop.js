function Shop(x, y){
    this.x = x;
    this.y = y;
    this.items = [];

    this.items.push(new item(0, this.x, "Multi-Client Clicking", 5, 1, false));

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
    this.x = x;
    this.h = 40;
    this.w = width - this.x;
    this.mouseOver = false;
    this.label = label;
    this.textHeight = (height * this.index) + (this.h / 2) - 3;
    this.cost = cost;
    this.inc = inc;
    this.automatic = automatic;

    this.show = function(){
        
        if(this.automatic){
            // is an automatic upgrade

        }
        
        this.isMouseOver();
        if(this.mouseOver){
            stroke(255, 204, 0);
        }

        rectMode(CORNER);
        noFill();
        rect(x, index * height, this.w, this.h);

        fill(0);
        stroke(0);
        strokeWeight(1);
        textSize(10);
        text(this.label, this.x + 10, this.textHeight);
        text("$" + this.cost, width - 15, this.textHeight);
    }

    this.clicked = function(){
        if(money >= this.cost){
            addMoney(-this.cost);
        }
    }

    this.isMouseOver = function(){
        this.mouseOver = 
            (mouseX > this.x && mouseY < width &&
             mouseY > this.index * height && mouseY < (this.index * height) + this.h);
    }
}
