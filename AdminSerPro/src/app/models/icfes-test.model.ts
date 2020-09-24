import { Answer } from './answer.model';

export class IcfesTest {

    _id: string;
    questions: string[];
    title: string;
    description: string;
    moduleId: string;

    constructor(_id?: string, questions?: string[], title?: string, description?: string, moduleId?: string){
        this._id = _id;
        if (questions) {
            this.questions = questions;
        } else {
            this.questions = [];
        }
        this.title = title;
        this.description = description;
        this.moduleId = moduleId;
    }

}
