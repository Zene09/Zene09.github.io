export class InputHandler {
    constructor(game){
        this.game = game
        this.keys = []
        window.addEventListener('keydown', (e) => {
            // when the key is down, set the direction according to our
            // player.setDirection method
            if (( e.key === 'w' ||
                  e.key === 'a' ||
                  e.key === 's' ||
                  e.key === 'd' 
                ) && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key)
                } else if (e.key === 'Enter') this.game.debug = !this.game.debug
                console.log(e.key, this.keys)
        })
        window.addEventListener('keyup', (e) => {
            // this one will look a lil different than keydown
            // we need to make sure it only applies to the keys we listed in unSetDirection
            if  ( e.key === 'w' ||
                  e.key === 'a' ||
                  e.key === 's' ||
                  e.key === 'd' ) {
                this.keys.splice(this.keys.indexOf(e.key), 1)
                }
                
        })
    }
}
// CSS Score Keeping, using ';'
export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Chewy';
            }
        draw(context){
            context.font = this.fontSize + 'px ' + this.fontFamily;
            context.textAlign = 'center';
            context.fillStyle = this.game.fontColor;
            // score keeper
            context.fillText(`Score: ${this.game.score}`, 750, 100)
            // visual timer
            context.font = this.fontSize * 0.9 + 'px ' + this.fontFamily
            context.fillText(`Time: ${this.game.time}`, 750, 50)
            // game over
            if (this.game.gameOver){
                context.textAlign = 'center'
                context.font = this.fontSize * 2 + 'px ' + this.fontFamily
                // game lose - basically says if you have a score less than -3 when the timer ends you lose
                if (this.game.score <= -3) {
                context.fillText('To the vet we go!', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                } else {
                // stretch - attach Lucyfur.loss animation
                // win - if score is greater than or equal to 15 when the timer ends, you win
                (this.game.score >= 15 || this.game.maxTime > 30000)
                context.fillText('Guess we\'ll reschedule for another day...', this.game.width * 0.5, this.game.height * 0.5 + 20)
            }
        }
    }
}