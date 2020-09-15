import { Answer } from './answer.model';

export class Question {

    statement: string;
    type: string;
    answers: Answer [];
    images: any;
    selectedAnswer: string;
    feedback : string;
    correctAnswer : string;

    constructor (statement?: string, answers?: Answer [], type?: string, images?: any, correctAnswer?:string, feedback?:string) {
        this.statement = statement;
        if (answers) {
            this.answers = answers;
        } else {
            this.answers = [];
        }
        
        this.type = type;
        this.images = images;
        this.selectedAnswer = null;
        this.correctAnswer = correctAnswer;
        this.feedback = feedback;
    }

}