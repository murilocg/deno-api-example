import User from './User.ts';

export default interface IUserRepository {
    createUser(user: User):Promise<User>;
    findOneUser(userId: String): Promise<User | undefined>;
    findUsers(query: any): Promise<Array<User>>;
    deleteUser(userId: String): Promise<Boolean>;
    updateUser(userId: String, user: User): Promise<User | undefined>;
}