var robber, robberimg;
var police, policeimg;
var trafficGroup;
var track1;
var track2;
var traffic1, traffic2, traffic3, traffic4, traffic5, traffic6;
function preload() {
    traffic1 = loadImage("images/car1.png");
    traffic3 = loadImage("images/car3.png");
    traffic4 = loadImage("images/car4.png");
    traffic5 = loadImage("images/car5.png");
    traffic6 = loadImage("images/car6.png");
    robberimg = loadImage("images/robber.png");
    policeimg = loadImage("images/police.png");

    trafficGroup = new Group();

}

function setup() {
    createCanvas(1500, 1500);

    robber = createSprite(200, 200, 50, 50);
    robber.addImage("car1y", robberimg);
    robber.scale = 0.5
    robber.velocityY = -5;

    police = createSprite(300, 200, 50, 50);
    police.addImage("polssdfd", policeimg);
    police.scale = 0.5;
}

function draw() {
    background("white");

    spawnObstacles();
    if (keyDown("right")) {
        robber.x = robber.x + 5
    }

    if (keyDown("left")) {
        robber.x = robber.x - 5
    }
    drawSprites();
}

function spawnObstacles() {

    if (frameCount % 60 === 0) {
        var traffic = createSprite(0, 500, 10, 40);
        traffic.x = Math.round(random(100, 1400));
        var rand = Math.round(random(1, 6));
        switch (rand) {
            case 1: traffic.addImage(traffic1);
                break;
            case 3: traffic.addImage(traffic3);
                break;
            case 4: traffic.addImage(traffic4);
                break;
            case 5: traffic.addImage(traffic5);
                break;
            case 6: traffic.addImage(traffic6);
                break;
            default: break;
        }

        //assign scale and lifetime to the obstacle           
        traffic.scale = 0.5;
        traffic.lifetime = 300;
        //add each obstacle to the group
        trafficGroup.add(traffic);
    }

}