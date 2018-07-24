import { Controller } from "./Controller";
import { CategoryModel } from "../models/Category";

export class CategoryController extends Controller {
    constructor() {
        super(new CategoryModel());
    }
}