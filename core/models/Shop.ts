import { Model } from "./Model";

export class ShopModel extends Model {
    constructor() {
        super({
            attributes: {
                company_id: {
                    type: "integer",
                    required: true
                },
                name: {
                    type: "string",
                    unique: true,
                    required: true
                },
                addressLine1: {
                    type: "string",
                    unique: true,
                    required: true
                },
                addressLine2: {
                    type: "string"
                },
                city: {
                    type: "string",
                    required: true
                },
                county: {
                    type: "string",
                    required: true
                },
                postcode: {
                    type: "string",
                    required: true
                },
                bannerImage: {
                    type: "string",
                    required: true
                },
                logo: {
                    type: "string",
                    required: true
                },
                type: {
                    type: "string",
                    required: true
                },
                active: {
                    type: "boolean",
                    required: true
                }
            },
            tableName: 'shop'
        });
    }
}