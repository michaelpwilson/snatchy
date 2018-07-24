import { expect, should } from "chai";
let Should = should();

export class CrudTest {
    opts: any;
    controller: any;
    emailOne   = "user1-" + this.makeid() + "@kuflink.co.uk";
    emailTwo   = "user2-" + this.makeid() + "@kuflink.co.uk";
    emailThree = "user3-" + this.makeid() + "@kuflink.co.uk";
    emailFour  = "user4-" + this.makeid() + "@kuflink.co.uk";
    emailFive  = "user5-" + this.makeid() + "@kuflink.co.uk";
    originalCreateData: any;
    createData: any;

    makeid() {
      let text = "";
      let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    
      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  
    constructor(opts: any, createData: any, noUniques?: any) {    
      this.opts = opts;
      this.controller = opts.controller;
  
      let self = this;
    
      describe(opts.name, function () {
        self.create(createData, noUniques);
        self.read(createData);
        self.update(createData);
        self.destroy(createData);
      });
    }

    populateUniques(createData: any, ifEmail?: any) {
      for(let prop in createData) {
        if(typeof createData[prop] === "object" && createData[prop].hasOwnProperty("unique") && createData[prop].unique === true ) {
          if(createData[prop].hasOwnProperty("email") && createData[prop].email === true) {
            createData[prop] = ifEmail;
          } else {
            createData[prop] = this.makeid();
          }
        }
      }
      return createData;
    }
  
    create(createData: any, noUniques: boolean) {
      let self = this;
  
      describe('Creating', () => {
        it('Should create and return a valid model', () => {
          return new Promise((resolve, reject) => {
            this.originalCreateData = createData;

            this.createData = this.populateUniques(createData, this.emailOne);

            let action = this.controller.create(createData, { attributeKeys: true });
    
            action.then((data: any) => {
                Should.exist(data);
                data.should.be.a("object");
                expect(data).to.have.property("response");
                data.response.should.be.a("object");
                expect(data).to.have.property("attributeKeys");

                for(let i = 0; i < data.attributeKeys.length; i++) {
                expect(data.response).to.have.property(data.attributeKeys[i]);
                }
                resolve(data);
            }).catch((error: any) => {
              console.log(error);
              reject(error);
            });
          });
        });
        if(!noUniques) {
          it('Should error when not using a unique field', () => {
            return new Promise((resolve, reject) => {
              let action = this.controller.create(this.createData, { attributeKeys: true });
      
              action.then((data: any) => {
                reject(data);
              }).catch((error: any) => {
                this.createData = this.originalCreateData;
                Should.exist(error);
                resolve(error);
              });
            });
          });
        }
      });
    }
  
    read(createData: any) {
      describe('Reading', () => {
        it('Should return all items', () => {
          return new Promise((resolve, reject) => {
            let action = this.controller.read({}, { attributeKeys: true });
    
            action.then((data: any) => {
              data.should.be.a("object");
              expect(data).to.have.property("response");
              data.response.should.be.a("array");
              expect(data).to.have.property("attributeKeys");
    
              for(let i = 0; i < data.attributeKeys.length; i++) {
                expect(data.response[0]).to.have.property(data.attributeKeys[i]);
              }
              resolve(data);
            }).catch((error: any) => {
              reject(error);
            });
          });
        });
        it('Should return specific items', () => {
          return new Promise((resolve, reject) => {
            let action = this.controller.read(this.getFieldFromCreateData(createData), { attributeKeys: true });
    
            action.then((data: any) => {
                data.should.be.a("object");
                expect(data).to.have.property("response");
                data.response.should.be.a("array");
                expect(data).to.have.property("attributeKeys");
                for(let i = 0; i < data.attributeKeys.length; i++) {
                    expect(data.response[0]).to.have.property(data.attributeKeys[i]);
                }
                resolve(data);
            }).catch((error: any) => {
              reject(error);
            });
          });
        });
        it('Should return no items', () => {
          return new Promise((resolve, reject) => {
            let action = this.controller.read({ id: 1000000 });
    
            action.then((data: any) => {
              Should.exist(data.response);
              data.response.should.be.a("array");
              resolve(data);
            }).catch((error: any) => {
              reject(error);
            });
          });
        });
      });
    }

    getFieldFromCreateData(createData: any) {
      var data: any = {};
      var keys = Object.keys(createData);
      var columnName = keys[2];
      var columnData = createData[columnName];
      
      data[columnName] = columnData;

      return data;
    }

    update(createData: any) {
        let self = this;

        describe('Updating', () => {
            it('Should update existing record and return a valid model', () => {
              return new Promise((resolve, reject) => {
                let read = this.controller.read({}, { attributeKeys: true });
    
                read.then((data: any) => {
                  let action = this.controller.update(data.response[0].id, this.getFieldFromCreateData(createData), { attributeKeys: true });
          
                  action.then((data: any) => {
                      Should.exist(data);
                      data.should.be.a("object");
                      expect(data).to.have.property("response");
                      data.response.should.be.a("object");
                      expect(data).to.have.property("attributeKeys");
                      resolve(data);
                  }).catch((error: any) => {
                    reject(error);
                  });
                }).catch((error: any) => {
                  reject(error);
                });
              });
            });
            it('Should error when no ID is given', () => {
              return new Promise((resolve, reject) => {  
                let action = this.controller.update(null, {
                  lastName: "Wooop"
                }, { attributeKeys: true });
      
                action.then((data: any) => {
                  reject(data);
                }).catch((error: any) => {
                  Should.exist(error);
                  error.should.be.a("string");
                  error.should.equal("No ID given to update");
                  resolve(error);
                });
              });
            });
            // should look at this later
            // 
            // TypeError: Cannot read property 'update' of null
            //
            it('Should error when no record is found', () => {
              return new Promise((resolve, reject) => {
                let action = this.controller.update(80000000, {
                  lastName: "Wooop"
                }, { attributeKeys: true });
        
                action.then((data: any) => {
                  reject(data);
                }).catch((error: any) => {
                  Should.exist(error);
                  resolve(error);
                });
              });
            });
          });
    }

    destroy(createData: any) {
        describe('Destroying', () => {
            it('Should destroy existing record', () => {
              return new Promise((resolve, reject) => {
                let read = this.controller.read({}, { attributeKeys: true });
    
                read.then((data: any) => {
                  let action = this.controller.destroy(data.response[0].id, { attributeKeys: true });
          
                  action.then((data: any) => {
                      Should.exist(data);
                      data.should.be.a("object");
                      expect(data).to.have.property("response");
                      data.response.should.be.a("number");
                      expect(data).to.have.property("attributeKeys");
                      resolve(data);
                  }).catch((error: any) => {
                      reject(error);
                  });
                }).catch((error: any) => {
                  reject(error);
                });
              });
            });
            it('Should error when no ID is given', () => {
              return new Promise((resolve, reject) => {
                  let action = this.controller.destroy(null, { attributeKeys: true });
        
                  action.then((data: any) => {
                    reject(data);
                  }).catch((error: any) => {
                    Should.exist(error);
                    error.should.be.a("string");
                    error.should.equal("No ID given to destroy");
                    resolve(error);
                  });
              });
            });
            // should look at this later
            // 
            // TypeError: Cannot read property 'update' of null
            //
            it('Should error when no record is found', () => {
              return new Promise((resolve, reject) => {
                let action = this.controller.destroy(80000000, { attributeKeys: true });
        
                action.then((data: any) => {
                  reject(data);
                }).catch((error: any) => {
                  Should.exist(error);
                  resolve(error);
                });
              });
            });
          });
    }
  }