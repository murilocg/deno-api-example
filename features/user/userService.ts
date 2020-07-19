import UserRepository from './userRepository.ts';
import IUserService from './IUserService.ts';
import User from './User.ts';
import IUserRepository from './IUserRepository.ts';

export default class UserService implements IUserService {
    
    constructor(private userRepository: IUserRepository){};
    
    createUser = (user:User):Promise<User> => this.userRepository.createUser(user);

    deleteUser = (userId: String):Promise<Boolean> => this.userRepository.deleteUser(userId);

    findOneUser = (userId: String): Promise<User | undefined> => this.userRepository.findOneUser(userId);

    findUsers = async (query: any): Promise<Array<User>> => this.userRepository.findUsers(query);

    updateUser = (userId: String, user: User): Promise<User | undefined> => this.userRepository.updateUser(userId, user);
    
}