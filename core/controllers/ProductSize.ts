import { Controller } from "./Controller";
import { ProductSizeModel } from "../models/ProductSize";

export class ProductSizeController extends Controller {
    constructor() {
        super(new ProductSizeModel());
    }
}