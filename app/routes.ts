import * as Router from 'koa-router';
import { UserController } from "../core/controllers/User";
import { CompanyController } from '../core/controllers/Company';
import { ShopController } from '../core/controllers/Shop';
import { CategoryController } from '../core/controllers/Category';
import { ProductController } from '../core/controllers/Product';
import { ProductSizeController } from '../core/controllers/ProductSize';
import { ProductOptionController } from '../core/controllers/ProductOption';

const router = new Router();

class crudRoutes {
    controller: any;
    name: string;

    constructor(name: string, controller: any) {
        this.controller = controller;
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

new crudRoutes("user", new UserController());
new crudRoutes("company", new CompanyController());
new crudRoutes("shop", new ShopController());
new crudRoutes("category", new CategoryController());
new crudRoutes("product", new ProductController());
new crudRoutes("productSize", new ProductSizeController());
new crudRoutes("productOption", new ProductOptionController());


router.get('/healthcheck', async ctx => ctx.body = 'OK');

router.post('/test', async ctx => {
    ctx.body = 'OK';
});

export const routes = router.routes();
