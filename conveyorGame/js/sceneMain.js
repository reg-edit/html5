class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() //load images or sounds
    {

        this.load.image("box", "images/box.png")
        this.load.image("background", "images/background.png")
        this.load.image("belt1", "images/l2r1.png")

       
    }
    create() //define objects
    {
        //background
        this.background = this.add.image(550,20, "background").setScale(.4)

        //Belts
        this.belt = this.add.image(game.config.width/4,(game.config.height/2)+20, "belt1").setScale(.35)
        this.belt = this.add.image((game.config.width/4)+80,(game.config.height/2)+20, "belt1").setScale(.35)

        //Boxes
        box = this.add.image(game.config.width/4,game.config.height/2, "box").setScale(.2)

        //box.setCollideWorldBounds(true)

    }
    update() //constant running loop
    {
        
        if(cursors.right.isDown) {
            box.setVelocityX(-100)
        }
    }
}
