var game;
window.onload=function()
{
    var config = {
        type: Phaser.AUTO,
        width: 1088,
        height: 200,
        parent: 'phaser-game',
        scene:[SceneMain]
    };
    game = new Phaser.Game(config);
}