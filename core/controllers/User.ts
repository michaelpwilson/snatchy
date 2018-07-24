import { Controller } from "./Controller";
import { UserModel } from "../models/User";

export class UserController extends Controller {
    constructor() {
        super(new UserModel());
    }
}