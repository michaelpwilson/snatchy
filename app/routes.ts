import * as Router from 'koa-router';
import * as fs     from 'fs';

const router = new Router();

class crudRoutes {
    controller: any;
    name: string;

    constructor(name: string, controller: any) {
        this.controller = new controller();
        this.name = name;

        this.create();
        this.read();
        this.update();
        this.destroy();
    }

    create() {
        router.post(`/${this.name}/create`, (ctx) => {
            return this.controller.update(ctx.params.id, {}).then(function (data: any) {
                ctx.body = data;
            }).catch(function(error: any) {
                ctx.body = error;
            });
        });
    }

    read() {
        router.get(`/${this.name}`, (ctx) => {
            return this.controller.read().then(function (data: any) {
                ctx.body = data;
            }).catch(function(error: any) {
                ctx.body = error;
            });
        });

        router.get(`/${this.name}/:id`, (ctx) => {
            return this.controller.read({ id: ctx.params.id }).then(function (data: any) {
                ctx.body = data;
            }).catch(function(error: any) {
                ctx.body = error;
            });
        });
    }

    update() {
        router.put(`/${this.name}/:id`, (ctx) => {
            return this.controller.update(ctx.params.id, {}).then(function (data: any) {
                ctx.body = data;
            }).catch(function(error: any) {
                ctx.body = error;
            });
        });
    }

    destroy() {
        router.delete(`/${this.name}/:id`, (ctx) => {
            return this.controller.destroy(ctx.params.id, {}).then(function (data: any) {
                ctx.body = data;
            }).catch(function(error: any) {
                ctx.body = error;
            });
        });
    }
}

var controllerDirectory = __dirname + "/../core/controllers";

fs.readdir(controllerDirectory, (error, files) => {
    if(error) {
        console.error("Could not find any controllers");
    } else {
        files.forEach(file => {
            var name = file.replace(/.ts/g, "");

            if(name !== "Controller") {
                var controllerName = name + "Controller",
                    routeName      = getRouteName(name),
                    controller     = require(controllerDirectory + "/" +  name);

                new crudRoutes(routeName, controller[controllerName]);
            }
        });
    }
})

function getRouteName(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
}

router.get('/healthcheck', async ctx => ctx.body = 'OK');

export const routes = router.routes();
