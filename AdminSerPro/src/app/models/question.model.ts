import { Answer } from './answer.model';

export class Question {

    icfesModule: number;
    statement: string;
    questionType: string;
    answers: Answer [];
    feedback : string;

    constructor (statement?: string, answers?: Answer [], type?: string, correctAnswer?:string, feedback?:string) {
        this.statement = statement;
        if (answers) {
            this.answers = answers;
        } else {
            this.answers = [];
        }
        
        this.questionType = type;        
        this.feedback = feedback;
    }

}