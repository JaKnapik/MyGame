var keysDown = {};
addEventListener("keydown", function(e){keysDown[e.keyCode] = true;});
addEventListener("keyup", function(e) { delete keysDown[e.keyCode]; });
let blockLee = false;
let blockXerath = false;
let blockXerathq = false;
let blockLeeq = false;
let timerLeeq = 0;
let timerXerathq = 0;
let timerLee = 0;
let timerXerath = 0;
let startingpoint = 0;
function keysUpdate() {
    // if (32 in keysDown) {
    //     if (!GAME.bullet.visible) {
    //         GAME.bullet.visible = true;
    //         GAME.bullet.positionX = GAME.hero.positionX + HERO_WIDTH / 2 - BULLET_WIDTH / 2;
    //         GAME.bullet.positionY = GAME.hero.positionY;
    //     }
    // }
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
    if(87 in keysDown && timerLee ===0){
        if(leePositionY===document.documentElement.clientHeight-150)
        {
            blockLee=false;
        }
        if(leePositionY>=document.documentElement.clientHeight-350 && blockLee ===false)
        {

            leePositionY-=10;

        }
        else if(blockLee===false)
        {
            leePositionY+=10;
            timerLee = 3;
            setTimeout(function () {
                timerLee = 0;
            },200);
        }
    }
    else if(leePositionY!==document.documentElement.clientHeight-150)
    {
        blockLee = true;
        timerLee = 3;
       if(blockLee === true)
       {
           leePositionY+=10;
       }
        setTimeout(function () {
            timerLee = 0;
        },200);
    }

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

    if(38 in keysDown && timerXerath ===0){
        if(xerathPositionY===document.documentElement.clientHeight-150)
        {
            blockXerath=false;
        }
        if(xerathPositionY>=document.documentElement.clientHeight-350 && blockXerath ===false)
        {

            xerathPositionY-=10;

        }
        else if(blockXerath===false)
        {
            xerathPositionY+=10;
            timerXerath = 3;
            setTimeout(function () {
                timerXerath = 0;
            },200);
        }
    }
    else if(xerathPositionY!==document.documentElement.clientHeight-150)
    {
        blockXerath = true;
        timerXerath = 3;
        if(blockXerath === true)
        {
            xerathPositionY+=10;
        }
        setTimeout(function () {
            timerXerath = 0;
        },200);
    }
    if(81 in keysDown && timerLeeq === 0) {
        if(!leeq.visible) {
            leeq.visible = true;
            leeqPositionX = leePositionX+150;
            leeqPositionY = leePositionY+leeq.height/10;
        }
    }
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