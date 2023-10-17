class SceneMain extends Phaser.Scene {


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

        /* Functions */
        function createBelts(x,y,quantity,scene) {
            let firstBeltX = x
            let currentBeltX = firstBeltX+(256*beltScale)
    
            scene.add.sprite(firstBeltX,y,"belt1").play("l2rAnim").setScale(beltScale)
            for(let i = 0; i < quantity-1; i++){
                scene.add.sprite(currentBeltX,y, "belt1").play("l2rAnim").setScale(beltScale)
                currentBeltX = currentBeltX+(256*beltScale)
            }
        }

        /* Variables */
        let beltScale = .4
        let machScale = .25
        let boxScale = .2
        let beltSpeed = 12


        /* Animations */
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


        /* Asset placement */
        //Background
        this.background = this.add.image(0,-440, "background").setScale(.6,.55).setOrigin(0,0)


        //Belt Placement
        createBelts(0, 150,6,this)
        //this.add.sprite(1015,40, "tBelt1").play("b2rAnim").setScale(beltScale) /*corner belt*/

        //Boxes
        this.box = this.add.image(game.config.width/4,game.config.height/2, "box").setScale(boxScale)
    

        //Machine Placement
        this.machine = this.add.image(600,150, "machine").setScale(machScale)

        /* Controllers */
        // this.input.keyboard.on('keydown-D', event =>
        // {
        //      box.x += 4;
        // });

        // this.input.keyboard.on('keydown-W', event =>
        // {
        //      beltSpeed += 4;
        //      console.log(beltSpeed)
        // });


        //Text
        this.textTag = this.add.text(10,10, "Automate the SHIP out of it!",{fontFamily:'Sora',fontSize:40,fontStyle:800}).setStroke("black",3)
        

        //Test Area

        this.physics.world.enable([this.box])
        this.physics.world.enable([this.machine])

        this.box.body.setVelocity(20,0)
        
        this.touch = false
        this.physics.add.overlap(this.box,this.machine, (box, machine) => 
            { this.touch = true
            }
        )
   
    }
    update() //constant running loop
    {
        if(this.touch == true) {
            console.log("touched")
        }
        
    }
}
