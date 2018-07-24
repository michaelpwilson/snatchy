const Sequelize = require('sequelize');

export class Database {
    db: any = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        storage: '../new.db',
        operatorsAliases: false,
        logging: false
    });
    seq: any = Sequelize;

    constructor() {
        return this;
    }
}