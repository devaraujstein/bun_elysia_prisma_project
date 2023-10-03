import app from './external/api/config';

import UserRepositoryPrisma from "./external/prisma/UserRepositoryPrisma";

import RegisterUser from "./core/users/service/RegisterUser";
import RegisterUserController from "./adapters/RegisterUserController";

import ConsultUsers from "./core/users/service/ConsultUsers";
import ConsultUsersController from "./adapters/ConsultUsersController";

import ConsultUserById from "./core/users/service/ConsultUserById";
import ConsultUserByIdController from "./adapters/ConsultUserByIdController";

// ---- Registry Routes ----

const userRepository = new UserRepositoryPrisma();

const registerUser = new RegisterUser(userRepository);
new RegisterUserController(app, registerUser);

const consultUsers = new ConsultUsers(userRepository);
new ConsultUsersController(app, consultUsers);

const consultUserById = new ConsultUserById(userRepository);
new ConsultUserByIdController(app, consultUserById);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
