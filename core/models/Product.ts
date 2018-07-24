import { Model } from "./Model";

export class ProductModel extends Model {
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
                image: {
                    type: "string"
                },
                category: {
                    type: "integer"
                },
                description: {
                    type: "string",
                    required: true
                },
                available: {
                    type: "boolean",
                    required: true
                }
            },
            tableName: 'product'
        });
    }
}