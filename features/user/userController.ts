import IUserService from './IUserService.ts';
import User from './User.ts';
import { getQuery } from '../shared/http.ts';
import { Request, Response } from 'https://deno.land/x/oak/mod.ts';

export default class UserController {
    
    constructor(private userService:IUserService){}

    createUser = async ({ request, response }: { request: Request, response: Response }) => {
        const body = await request.body();
        const user = await this.userService.createUser(body.value); 
        response.status = 200;
        response.body = user;
    }

    deleteUser = async ({ params, response }: { params: any, response: Response }) => {
        const deleted  = await this.userService.deleteUser(params.userId);
        if(deleted) {
            response.status = 200;
            response.body = { message: "User deleted" };
        } else {
            response.status = 404;
            response.body = { message: "User not found" };
        }
    }

    findOneUser= async ({ params, response }: { params: any, response: Response }) => {
        console.log(params.userId);
        const user = await this.userService.findOneUser(params.userId); 
        if(user) {
            response.status = 200;
            response.body = user;
        } else {
            response.status = 404;
            response.body = { message: "User not found" };
        }
    }

    findUsers = async ({ request, response }: { request: Request, response: Response }) => {
        const query = getQuery(request);
        const users = await this.userService.findUsers(query);
        response.status = 200;
        response.body = users;
    }

    updateUser = async ({ params, request, response }: { params: any, request: Request, response: Response }) => {
        const body = await request.body();
        const updatedUser = await this.userService.updateUser(params.userId, body.value); 
        if(updatedUser) {
            response.status = 200;
            response.body = updatedUser;
        } else {
            response.status = 404;
            response.body = { message: "User not found" };
        }
    }
}