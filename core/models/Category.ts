import { Model } from "./Model";

export class CategoryModel extends Model {
    constructor() {
        super({
            attributes: {
                company_id: {
                    type: "integer",
                    required: true
                },
                name: {
                    type: "string",
                    required: true
                },
                title: {
                    type: "string",
                    required: true
                },
                subtitle: {
                    type: "string",
                    required: true
                },
                description: {
                    type: "string",
                    required: true
                },
                image: {
                    type: "string"
                }
            },
            tableName: 'category'
        });
    }
}

