import UserController from './userController.ts';
import UserService from './userService.ts';
import UserRepository from './userRepository.ts';
import { users } from '../datasource/mongodb.ts';
import { Router }from 'https://deno.land/x/oak/mod.ts';

const controller = new UserController(new UserService(new UserRepository(users)));

const router = new Router({ prefix: "/user" });
router.get('/', controller.findUsers);
router.get('/:userId', controller.findOneUser);
router.post('/', controller.createUser);
router.put('/:userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);

export default router