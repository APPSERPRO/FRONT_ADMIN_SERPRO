export class IcfesModule {

    _id: string;
    knowledgeArea: string;
    type : string;
    description: string;
    evaluate : string;

    constructor (_id?: string ,knowledgeArea?:string, type?: string, description?: string, evaluate?:string) {
        this._id = _id;
        this.knowledgeArea = knowledgeArea;
        this.type = type;
        this.description = description;
        this.evaluate = evaluate;
    }
}