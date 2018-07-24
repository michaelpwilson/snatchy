import { Model } from "./Model";

export class TestModel extends Model {
    constructor() {
        super({
            attributes: {
                id: {
                    type: "integer",
                    primaryKey: true
                },
                email: {
                    type: "string",
                    email: true,
                    required: true,
                    unique: true
                },
                password: {
                    type: "string",
                    password: true,
                    required: true
                },
                otherColumn: {
                    type: "string",
                    required: true
                }
            },
            tableName: 'test'
        });
    }
}