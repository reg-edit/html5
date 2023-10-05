class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load images or sounds
        this.load.image("box", "images/box.png")

       
    }
    create()
    {
        //define objects
        //this.box=this.height.image(10)
        this.box=this.add.image(0,game.config.height/2, "box")

    }
    update(){
        //constant running loop
    }
}
