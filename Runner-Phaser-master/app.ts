class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create , update: this.update});
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('player', 'player_placeholder.png');
        this.game.load.image('floor', 'floor_placeholder.png');
        this.game.load.image('cloud', 'cloud.png');
    }

    player:Phaser.Sprite;
    floor: Phaser.Sprite;;
    keyBoard: Phaser.Keyboard;
    cloudGroup: Phaser.Group;
    create() {
        this.game.add.group(this.cloudGroup);
        this.floor = this.game.add.sprite(0, 400, 'floor');
        this.player = this.game.add.sprite(200, 450, 'player');
        this.game.add.sprite(100, 50, 'cloud');
        this.game.physics.arcade.enable(this.player);
    }

    update() {
        //if (this.keyBoard.isDown(Phaser.KeyCode.SPACEBAR))
        this.floor.x -= 1; 
    }

}

window.onload = () => {

    var game = new SimpleGame();

};