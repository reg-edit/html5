var game;
window.onload=function()
{
    var config = {
        type: Phaser.AUTO,
        width: 1632,
        height: 300,
        parent: 'phaser-game',
        scene:[SceneMain],
        zoom:1
    
    };
    game = new Phaser.Game(config);
}