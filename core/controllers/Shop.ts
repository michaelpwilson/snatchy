import { Controller } from "./Controller";
import { ShopModel } from "../models/Shop";

export class ShopController extends Controller {
    constructor() {
        super(new ShopModel());
    }
}