import IUserRepository from "./IUserRepository.ts";
import { Collection } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import User from "./User.ts";

export default class UserRepository implements IUserRepository{

    constructor(private UserSchema:Collection){}
    
    createUser = (user: User): Promise<User> => this.UserSchema.insertOne(user);

    deleteUser = async (userId: String): Promise<Boolean> => {
        const count = await this.UserSchema.deleteOne({ _id: { "$oid": userId }});
        return count === 1;
    }

    findOneUser = (userId: String): Promise<User | undefined> => this.UserSchema.findOne({ _id: { "$oid": userId }});

    findUsers = (query: any): Promise<Array<User>> => this.UserSchema.find(query);

    updateUser = async (userId: String, user: User): Promise<User | undefined> => {
        const { modifiedCount } = await this.UserSchema.updateOne({ _id: { "$oid": userId }}, user);
        return modifiedCount === 1 ? this.findOneUser(userId) : undefined;
    }
}