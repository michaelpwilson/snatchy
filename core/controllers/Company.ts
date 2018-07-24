import { Controller } from "./Controller";
import { CompanyModel } from "../models/Company";

export class CompanyController extends Controller {
    constructor() {
        super(new CompanyModel());
    }
}