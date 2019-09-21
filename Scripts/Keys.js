var keysDown = {};
var keysReleased = {};
addEventListener("keydown", function(e){keysDown[e.keyCode] = true;});
addEventListener("keyup", function(e) { delete keysDown[e.keyCode]; keysReleased[e.keyCode]=true});
leeqPositionX=0;
leeqPositionY=0;
let leeLeft=false;
let blockLee = false;
let blockXerath = false;
let blockXerathq = false;
let blockLeeQ = false;
function keysUpdate() {

    if (68 in keysDown){
        if (leePositionX < canvas.width-lee.width) {
            leePositionX += 10;
            lee = leeR;
        }
}
    if (65 in keysDown) {
        if (leePositionX > 0){
            leePositionX -= 10;
            lee = leeL;
        }
    }
    if(87 in keysDown && blockLee===false) {
        if (leePositionY > document.documentElement.clientHeight - 350) {
            leePositionY -= 10;
        }
        else(keysReleased[87]=true);
    }

    if(87 in keysReleased) {
        leePositionY+=10;
        blockLee=true;
        if(leePositionY===document.documentElement.clientHeight-150)
        {
            blockLee=false;
            delete keysReleased[87];
        }
    }

//Movement Xerath
    if (39 in keysDown){
        if (xerathPositionX < canvas.width-xerath.width/6) {
            xerathPositionX += 5;
            xerath = xerathR;
        }
    }
    if (37 in keysDown) {
        if (xerathPositionX > 0){
            xerathPositionX -= 5;
            xerath = xerathL;
        }
    }

    if(38 in keysDown && blockXerath===false) {
        if (xerathPositionY > document.documentElement.clientHeight - 350) {
            xerathPositionY -= 10;
        }
        else(keysReleased[38]=true);
    }

    if(38 in keysReleased) {
        xerathPositionY+=10;
        blockXerath=true;
        if(xerathPositionY===document.documentElement.clientHeight-150)
        {
            blockXerath=false;
            delete keysReleased[38];
        }
    }


    //Lee Q

    if(81 in keysDown && blockLeeQ ===false)
    {
        if(lee===leeR) {
            if(!leeq.visible) {
            blockLeeQ = true;
            leeq.visible = true;
            leeqPositionX = leePositionX + 150;
            leeqPositionY = leePositionY + leeq.height / 10;
            keysReleased[81]=true;
            leeLeft=false;
            }
        }
        else if (lee===leeL)
        {
            if(!leeq.visible) {
                blockLeeQ = true;
                leeq.visible = true;
                leeqPositionX = leePositionX + 10;
                leeqPositionY = leePositionY + leeq.height / 10;
                keysReleased[81]=true;
                leeLeft=true;
            }
        }

    }
    if(81 in keysReleased && blockLeeQ===true)
    {
        if(leeq.visible)
        {
            if(leeLeft===false)
            {
                leeqPositionX +=20;
            }
            else if(leeLeft===true)
            {
                leeqPositionX -=20;
            }
        }
        else if(!leeq.visible){
            blockLeeQ=false;
            delete keysReleased[81];
        }

    }
    // if(81 in keysDown && ) {
    //     if(!leeq.visible) {
    //         leeq.visible = true;
    //         leeqPositionX = leePositionX+150;
    //         leeqPositionY = leePositionY+leeq.height/10;
    //     }
    // }

    //xerath q
    if(96 in keysDown) {
        if(!xerathq.visible)
        {
            blockXerathq = false;
        }
            if(!xerathq.visible && blockXerathq === false) {
                xerathq.visible = true;
                xerathqPositionX = xerathPositionX;
                xerathqPositionY = xerathPositionY+xerathq.height/20;
        }
    }
    // if(97 in keysDown) {
    //     if(!xerathult.visible) {
    //         xerathult.visible = true;
    //         xerathultPositionX = xerathPositionX;
    //         xerathultPositionY = xerathPositionY;
    //     }
    // }
}