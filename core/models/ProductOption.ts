import { Model } from "./Model";

export class ProductOptionModel extends Model {
    constructor() {
        super({
            attributes: {
                product_id: {
                    type: "integer",
                    required: true
                },
                name: {
                    type: "string",
                    required: true
                },
                stock: {
                    type: "integer",
                    required: true
                },
                price: {
                    type: "integer",
                    required: true
                },
                rrp: {
                    type: "integer"
                },
                description: {
                    type: "string"
                },
                available: {
                    type: "boolean",
                    required: true
                }
            },
            tableName: 'productOption'
        });
    }
}