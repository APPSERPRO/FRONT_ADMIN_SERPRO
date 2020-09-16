export class Answer {

    statement: string;
    type: string;
    grade : number;

    constructor (grade?: number, statement?: string, type?: string) {
        this.grade = 0;
        this.statement = statement;
        this.type = type;
    }

}