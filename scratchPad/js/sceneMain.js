class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load images or sounds
        this.load.image("face", "images/face.png")
        this.load.spritesheet("boy","images/boy.png", { frameWidth: 120, frameHeight:200})
    }
    create()
    {
        //define objects
        this.char=this.add.sprite(0,game.config.height/2, "boy")

        var frameNames= this.anims.generateFrameNumbers('boy')

        this.anims.create({
            key:'walk',
            frames: frameNames,
            frameRate:8,
            repeat: -1
        })
        
        this.char.play('walk')

        this.tweens.add({targets: this.char,duration: 5000, x:game.config.width})
        
        
    }
    update(){
        //constant running loop
    }
}
