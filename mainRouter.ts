import { Router, Application, Context, Response } from 'https://deno.land/x/oak/mod.ts';
import UserRouter from './features/user/userRouter.ts';

const r = new Router();

const httpError = (response: Response, e: Error): Response => {
    response.status = 500;
    response.body = e;
    return response;
}

const errorHandler = async (ctx: Context, next: Function) => {
    try{
        await next();
    }catch(e){
        httpError(ctx.response, e);
    }
  }

const router = (app: Application) => {
    app.use(errorHandler);
    app.use(UserRouter.routes());
    return app;
}

export default router;