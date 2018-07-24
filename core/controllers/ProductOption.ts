import { Controller } from "./Controller";
import { ProductOptionModel } from "../models/ProductOption";

export class ProductOptionController extends Controller {
    constructor() {
        super(new ProductOptionModel());
    }
}