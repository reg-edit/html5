class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() //load images or sounds
    {
        
        this.load.image("box", "images/box.png")
        this.load.image("background", "images/background.png")
        this.load.image("machine", "images/machine.png")

        this.load.image("belt1", "images/l2r1.png")
        this.load.image("belt2", "images/l2r2.png")
        this.load.image("belt3", "images/l2r3.png")
        this.load.image("belt4", "images/l2r4.png")

        this.load.image("tBelt1", "images/b2r1.png")
        this.load.image("tBelt2", "images/b2r2.png")
        this.load.image("tBelt3", "images/b2r3.png")
        this.load.image("tBelt4", "images/b2r4.png")

       
    }
    create() //define objects
    {

        //Scale
        let beltScale = .3
        let machScale = .3
        let boxScale = .2
        let beltSpeed = 12


        //Belt Animations
        this.anims.create({  //standard belt
            key:"l2rAnim",
            frames: [
                {key: "belt1"},
                {key: "belt2"},
                {key: "belt3"},
                {key: "belt4"},
            ],
            frameRate: beltSpeed,
            repeat: -1
        })

        this.anims.create({  //bottom to right belt
            key:"b2rAnim",
            frames: [
                {key: "tBelt1"},
                {key: "tBelt2"},
                {key: "tBelt3"},
                {key: "tBelt4"},
            ],
            frameRate: beltSpeed,
            repeat: -1
        })

        //Background

        this.background = this.add.image(550,20, "background").setScale(1)


        //Belt Placement
        let firstBeltx = 500
        let currentBeltx = firstBeltx+(256*beltScale)


        this.add.sprite(firstBeltx,150, "belt1").play("l2rAnim").setScale(beltScale)

        for(let i = 0; i < 3; i++){
            this.add.sprite(currentBeltx,150, "belt1").play("l2rAnim").setScale(beltScale)
            currentBeltx = currentBeltx+(256*beltScale)
        }

        //Machine Placement
        this.machine = this.add.image(currentBeltx,150, "machine").setScale(machScale)
        
 

        //this.add.sprite(1100,150, "belt1").play("l2rAnim").setScale(beltScale)

        //this.add.sprite(1015,40, "tBelt1").play("b2rAnim").setScale(beltScale)


        //Boxes

        let box = this.add.image(game.config.width/4,game.config.height/2, "box").setScale(boxScale)

        





        //Controllers

        this.input.keyboard.on('keydown-D', event =>
        {
             box.x += 4;
        });

        this.input.keyboard.on('keydown-W', event =>
        {
             beltSpeed += 4;
             console.log(beltSpeed)
        });

        
    }
    update() //constant running loop
    {
        
        
        
    }
}
