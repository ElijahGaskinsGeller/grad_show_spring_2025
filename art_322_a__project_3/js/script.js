function GetPageHeight() {
    return Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight,
        document.documentElement.offsetHeight);
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function WindowScrollNormalPosition() {
    return window.scrollY / (GetPageHeight() - window.innerHeight);
}

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
}

function inverse_lerp(start, end, amt) {
    return (amt - start) / (end - start);
}

function RectNormalPositionOnScreen(rectY, rectHeight, screenHeight) {
    let start = screenHeight;
    let end = -rectHeight;

    //NOTE: (x-min)/(max-min)
    let result = (rectY - start) / (end - start);

    return result;

}

function RandomInt(max) {
    let result = Math.round(Math.random() * max);
    return result;
}

function AddOnFrameEvent(object, frame, func) {
    return object.timeline.addTween(createjs.Tween.get(object).wait(frame).call(func).wait(1));
}

function RemoveOnFrameEvent(object, tween) {
    return object.timeline.removeTween(tween);
}

function page_init(lib) {
    console.log(lib);

    let _this = stage.children[0];

    let page = _this.page;

    let ballBase = page.ball;
    ballBase.visible = false;

    let ballPool = [];
    let ballCount = 500;

    let activeBalls = [];
    let maxActiveBalls = 75;

    let leafs = [];

    let colorPool = ["#396788", "#3b3988", "#8f44a7", "#a7447e", "#a1474b", "#718839", "#886439"];

    function PullFromColorPool() {
        return colorPool[RandomInt(colorPool.length - 1)];
    }

    console.log(page);
    console.log(ballBase);
    console.log(ballBase.nominalBounds);

    for (let i = 0; i < ballCount; i++) {
        let newBall = new lib.ball(0, 0, -1, 0);
        //TODO: maybe randomize scale
        newBall.scaleX = .15;
        newBall.scaleY = .15;
        newBall.visible = false;
        // let newBall = ballBase.clone();
        page.addChild(newBall);


        newBall.gotoAndStop(0);
        let tween = AddOnFrameEvent(newBall, newBall.totalFrames - 1, function() {

            newBall.x = RandomInt(canvas.width);
            newBall.y = -RandomInt(100);

            let color = Math.floor(Math.random() * 16777215).toString(16);
            newBall.fill.children[0].graphics._fill.style = PullFromColorPool();


            newBall.gotoAndStop(0);

            // RemoveOnFrameEvent(tween);

        })

        ballPool.push(newBall);
    }

    {
        // let currentBox = page["box_0"];
        //     let currentLeaf = page["leaf_0"];
        //     let i = 0;
        //
        //     while(currentLeaf !== undefined){
        //         currentLeaf.gotoAndStop(0);
        //         currentLeaf.setColor = "#000000"
        //
        //         let localLeaf = currentLeaf;
        //
        //         let tween = AddOnFrameEvent(currentLeaf,currentLeaf.totalFrames-1, function(){
        //
        //             localLeaf.children[0].graphics._fill.style = localLeaf.setColor;
        //             localLeaf.children[0].opacity = 1;
        //
        //
        //             localLeaf.gotoAndStop(0);
        //
        //             // RemoveOnFrameEvent(tween);
        //
        //         })
        //
        //         leafs.push(currentLeaf);
        //         i++;
        //         currentLeaf = page["leaf_"+i];
        //     }
        // }
    }

    for (let i = 0; i < page.children.length; i++) {

        let currentObject = page.children[i];

        let type = typeof currentObject;

        console.log(currentObject.instanceName);


        if (currentObject.totalFrames > ballBase.totalFrames) {
            currentObject.gotoAndStop(0);
            currentObject.setColor = "#000000"

            let localLeaf = currentObject;

            let tween = AddOnFrameEvent(currentObject, currentObject.totalFrames - 1, function() {

                localLeaf.children[0].graphics._fill.style = localLeaf.setColor;
                localLeaf.children[0].opacity = 1;


                localLeaf.gotoAndStop(0);

                // RemoveOnFrameEvent(tween);

            })

            leafs.push(currentObject);
        }


    }

    console.log(leafs);
    console.log(leafs[0].nominalBounds);

    let canvas = document.getElementById("canvas");


    function calcScrollEnd() {
        return scrollStart - (page.nominalBounds.height) + (canvas.clientHeight) - (2 * padding) - 1600;
    }

    let padding = 0;

    let scrollStart = page.y + padding;
    let scrollEnd = calcScrollEnd();


    function onResize(e) {
        let stageRatio = lib.properties.height / lib.properties.width;

        stage.scaleY = canvas.clientWidth / canvas.clientHeight * window.devicePixelRatio * stageRatio;

        scrollEnd = calcScrollEnd();
        onScroll(null);

        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
    }

    function onScroll(e) {

        let currentScroll = WindowScrollNormalPosition();

        page.y = lerp(scrollStart, scrollEnd, currentScroll);


    }

    function update(t) {

        while (activeBalls.length < maxActiveBalls) {

            let currentBall = ballPool.pop();
            currentBall.visible = true;
            currentBall.x = RandomInt(canvas.width);
            currentBall.y = -RandomInt(1000);
            activeBalls.push(currentBall);


            let color = Math.floor(Math.random() * 16777215).toString(16);
            // currentBall.children[0].graphics._fill.style = "#"+color;
            // currentBall.children[0].graphics._fill.style = PullFromColorPool();
            currentBall.fill.children[0].graphics._fill.style = PullFromColorPool();


            // console.log(activeBalls);
            // console.log(ballPool);

        }

        let speed = 2;

        let currentBallRect = new createjs.Rectangle(0, 0, 0, 0);
        let currentLeafRect = new createjs.Rectangle(0, 0, 0, 0);

        for (let i = 0; i < activeBalls.length; i++) {
            let currentBall = activeBalls[i];


            currentBallRect.x = currentBall.x;
            currentBallRect.y = currentBall.y;
            currentBallRect.width = currentBall.nominalBounds.width * currentBall.scaleX;
            currentBallRect.height = currentBall.nominalBounds.height * currentBall.scaleY;


            for (let j = 0; j < leafs.length; j++) {

                // currentLeafRect.x = leafs[j].x;
                // currentLeafRect.y = leafs[j].y;
                // currentLeafRect.width = leafs[j].nominalBounds.width;
                // currentLeafRect.height = leafs[j].nominalBounds.height;

                currentLeafRect.x = leafs[j].x;
                currentLeafRect.width = leafs[j].nominalBounds.width;
                currentLeafRect.height = leafs[j].nominalBounds.height;

                for (let k = 0; k <= 1; k += .1) {


                    if (leafs[j] === undefined) {
                        console.log(j);
                    }

                    currentLeafRect.y = leafs[j].y + lerp(0, speed, k);

                    if (currentLeafRect.intersects(currentBallRect) && leafs[j].paused && currentBall.paused && leafs[j].setColor !== currentBall.fill.children[0].graphics._fill.style) {


                        // leafs[j].fill.children[0].graphics._fill.style = currentBall.children[0].graphics._fill.style;
                        leafs[j].fill.children[0].graphics._fill.style = currentBall.fill.children[0].graphics._fill.style;
                        leafs[j].fill.opacity = 1;

                        leafs[j].setColor = currentBall.fill.children[0].graphics._fill.style;
                        leafs[j].opacity = 1;


                        let globalBallPos = currentBall.localToGlobal(0, 0);
                        let localBallPos = leafs[j].globalToLocal(globalBallPos.x, globalBallPos.y);
                        leafs[j].fill.x = localBallPos.x;
                        leafs[j].fill.y = localBallPos.y;


                        //TODO: set fill color


                        //TODO: ADD SPLASH EFFECT ON COLLISION
                        currentBall.gotoAndPlay(0);


                        // currentBall.x = RandomInt(canvas.width);
                        // currentBall.y = -RandomInt(100);
                        //
                        // let color = Math.floor(Math.random()*16777215).toString(16);
                        // currentBall.fill.children[0].graphics._fill.style = PullFromColorPool();
                        // currentBall.children[0].graphics._fill.style = "#"+color;
                        leafs[j].gotoAndPlay(0);

                        j = leafs.length;
                        k = 1;


                    }

                }

                // if(currentLeafRect.intersects(currentBallRect) && leafs[j].paused){
                //
                //
                //     leafs[j].fill.children[0].graphics._fill.style = currentBall.children[0].graphics._fill.style;
                //     leafs[j].fill.opacity = 1;
                //
                //     leafs[j].setColor = currentBall.children[0].graphics._fill.style;
                //     leafs[j].opacity = 1;
                //
                //     //TODO: set fill color
                //
                //
                //     //TODO: ADD SPLASH EFFECT ON COLLISION
                //
                //     currentBall.x = RandomInt(canvas.width);
                //     currentBall.y = -RandomInt(100);
                //
                //     let color = Math.floor(Math.random()*16777215).toString(16);
                //     currentBall.children[0].graphics._fill.style = "#"+color;
                //     leafs[j].gotoAndPlay(0);
                //
                //     j = leafs.length;
                //
                //
                // }

            }

            if (currentBall.paused) {
                currentBall.y += speed;
                currentBall.y += speed;
            }


            if (currentBall.y > page.nominalBounds.height) {
                currentBall.x = RandomInt(canvas.width);
                currentBall.y = -RandomInt(100);

                let color = Math.floor(Math.random() * 16777215).toString(16);
                // currentBall.children[0].graphics._fill.style = "#"+color;
                currentBall.fill.children[0].graphics._fill.style = PullFromColorPool();

            }

        }

        let gamepads = navigator.getGamepads();

        for (let i = 0; i < gamepads.length; i++) {

            let currentGamepad = gamepads[i];

            if (currentGamepad !== null) {

                let stickY = -currentGamepad.axes[1];

                if (stickY * stickY > .05) {
                    window.scrollBy(0, -stickY * 5);
                }

                for (let j = 0; j < currentGamepad.buttons.length; j++) {

                    if (currentGamepad.buttons[j].pressed) {
                        console.log(j);
                    }

                }


                if (currentGamepad.buttons[0].pressed) {
                    location.reload();
                }

                if (currentGamepad.buttons[9].pressed) {
                    window.location.href = "http://localhost:8000/ART_322C_Project_2/";
                }

                if (currentGamepad.buttons[10].pressed) {
                    window.location.href = "http://localhost:8000/ART_322C_project_3/dist/";
                }

            }
        }

        requestAnimationFrame(update);
    }

    onScroll(null);
    onResize(null);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(update);

}

// function GetPageHeight() {
//     return Math.max(document.body.scrollHeight, document.body.offsetHeight,
//         document.documentElement.clientHeight, document.documentElement.scrollHeight,
//         document.documentElement.offsetHeight);
// }
//
// function WindowScrollNormalPosition() {
//     return window.scrollY / (GetPageHeight() - window.innerHeight);
// }
//
// function ease(x){
//     x = clamp(x,0,1);
//     return x*x*(3-(2*x));
// }
//
// function lerp(start, end, amt) {
//     return (1 - amt) * start + amt * end
// }
//
// function NormalizeNumInRange(n, min, max){
//
//     //NOTE: (x-min)/(max-min)
//     let result = (n - min) / (max - min);
//
//     return result
// }
//
// function clamp(num, min, max) {
//     return Math.min(Math.max(num, min), max);
// }
//
// function AddOnFrameEvent(object, frame, func){
//     object.timeline.addTween(createjs.Tween.get(object).wait(frame).call(func).wait(1));
// }
//
// function RectNormalPositionOnScreen(rectY, rectHeight, screenHeight) {
//     let start = screenHeight;
//     let end = -rectHeight;
//
//     //NOTE: (x-min)/(max-min)
//     let result = (rectY - start) / (end - start);
//
//     return result;
//
// }
//
// function rectContainsPoint(rX, rY, rW, rH, pX, pY){
//
//     return (pX >= rX && pX <= rX + rW) &&
//            (pY >= rY && pY <= rY + rH);
//
// }
//
// function page_init(lib) {
//     let _this = stage.children[0];
//     let page = _this.page;
//     let blinds = page.blinds;
//     let fallOnBed = page.fall_on_bed;
//     let sinkIntoBed = page.sinking_into_bed;
//     let fallThroughSky = page.fall_through_sky;
//     let fallThroughSkyClouds = [fallThroughSky.cloud_front, fallThroughSky.cloud_0, fallThroughSky.cloud_1, fallThroughSky.cloud_2];
//     let fallThroughSkyCloudPositions = [fallThroughSkyClouds[0].y, fallThroughSkyClouds[1].y, fallThroughSkyClouds[2].y, fallThroughSkyClouds[3].y];
//     let cloudTransitionFront = fallThroughSky.cloud_transition_front;
//     let cloudTransitionFrontPos = cloudTransitionFront.y;
//
//     let cloudTransitionBack = fallThroughSky.cloud_transition_back;
//     let cloudTransitionBackPos = cloudTransitionBack.y;
//
//     cloudTransitionFront.bird_fly_in.gotoAndStop(cloudTransitionFront.bird_fly_in.totalFrames - 1);
//     cloudTransitionFront.bird_fly_in.loop = 0;
//     cloudTransitionFront.bird_fly_in.alpha = 0;
//
//
//     cloudTransitionFront.bird_fly_away.gotoAndStop(0);
//     cloudTransitionFront.bird_fly_away.loop = 0;
//
//     fallThroughSky.cloud_2.bird_fly_away.loop = 0;
//     fallThroughSky.cloud_2.bird_fly_away.alpha = 0;
//     fallThroughSky.cloud_2.bird_fly_away.gotoAndStop(0);
//     fallThroughSky.cloud_2.bird_fly_in.loop = 0;
//     fallThroughSky.cloud_2.bird_fly_in.alpha = 0;
//     fallThroughSky.cloud_2.bird_fly_in.gotoAndStop(0);
//
//     let birdFar = false;
//     let birdFlying = false;
//
//     console.log("create js");
//     console.log(createjs);
//
//
//     let closeBirdFlyIn = cloudTransitionFront.bird_fly_in;
//     let closeBirdFlyAway = cloudTransitionFront.bird_fly_away;
//
//     let farBirdFlyIn = fallThroughSky.cloud_2.bird_fly_in;
//     let farBirdFlyAway = fallThroughSky.cloud_2.bird_fly_away;
//
//     let fallToLand = page.fallToLand;
//     fallToLand.point.alpha = 0;
//     fallToLand.point_land.alpha = 0;
//     fallToLand.cloud_burst.gotoAndStop(0);
//     console.log(fallToLand);
//
//     AddOnFrameEvent(closeBirdFlyAway, closeBirdFlyAway.totalFrames - 1, function(){
//         setTimeout(function (){
//             farBirdFlyIn.alpha = 1;
//             farBirdFlyIn.gotoAndPlay(1);
//         },200);
//     });
//
//     AddOnFrameEvent(farBirdFlyIn, farBirdFlyIn.totalFrames - 1, function(){
//         birdFlying = false;
//         birdFar = true;
//     });
//
//     AddOnFrameEvent(farBirdFlyAway, farBirdFlyAway.totalFrames - 1, function(){
//         // birdFlying = true;
//         setTimeout(function (){
//             closeBirdFlyIn.alpha = 1;
//             closeBirdFlyIn.gotoAndPlay(1);
//         },200);
//     });
//
//     AddOnFrameEvent(closeBirdFlyIn, closeBirdFlyIn.totalFrames - 1, function(){
//         birdFlying = false;
//         birdFar = false;
//     });
//
//
//     let fallTowardsCamera = page.fall_towards_camera;
//     let fallTowardsCameraCharacterY = fallTowardsCamera.character.y;
//
//
//     let endLand = page.end_land;
//     // console.log(endLand);
//     // endLand.room.alpha = 0;
//
//
//
//     document.head.insertAdjacentHTML("beforeend", `<style>.container{ height: ` + page.nominalBounds.height + `px !important;}</style>`)
//
//
//     function calcScrollEnd() {
//         return scrollStart - (page.nominalBounds.height) + (canvas.clientHeight) - (2 * padding);
//     }
//
//     let padding = 0;
//
//     let scrollStart = page.y + padding;
//     let scrollEnd = calcScrollEnd();
//
//
//     function onResize(e) {
//
//         stageRatio = lib.properties.height / lib.properties.width;
//
//         stage.scaleY = canvas.clientWidth / canvas.clientHeight * window.devicePixelRatio * stageRatio;
//
//         scrollEnd = calcScrollEnd();
//         onScroll(null);
//
//         stage.tickOnUpdate = false;
//         stage.update();
//         stage.tickOnUpdate = true;
//     }
//
//     function onScroll(e) {
//
//         let currentScroll = WindowScrollNormalPosition();
//
//         let blindsScroll = RectNormalPositionOnScreen(blinds.localToGlobal(0, 0).y + 350, blinds.nominalBounds.height - 750, canvas.clientHeight);
//         let blindsCurrentFrame = clamp(blindsScroll * (blinds.totalFrames - 1), 0, blinds.totalFrames - 1);
//         blinds.gotoAndStop(blindsCurrentFrame);
//
//
//         let fallOnBedScroll = RectNormalPositionOnScreen(fallOnBed.localToGlobal(0, 0).y - 100, fallOnBed.nominalBounds.height - 100, canvas.clientHeight);
//         let fallOnBedCurrentFrame = clamp(fallOnBedScroll * (fallOnBed.totalFrames - 1), 0, fallOnBed.totalFrames - 1);
//         fallOnBed.gotoAndStop(fallOnBedCurrentFrame);
//
//         let sinkIntoBedScroll = RectNormalPositionOnScreen(sinkIntoBed.localToGlobal(0, 0).y + 150, sinkIntoBed.nominalBounds.height - 250, canvas.clientHeight);
//         let sinkIntoBedCurrentFrame = clamp(sinkIntoBedScroll * sinkIntoBed.totalFrames - 1, 0, sinkIntoBed.totalFrames - 1);
//         sinkIntoBed.gotoAndStop(sinkIntoBedCurrentFrame);
//
//         page.y = lerp(scrollStart, scrollEnd, currentScroll);
//
//
//         let fallThroughSkyScroll = RectNormalPositionOnScreen(page.y + fallThroughSky.y, fallThroughSky.nominalBounds.height, canvas.clientHeight);
//
//
//         if (fallThroughSkyScroll >= 0 && fallThroughSkyScroll <= 1) {
//             fallThroughSky.character.y = Math.abs(page.y) - fallThroughSky.y + (canvas.clientHeight / 2) + (fallThroughSky.character.nominalBounds.height / 2);
//             fallThroughSky.scream_text.y = fallThroughSky.character.y - 50;
//
//
//             let fallThroughSkyCurrentFrame = Math.abs(clamp(fallThroughSkyScroll * fallThroughSky.character.totalFrames - 1, 0, fallThroughSky.character.totalFrames - 1));
//             fallThroughSky.character.gotoAndStop(fallThroughSkyCurrentFrame);
//
//             let screamTextScroll = RectNormalPositionOnScreen(page.y + fallThroughSky.y + 500, fallThroughSky.nominalBounds.height, canvas.clientHeight);
//             let screamTextCurrentFrame = Math.abs(clamp(screamTextScroll * fallThroughSky.scream_text.totalFrames - 1, 0, fallThroughSky.scream_text.totalFrames - 1));
//             fallThroughSky.scream_text.gotoAndStop(screamTextCurrentFrame);
//
//             fallThroughSkyClouds[0].y = fallThroughSkyCloudPositions[0] + (-600 * fallThroughSkyScroll);
//             fallThroughSkyClouds[1].y = fallThroughSkyCloudPositions[1] + (-200 * fallThroughSkyScroll);
//             fallThroughSkyClouds[2].y = fallThroughSkyCloudPositions[2] + (0 * fallThroughSkyScroll);
//             fallThroughSkyClouds[3].y = fallThroughSkyCloudPositions[3] + (100 * fallThroughSkyScroll);
//
//             let cloudTransitionScroll = RectNormalPositionOnScreen(page.y + fallThroughSky.y + 1500, fallThroughSky.nominalBounds.height, canvas.clientHeight);
//             cloudTransitionFront.y = cloudTransitionFrontPos + (-400 * cloudTransitionScroll);
//             cloudTransitionBack.y = cloudTransitionBackPos + (100 * cloudTransitionScroll);
//
//
//             if (!birdFar && !birdFlying &&
//                 fallThroughSkyScroll > .5) {
//
//                 cloudTransitionFront.bird_fly_away.gotoAndPlay(1);
//                 cloudTransitionFront.bird_fly_away.alpha = 1;
//                 cloudTransitionFront.bird_fly_in.alpha = 0;
//
//                 birdFlying = true;
//             } else if (birdFar && !birdFlying &&
//                 fallThroughSkyScroll < .35) {
//
//                 fallThroughSky.cloud_2.bird_fly_in.alpha = 0;
//
//                 fallThroughSky.cloud_2.bird_fly_away.gotoAndPlay(1);
//                 fallThroughSky.cloud_2.bird_fly_away.alpha = 1;
//                 birdFlying = true;
//             }
//         }
//
//
//         let fallTowardsCameraScroll = RectNormalPositionOnScreen(fallTowardsCamera.localToGlobal(0, 0).y + 250, fallTowardsCamera.nominalBounds.height - 750, canvas.clientHeight);
//         let fallTowardsCameraCurrentFrame = Math.abs(clamp(fallTowardsCameraScroll * fallTowardsCamera.totalFrames - 1, 0, fallTowardsCamera.totalFrames - 1));
//         fallTowardsCamera.gotoAndStop(fallTowardsCameraCurrentFrame);
//
//
//         let fallToLandScroll = RectNormalPositionOnScreen(page.y + fallToLand.y, fallToLand.nominalBounds.height, canvas.clientHeight);
//         if(fallToLandScroll >= 0 && fallToLandScroll <= 1){
//             let normOffset = fallToLand.nominalBounds.height/1.5;
//             let characterNormPos = RectNormalPositionOnScreen(page.y + fallToLand.y, fallToLand.nominalBounds.height - canvas.clientHeight, canvas.clientHeight);
//             console.log("char normal pos: " + characterNormPos);
//             characterNormPos = Math.pow(characterNormPos, 5)*(3-(2*characterNormPos));
//             console.log("char normal pos: " + characterNormPos);
//             let canvasCenter = Math.abs(page.y) - fallToLand.y + (canvas.clientHeight / 2) + (fallToLand.character.nominalBounds.height / 2);
//             fallToLand.character.y = lerp(canvasCenter, fallToLand.point_land.y, characterNormPos);
//
//             console.log("nom bounds");
//             console.log(fallToLand.character.nominalBounds);
//
//             console.log("char loc: ");
//             console.log(fallToLand.character.x + ", "+fallToLand.character.y);
//
//             console.log("point");
//             console.log(fallToLand.point.x + " " + fallToLand.point.y);
//
//             console.log("point nom bounds");
//             console.log(fallToLand.point.nominalBounds);
//
//             //NOTE: (x-min)/(max-min)
//             let cloudDistance = 1000;
//             let fallToLandCloudLerp = (fallToLand.character.y - fallToLand.point.y) / (fallToLand.point.y+cloudDistance - fallToLand.point.y);
//             fallToLandCloudLerp = clamp(fallToLandCloudLerp, 0, 1);
//             console.log("fall to land lerp: "+fallToLandCloudLerp);
//             fallToLand.cloud_burst.gotoAndStop(fallToLandCloudLerp*(fallToLand.cloud_burst.totalFrames-1));
//         }
//     }
//
//     onResize(null);
//     onScroll(null);
//     window.addEventListener("resize", onResize);
//     window.addEventListener("scroll", onScroll);
//
//     console.log(lib);
//     console.log(stage);
//
//
//     console.log(_this);
//     console.log(page);
//
// }
