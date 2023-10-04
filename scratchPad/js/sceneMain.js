class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load images or sounds
        this.load.image("face", "images/face.png")
    }
    create()
    {
        //define objects
        this.face = this.add.image(100, 200, "face")
    }
    update(){
        //constant running loop
    }
}
