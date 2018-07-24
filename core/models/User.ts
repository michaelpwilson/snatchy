import { Model } from "./Model";

export class UserModel extends Model {
    constructor() {
        super({
            attributes: {
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
                firstName: {
                    type: "string",
                    required: true
                },
                lastName: {
                    type: "string",
                    required: true
                },
                gender: {
                    type: "string",
                    required: true
                },
                type: {
                    type: "string",
                    required: true
                }
            },
            tableName: 'user'
        });
    }
}