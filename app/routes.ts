import * as Router from 'koa-router';
import { UserController } from "../core/controllers/User";

const router = new Router();

var User = new UserController();

router.post('/user/create', function(ctx, next) {
    return User.update(ctx.params.id, {}).then(function (data: any) {
        ctx.body = data;
    }).catch(function(error: any) {
        ctx.body = error;
    });
});

router.get('/user', function(ctx, next) {
    return User.read().then(function (data: any) {
        ctx.body = data;
    }).catch(function(error: any) {
        ctx.body = error;
    });
});

router.get('/user/:id', function(ctx, next) {
    return User.read({ id: ctx.params.id }).then(function (data: any) {
        ctx.body = data;
    }).catch(function(error: any) {
        ctx.body = error;
    });
});

router.post('/user/:id', function(ctx, next) {
    return User.update(ctx.params.id, {}).then(function (data: any) {
        ctx.body = data;
    }).catch(function(error: any) {
        ctx.body = error;
    });
});

router.delete('/user/:id', function(ctx, next) {
    return User.update(ctx.params.id, {}).then(function (data: any) {
        ctx.body = data;
    }).catch(function(error: any) {
        ctx.body = error;
    });
});

/**
 * Basic healthcheck
 */
router.get('/healthcheck', async ctx => ctx.body = 'OK');

export const routes = router.routes();
