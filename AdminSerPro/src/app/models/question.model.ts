import { Answer } from './answer.model';

export class Question {

    statement: string;
    type: string;
    answers: Answer [];
    feedback : string;
    correctAnswer : string;

    constructor (statement?: string, answers?: Answer [], type?: string, correctAnswer?:string, feedback?:string) {
        this.statement = statement;
        if (answers) {
            this.answers = answers;
        } else {
            this.answers = [];
        }

        this.type = type;
        this.correctAnswer = correctAnswer;
        this.feedback = feedback;
    }
}
