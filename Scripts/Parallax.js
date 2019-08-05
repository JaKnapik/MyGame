let leePositionY = document.documentElement.clientHeight-150;
let leePositionX = 10;
let leeqPositionX;
let leeqPositionY;
let xerathqPositionX = 0;
let xerathqPositionY = 0;
let leeUlt = 0;
let xerathUlt = 0;
let leeHealth = 100;
let xerathHealth = 100;
let myMusic;
let xerathPositionY = document.documentElement.clientHeight-150;
let xerathPositionX = document.documentElement.clientWidth-xerathL.width/3-150;
let xerathultPositionY = xerathPositionY;


function hittest() {
    return (leePositionX+800< (xerathqPositionX + xerathq.width)) &&
        ((leePositionX + lee.width) > xerathqPositionX) &&
        (leePositionY+860 < (xerathqPositionY + xerathq.height)) &&
        ((leePositionY + lee.height) > xerathqPositionY);
}

function hittestLee() {
    return (xerathPositionX+550 < (leeqPositionX + leeq.width)) &&
        ((xerathPositionX-100 + xerath.width) > leeqPositionX) &&
        (xerathPositionY+500 < (leeqPositionY + leeq.height)) &&
        ((xerathPositionY-300 + xerath.height) > leeqPositionY);
}

function drawLeeBullet() {
        if (leeq.visible) {

            if(lee===leeL) {
                context.drawImage(leeq, leeqPositionX-150, leeqPositionY, 40, 40);
                leeqPositionX -= 10;

            }
            else {
                context.drawImage(leeq, leeqPositionX, leeqPositionY, 40, 40);
                leeqPositionX +=10;
            }

            if(leeqPositionX>document.documentElement.clientWidth || leeqPositionX<0 ) {
                leeq.visible = false;
            }
        }
    }

function drawXerathBullet() {
         if (xerathq.visible && blockXerathq === false) {
             if (xerath === xerathR ) {
                 context.drawImage(xerathq, xerathqPositionX + 100, xerathqPositionY, 40, 40);
                 xerathqPositionX += 15;
             } else {
                 context.drawImage(xerathq, xerathqPositionX, xerathqPositionY, 40, 40);
                 xerathqPositionX -= 15;
             }

             if (xerathqPositionX > document.documentElement.clientWidth || xerathqPositionX <= 0) {
                 xerathq.visible = false;
             }
         }
 }

function xerathScore() {
    if(xerathq.visible && hittest())
    {
        xerathq.visible = false;
        xerathUlt += 1;
        leeHealth -= 10;
    }
}
function leeScore() {
    if(leeq.visible && hittestLee())
    {
        leeq.visible = false;
        leeUlt += 1;
        xerathHealth -= 10;
    }
}
function leeUltimate() {
    if(leeUlt === 3 )
    {
        leeHealth +=10;
        leeUlt = 0;
    }
}
function xerathUltimate()
{
     if(xerathUlt === 3 && hittest())
     {
        if(xerath===xerathL) {
            context.drawImage(xerathultR, xerathPositionX-1900, xerathultPositionY, 2000, 200)
        }
        else if (xerath === xerathR) {
            context.drawImage(xerathult, xerathPositionX, xerathultPositionY, 2000, 200)
        }
        else {
            context.drawImage(xerathultR, xerathPositionX-1900, xerathultPositionY, 2000, 200)
        }
        xerathUlt -=3;
        leeHealth -=10;
     }

}
function drawText(text) {
    context.fillStyle = "rgb(255, 0, 255)";
    context.font = "40px Helvetica";
    let positionX = (document.documentElement.clientWidth - context.measureText(text).width)/2;
    let positionY = (document.documentElement.clientHeight) / 2;
    context.fillText(text, positionX, positionY);
}
function drawScore() {

    context.fillStyle = "rgb(255, 255, 255)";
    context.font = "20px Helvetica";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("Xerath ult: " + xerathUlt, document.documentElement.clientWidth-165, 0);
    context.fillText("Lee ult: " + leeUlt, 0, 0);
    context.fillText("Xerath health: " + xerathHealth, document.documentElement.clientWidth-165, 40);
    context.fillText("Lee health: " + leeHealth, 0, 40);
}
let render = function() {

    // context.drawImage(sky, 0, 0, sky.width, sky.height,
    //     0, 0, sky.width, sky.height);
    //
    // context.drawImage(forest, 0, 0, canvas.width, forest.height*1.1,
    //     0, 0, canvas.width, forest.height);
    //
    // context.drawImage(temple, 20, 0, canvas.width, temple.height,
    //     0, canvas.height/2.2, canvas.width*1.2, temple.height);
    if(xerathHealth>0 && leeHealth>0) {

    context.drawImage(temple, 0,0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    context.drawImage(lee, leePositionX, leePositionY ,150, 150);
    context.drawImage(xerath, xerathPositionX, xerathPositionY ,150, 150);
    drawLeeBullet();
    drawXerathBullet();

    leeScore();
    leeUltimate();
    xerathUltimate();
    xerathScore();

    }

    else if(xerathHealth<=0) {
    drawText("Xerath has lost")
    }
    else if(leeHealth<=0) {
        drawText("Lee has lost")
    }
    drawScore();
};

function main() {
    keysUpdate();
    render();
    requestAnimationFrame(main);
}