import { Database } from "../../app/database";

export class Model {
    db = new Database();
    table: any;
    attributes: any;
    attributeKeys: any;
    tableName: any;

    constructor(options: any) {
        this.tableName = options.tableName;
        this.attributes = options.attributes;

        this.attributes.id = {
            type: "integer",
            id: true
        };
        
        this.attributeKeys = Object.keys(this.attributes);
        this.table = this.db.db.define(this.tableName, this.getStructure());

        return this;
    }

    before() {
        return new Promise((resolve, reject) => { 
            this.db.db.sync().then((data: any) => {
                resolve(true);
            }).catch((error: any) => {
                reject(false);
            });
        });
    }

    create(data: any, options?: any) {
        return new Promise((resolve, reject) => {
            this.before().then(() => {
                this.table.create(data).then((item: any) => {
                    let response: any = {
                        response: item.toJSON()
                    };
    
                    if(options && options.hasOwnProperty("attributeKeys")) {
                        response.attributeKeys = this.attributeKeys;
                    }
                    resolve(response);
                }).catch((error: any) => {
                    reject(error);
                });
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    read(where?: any, options?: any) {
        return new Promise((resolve, reject) => {
            this.before().then(() => {
                this.table.findAll({
                    where: where
                }).then((items: any) => {
                    let response: any = {
                        response: items
                    };
    
                    if(options && options.hasOwnProperty("attributeKeys")) {
                        response.attributeKeys = this.attributeKeys;
                    }
                    resolve(response);
                }).catch((error: any) => {
                    reject(error);
                });
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    update(id: any, data: any, options?: any) {
        return new Promise((resolve, reject) => {
            if(!id) {
                reject("No ID given to update");
            } else {
                this.before().then(() => {
                    this.table.find({
                        where: {
                            id: id
                        }
                    }).then((item: any) => {
                        if(!item) {
                            reject("No item found");
                        } else {
                            item.update(data).then((item: any) => {
                                let response: any = {
                                    response: item.toJSON()
                                };
                
                                if(options && options.hasOwnProperty("attributeKeys")) {
                                    response.attributeKeys = this.attributeKeys;
                                }
                                resolve(response);
                            }).catch((error: any) => {
                                reject(error);
                            });
                        }
                    }).catch((error: any) => {
                        reject(error);
                    })
                }).catch((error: any) => {
                    reject(error);
                });
            }
        });
    }

    destroy(id: any, options?: any) {
        return new Promise((resolve, reject) => {
            if(!id) {
                reject("No ID given to destroy");
            } else {
                this.before().then(() => {
                    this.table.destroy({
                        where: {
                            id: id
                        }
                    }).then((item: any) => {
                        if(item === 1) {
                            let response: any = {
                                response: item
                            };
            
                            if(options && options.hasOwnProperty("attributeKeys")) {
                                response.attributeKeys = this.attributeKeys;
                            }
                            resolve(response);
                        } else {
                            reject(`Record with id not found: ${id}`);
                        }
                    }).catch((error: any) => {
                        reject(error);
                    })
                }).catch((error: any) => {
                    reject(error);
                });
            }
        });
    }

    getStructure() {
        let structure: any = {};

        for(var i = 0; i < this.attributeKeys.length; i++) {
            let attribute = this.attributes[this.attributeKeys[i]];
            let type = attribute.type.toUpperCase();

            structure[this.attributeKeys[i]] = {
                type: this.db.seq[type],
                validate: {}
            };

            if(attribute.id === true) {
                structure[this.attributeKeys[i]] = {
                    type: this.db.seq.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                }
            }

            if(attribute.primaryKey === true) {
                structure[this.attributeKeys[i]].primaryKey = true;
            }

            if(attribute.unique === true) {
                structure[this.attributeKeys[i]].unique = true;
            }

            if(attribute.email === true) {
                structure[this.attributeKeys[i]].validate.isEmail = true;
            }

            if(attribute.url === true) {
                structure[this.attributeKeys[i]].validate.isUrl = true;
            }

            if(attribute.required === true) {
                structure[this.attributeKeys[i]].allowNull = false;
                structure[this.attributeKeys[i]].validate.notEmpty = true;
            }
        }

        return structure;
    }
}