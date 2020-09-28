import {Question} from  './question.model';
export class IcfesTest {

    title: string;
    description: string;
    progress: number;
    module: number;
    questions: String[];

    constructor () {
      this.questions = new Array <String>();
    }


}
