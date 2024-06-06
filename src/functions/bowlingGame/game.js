export class Game {
    constructor(){
        this.frames = 0;
        this.allScore = [];
        this.subScores = [];
        this.spare = false;
        this.firstStrike = false;
        this.secondStrike = false;
    }

    roll(pinesDown) {
        if((!isNaN(pinesDown) && pinesDown <= 10 && this.frames < 10)){
            if(!this.subScores[this.frames]){
                this.subScores[this.frames] = [];
            }
            if(!(this.subScores[this.frames][0] && this.subScores[this.frames][0] + pinesDown > 10) || this.frames === 9) {
                this.subScores[this.frames].push(pinesDown);

                if(this.secondStrike) {
                    this.allScore[this.frames-2] = (pinesDown + this.subScores[this.frames-1][0] + this.subScores[this.frames-2][0]);
                    this.secondStrike = false;
                }
                if(this.frames === 9) {

                    if(this.firstStrike) {
                        this.allScore[this.frames-1] += (pinesDown +this.subScores[this.frames][0])
                    }

                    if(this.subScores[this.frames].length === 3 || (this.subScores[this.frames].length === 2 && this.subScores[this.frames][0] + this.subScores[this.frames][1] < 10)) {
                        this.allScore[this.frames] = this.subScores[this.frames].reduce((total, num) => total +num)
                        this.frames++;
                        console.log("Game is finished")
                    }
                }
                else if(this.subScores[this.frames].length > 1) {
                    const frameScore = this.subScores[this.frames].reduce((total, num) => total +num);

                    if(frameScore <= 10) {
                        this.allScore[this.frames] = frameScore;

                        if(this.firstStrike) {
                            this.allScore[this.frames-1] += frameScore;
                            this.firstStrike = false;
                        }

                        this.frames++;

                        if(frameScore === 10) {
                            this.spare = true;
                        }
                    }
                }
                else if(this.spare) {
                    this.allScore[this.frames-1] +=pinesDown;
                    this.spare = false;
                }
                else if(pinesDown === 10){
                    this.allScore[this.frames] = this.subScores[this.frames][0]
                    this.frames++;
                    if(!this.firstStrike){
                        this.firstStrike = true;
                    }
                    else {
                        this.secondStrike = true;
                    }
                }
            }
            else {
                console.log("Wrong input")
            }
        }
        else if (this.frames === 10) {
            console.log("Game is finished")
        }
        else {
            console.log("Wrong input")
        }
    }

    score() {
        return this.allScore.reduce((total, num) => total + num);
    }
}