var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('player', 'player_placeholder.png');
        this.game.load.image('floor', 'floor_placeholder.png');
        this.game.load.image('cloud', 'cloud.png');
    };
    ;
    SimpleGame.prototype.create = function () {
        this.game.add.group(this.cloudGroup);
        this.floor = this.game.add.sprite(0, 400, 'floor');
        this.player = this.game.add.sprite(200, 450, 'player');
        this.game.add.sprite(100, 50, 'cloud');
        this.game.physics.arcade.enable(this.player);
    };
    SimpleGame.prototype.update = function () {
        //if (this.keyBoard.isDown(Phaser.KeyCode.SPACEBAR))
        this.floor.x -= 1;
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=app.js.map