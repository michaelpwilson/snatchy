import { Model } from "../models/Model";

export class Controller {
    model: Model;
    User: any;
    ctx: any;

    constructor(model: Model) {
        this.model = model;
    }

    create(data: any, options?: any) {
        if(!options) options = {};

        return new Promise((resolve, reject) => {
            this.model.create(data, options).then((data: any) => {
                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    read(where?: any, options?: any) {
        if(!options) options = {};

        return new Promise((resolve, reject) => {
            this.model.read(where, options).then((data: any) => {
                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    update(id: number, data: any, options?: any) {
        if(!options) options = {};

        return new Promise((resolve, reject) => {
            this.model.update(id, data, options).then((data: any) => {
                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    destroy(id: number, options?: any) {
        if(!options) options = {};

        return new Promise((resolve, reject) => {
            this.model.destroy(id, options).then((data: any) => {
                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }
}