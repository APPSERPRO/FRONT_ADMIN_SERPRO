export class Question {

    statement: string;
    type: string;
    answers: string [];
    images: any;
    selectedAnswer: string;
    feedback : string;
    correctAnswer : string;

    constructor (statement: string, answers: string [], type: string, images: any, correctAnswer:string, feedback:string){
        this.statement = statement;
        this.answers = answers;
        this.type = type;
        this.images = images;
        this.selectedAnswer = null;
        this.correctAnswer = correctAnswer;
        this.feedback = feedback;
    }

    checkAnswer(): boolean{
    return this.selectedAnswer === this.correctAnswer;
    }


}