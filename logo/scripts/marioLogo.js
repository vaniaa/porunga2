/**
 * Created by Sh0rti on 6/13/2014.
 */
window.onload = function() {

    var stage = new Kinetic.Stage({
        container: 'container',
        width: 300,
        height: 90
    });

    var layer = new Kinetic.Layer({
    });
    
    var marioImg = new Image();
    marioImg.src = "./images/super_mario.gif";

    marioImg.onload = function () {
        var superMario = new Kinetic.Sprite({
            x: 0,
            y: 60,
            duration: 3,
            image: marioImg,
            animation: 'idle',
            animations: {
                idle: [
                    24, 103, 15, 27
                ],
                move: [
                    47, 104, 16, 26,
                    70, 103, 16, 27,
                    93, 103, 15, 27,
                    116, 104, 16, 26,
                    142, 103, 16, 27,
                    165, 103, 15, 27
                ]
            },
            frameRate: 6,
            frameIndex: 0
        });

        var logo = new Kinetic.Text({
            x: -260,
            y: 25,
            stroke: 'black',
            fill: '3333FF',
            fontFamily: 'Audiowide',
            fontSize: 36,
            text: "Draw Nakov"
        });

        layer.add(logo);
        layer.add(superMario);
        stage.add(layer);
        superMario.start();
        var upDown = 0;
        var moveRight = new Kinetic.Animation(function(frame) {
            if(logo.attrs.x < 25){
                logo.setX(logo.attrs.x + 1);
                if(upDown == 0) {
                    logo.setY(logo.attrs.y + 3)
                    upDown = 1;
                }
                else{
                    logo.setY(logo.attrs.y - 3)
                    upDown = 0;
                }
            }
            if(superMario.attrs.x >= 350){
                moveRight.stop();
            }
            superMario.setX(superMario.attrs.x + 1);
            superMario.attrs.animation = 'move';

        }, 100);

        moveRight.start();


    }
}