import { Model } from "./Model";

export class CompanyModel extends Model {
    constructor() {
        super({
            attributes: {
                user_id: {
                    type: "integer",
                    required: true
                },
                name: {
                    type: "string",
                    unique: true,
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
            tableName: 'company'
        });
    }
}