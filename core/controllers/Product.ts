import { Controller } from "./Controller";
import { ProductModel } from "../models/Product";

export class ProductController extends Controller {
    constructor() {
        super(new ProductModel());
    }
}